/* AULA academic engine: API-backed dashboard, subjects, activities and evidence */
const AULA_API = window.AULA_API || 'http://localhost:8000';
const aulaApi = async (path, options={}) => { const r=await fetch(`${AULA_API}${path}`, options); if(!r.ok) throw new Error(await r.text()); return r.json(); };
window.aulaAcademic = {
  async dashboard(){ return aulaApi('/api/dashboard'); },
  async profile(){ return aulaApi('/api/profile'); },
  async saveProfile(data){ return aulaApi('/api/profile',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}); },
  async subjects(){ return aulaApi('/api/subjects'); },
  async addSubject(data){ return aulaApi('/api/subjects',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}); },
  async editSubject(id,data){ return aulaApi(`/api/subjects/${id}`,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}); },
  async removeSubject(id){ return aulaApi(`/api/subjects/${id}`,{method:'DELETE'}); },
  async activities(){ return aulaApi('/api/activities'); },
  async addActivity(data){ return aulaApi('/api/activities',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}); },
  async editActivity(id,data){ return aulaApi(`/api/activities/${id}`,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}); },
  async uploadEvidence(activityId,file){ const form=new FormData(); form.append('file',file); return aulaApi(`/api/activities/${activityId}/evidence`,{method:'POST',body:form}); }
};
