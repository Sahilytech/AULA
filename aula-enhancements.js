/* AULA — enhancements layer. Keeps the MVP stable while adding missing UX. */
(function(){
  const KEY='aula-state-v4';
  const $=(s,r=document)=>r.querySelector(s);
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function state(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch{return {}}}
  function save(s){localStorage.setItem(KEY,JSON.stringify({...s,docs:null}))}
  function subjects(){return state().subjects||[]}
  function addSubjectButton(){
    const view=$('#app-main'); if(!view || !location.hash.includes('materias') && !$('.nav.active[data-view="materias"]')) return;
    if($('.add-subject-btn')) return;
    const title=$('.section-title'); if(!title)return;
    const b=document.createElement('button'); b.className='primary add-subject-btn'; b.type='button'; b.textContent='＋ Agregar materia'; b.style.marginLeft='auto';
    title.style.display='flex'; title.style.alignItems='center'; title.style.gap='14px'; title.appendChild(b);
    b.onclick=()=>{
      const name=prompt('Nombre de la materia:'); if(!name?.trim())return;
      const topic=prompt('Tema actual (opcional):','Sin tema definido')||'Sin tema definido';
      const raw=prompt('Progreso inicial (0–100):','0'); const progress=Math.max(0,Math.min(100,Number(raw)||0));
      const s=state(); s.subjects=[...(s.subjects||[]),{name:name.trim(),topic:topic.trim(),progress}]; save(s); location.reload();
    };
  }
  function improveReader(){
    const input=$('#file'); if(!input)return;
    input.setAttribute('accept','.txt,.md,.csv,.pdf,.docx,.html,.htm,text/plain,text/markdown,text/csv,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/html');
    const card=input.closest('.upload-card');
    if(card && !$('.reader-formats',card)){const p=document.createElement('p');p.className='reader-formats muted';p.textContent='Formatos: TXT · MD · CSV · PDF · DOCX · HTML';card.appendChild(p)}
    if(input.dataset.aulaEnhanced)return; input.dataset.aulaEnhanced='1';
    input.addEventListener('change',async()=>{
      const f=input.files?.[0]; if(!f || !/\.docx$/i.test(f.name))return;
      try{
        if(!window.mammoth){const s=document.createElement('script');s.src='https://cdn.jsdelivr.net/npm/mammoth@1.8.0/mammoth.browser.min.js';document.head.appendChild(s);await new Promise((res,rej)=>{s.onload=res;s.onerror=rej})}
        const ab=await f.arrayBuffer(); const out=await window.mammoth.extractRawText({arrayBuffer:ab});
        const st=state();st.docs={name:f.name,text:out.value||'No se encontró texto en el documento.'};st.readerTab='resumen';st.quizIndex=0;st.quizScore=0;save(st);location.hash='#lector';location.reload();
      }catch(e){alert('No se pudo leer el DOCX. Probá guardarlo como PDF o TXT.');}
    });
  }
  function addReaderTools(){
    const panel=$('.reader-panel'); if(!panel || $('.reader-search',panel))return;
    const text=panel.querySelector('.analysis-content p[style*="white-space"]'); if(!text)return;
    const bar=document.createElement('div');bar.className='reader-search';bar.innerHTML='<input class="field" id="readerFind" placeholder="Buscar dentro del documento…"><span class="muted" id="readerFindCount"></span>';
    panel.insertBefore(bar,panel.querySelector('.doc-toolbar'));
    const inp=$('#readerFind',bar),count=$('#readerFindCount',bar);inp.oninput=()=>{const q=inp.value.trim().toLowerCase();if(!q){count.textContent='';return}const n=(text.textContent.toLowerCase().match(new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'g'))||[]).length;count.textContent=n?`${n} coincidencia${n===1?'':'s'}`:'Sin coincidencias'};
  }
  function boot(){addSubjectButton();improveReader();addReaderTools()}
  new MutationObserver(boot).observe(document.body,{childList:true,subtree:true});
  window.addEventListener('hashchange',boot); setTimeout(boot,100);
})();
