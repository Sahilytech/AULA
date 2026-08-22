(function(){
  const PDF_WORKER='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  if(window.pdfjsLib){window.pdfjsLib.GlobalWorkerOptions.workerSrc=PDF_WORKER;}
  if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}
  window.addEventListener('error',e=>{if(/initSqlJs|pdfjs|pdf\.js/i.test(String(e.message||''))) console.warn('LUMI runtime:',e.message);});
})();
