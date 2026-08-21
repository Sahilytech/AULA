const themeBtn=document.getElementById('theme');
const saved=localStorage.getItem('lumi-theme');
if(saved==='light')document.body.classList.add('light');
themeBtn.textContent=document.body.classList.contains('light')?'☀':'☾';
themeBtn.onclick=()=>{document.body.classList.toggle('light');const light=document.body.classList.contains('light');localStorage.setItem('lumi-theme',light?'light':'dark');themeBtn.textContent=light?'☀':'☾'};
function scrollToId(id){document.getElementById(id)?.scrollIntoView({behavior:'smooth'})}
function addTask(){const title=prompt('Nombre de la tarea:');if(!title)return;const task=document.createElement('label');task.className='task';task.innerHTML=`<input type="checkbox"><span><b>${escapeHTML(title)}</b><small>Agregada ahora · LUMI</small></span><em>Nueva</em>`;document.getElementById('tasks').appendChild(task);task.querySelector('input').onchange=updateDone}
function updateDone(){const checked=[...document.querySelectorAll('.task input:checked')].length;document.getElementById('doneCount').textContent=3+checked}
function demoAI(){const q=prompt('¿Qué querés estudiar?');if(q)alert(`LUMI: Prepararía una sesión de estudio sobre “${q}”. La integración con modelos reales se puede conectar mediante un proveedor configurado.`)}
function addProvider(){const name=prompt('Nombre del proveedor de IA:');if(name)alert(`${name} fue preparado como proveedor configurable. En una integración real, la API key debe mantenerse en variables de entorno.`)}
let seconds=1500,interval=null;function renderTimer(){const m=String(Math.floor(seconds/60)).padStart(2,'0'),s=String(seconds%60).padStart(2,'0');document.getElementById('timer').textContent=`${m}:${s}`}
function startTimer(){const btn=document.getElementById('timerBtn');if(interval){clearInterval(interval);interval=null;btn.textContent='Continuar';btn.classList.remove('running');return}btn.textContent='Pausar';btn.classList.add('running');interval=setInterval(()=>{if(seconds>0){seconds--;renderTimer()}else{clearInterval(interval);interval=null;btn.textContent='Terminado';alert('Sesión de Focus completada.')}},1000)}
function escapeHTML(s){return s.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
document.querySelectorAll('.task input').forEach(x=>x.addEventListener('change',updateDone));
