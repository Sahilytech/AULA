/* Optional Supabase synchronization layer. Uses the public anon key only. */
window.LUMI_SYNC={
 client:null,
 async init(){if(this.client)return this.client;const c=window.LUMI_CONFIG||{};if(!c.SUPABASE_URL||!c.SUPABASE_ANON_KEY||!window.supabase)return null;this.client=window.supabase.createClient(c.SUPABASE_URL,c.SUPABASE_ANON_KEY);return this.client},
 async session(){const c=await this.init();if(!c)return null;return (await c.auth.getSession()).data.session},
 async save(kind,data){const c=await this.init(),s=await this.session();if(!c||!s)return false;const {error}=await c.from('academic_items').upsert({user_id:s.user.id,kind,data,updated_at:new Date().toISOString()});if(error)throw error;return true},
 async list(kind){const c=await this.init(),s=await this.session();if(!c||!s)return[];const {data,error}=await c.from('academic_items').select('*').eq('user_id',s.user.id).eq('kind',kind).order('updated_at',{ascending:false});if(error)throw error;return data||[]}
};
