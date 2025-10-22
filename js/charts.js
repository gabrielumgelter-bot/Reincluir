document.addEventListener('DOMContentLoaded', function(){
  const donationsCtx = document.getElementById('donationsChart')?.getContext('2d');
  const volunteersCtx = document.getElementById('volunteersChart')?.getContext('2d');
  if(donationsCtx){
    new Chart(donationsCtx, { type:'line', data:{ labels:['Jan','Fev','Mar','Abr','Mai','Jun'], datasets:[{ label:'Doações (R$)', data:[1200,1800,2600,2400,3200,4000], borderColor:'#2f8f5a', backgroundColor:'rgba(47,143,90,0.08)', tension:0.3 }]}, options:{ responsive:true, plugins:{ legend:{ display:false } } } });
  }
  if(volunteersCtx){
    new Chart(volunteersCtx, { type:'doughnut', data:{ labels:['Educação','Saúde','Requalificação'], datasets:[{ data:[30,20,25], backgroundColor:['#2f8f5a','#7fb88f','#d1e7d8'] }]}, options:{ responsive:true } });
  }
});