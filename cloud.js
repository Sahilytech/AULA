/* LUMI Online bridge. Only public Supabase settings belong in the browser. */
window.LUMI_CLOUD={
 config(){return window.LUMI_CONFIG||{}},
 ready(){const c=this.config();return Boolean(c.API_BASE)},
 async ai(messages,model){if(!this.ready())throw new Error('LUMI Cloud is not configured');const r=await fetch(`${this.config().API_BASE.replace(/\/$/,'')}/api/ai/chat`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages,model})});const d=await r.json();if(!r.ok)throw new Error(d.error||'AI gateway error');return d},
 async health(){if(!this.ready())return false;try{return (await fetch(`${this.config().API_BASE.replace(/\/$/,'')}/health`)).ok}catch{return false}}
};
async function lumiOnlineBrain(text,history=[]){const messages=[{role:'system',content:'You are LUMI, a supportive academic assistant. Help students learn; do not replace their own work. Be concise, structured and practical. Respond in the user\'s selected language.'},...history.slice(-8),{role:'user',content:String(text||'').slice(0,8000)}];return LUMI_CLOUD.ai(messages)}
