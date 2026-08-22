import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { createClient } from '@supabase/supabase-js';

const app=express();
app.use(cors({origin:(process.env.CORS_ORIGINS||'').split(',').map(s=>s.trim()).filter(Boolean)}));
app.use(express.json({limit:'256kb'}));
app.use(rateLimit({windowMs:60_000,max:60,standardHeaders:true,legacyHeaders:false}));
const PORT=process.env.PORT||8787;
const OR_URL='https://openrouter.ai/api/v1/chat/completions';
const supabase=process.env.SUPABASE_URL&&process.env.SUPABASE_SERVICE_ROLE_KEY?createClient(process.env.SUPABASE_URL,process.env.SUPABASE_SERVICE_ROLE_KEY):null;

app.get('/health',(_,res)=>res.json({ok:true,service:'lumi-cloud',version:'1.0'}));
app.post('/api/ai/chat',async(req,res)=>{
  if(!process.env.OPENROUTER_API_KEY)return res.status(503).json({error:'AI backend is not configured'});
  const {messages,model}=req.body||{};
  if(!Array.isArray(messages)||messages.length===0)return res.status(400).json({error:'messages is required'});
  const safe=messages.slice(-20).map(m=>({role:m.role==='assistant'?'assistant':'user',content:String(m.content||'').slice(0,8000)}));
  try{const r=await fetch(OR_URL,{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${process.env.OPENROUTER_API_KEY}`,'HTTP-Referer':process.env.APP_URL||'http://localhost:8080','X-Title':'LUMI Academic OS'},body:JSON.stringify({model:model||process.env.OPENROUTER_MODEL||'openai/gpt-4o-mini',messages:safe,temperature:.35})});const data=await r.json();if(!r.ok)return res.status(r.status).json({error:data?.error?.message||'AI provider error'});return res.json(data)}catch(e){return res.status(502).json({error:'AI gateway unavailable'})}
});
app.get('/api/profile',async(req,res)=>{if(!supabase)return res.status(503).json({error:'Cloud database is not configured'});const auth=req.headers.authorization;if(!auth)return res.status(401).json({error:'Missing authorization'});const token=auth.replace(/^Bearer\s+/i,'');const {data:{user},error}=await supabase.auth.getUser(token);if(error||!user)return res.status(401).json({error:'Invalid session'});const {data,error:dbError}=await supabase.from('profiles').select('*').eq('id',user.id).single();if(dbError)return res.status(404).json({error:'Profile not found'});res.json({profile:data})});
app.listen(PORT,()=>console.log(`LUMI Cloud listening on :${PORT}`));
