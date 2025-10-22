document.addEventListener('DOMContentLoaded', function(){
  const y = new Date().getFullYear();
  document.getElementById('year')?.textContent = y;
  document.getElementById('year2')?.textContent = y;
  document.getElementById('year3')?.textContent = y;
  document.getElementById('yearDash')?.textContent = y;

  const navBtn = document.getElementById('navToggle');
  const menu = document.getElementById('menuList');
  if(navBtn){
    navBtn.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      if(menu) menu.style.display = expanded ? '' : 'block';
    });
  }

  function onlyDigits(v){ return v.replace(/\D/g,''); }
  function maskCPF(v){ v = onlyDigits(v).slice(0,11); v = v.replace(/(\d{3})(\d)/,'$1.$2'); v = v.replace(/(\d{3})(\d)/,'$1.$2'); v = v.replace(/(\d{3})(\d{1,2})$/,'$1-$2'); return v; }
  function maskPhone(v){ v = onlyDigits(v).slice(0,11); if(v.length<=10){ v = v.replace(/(\d{2})(\d)/,'($1) $2'); v = v.replace(/(\d{4})(\d)/,'$1-$2'); } else { v = v.replace(/(\d{2})(\d)/,'($1) $2'); v = v.replace(/(\d{5})(\d)/,'$1-$2'); } return v; }
  function maskCEP(v){ v = onlyDigits(v).slice(0,8); v = v.replace(/(\d{5})(\d)/,'$1-$2'); return v; }
  function setMask(el, fn){ if(!el) return; el.addEventListener('input', function(){ const pos=this.selectionStart; const oldLen=this.value.length; this.value = fn(this.value); const newLen=this.value.length; this.selectionStart = this.selectionEnd = pos + (newLen-oldLen); }); }
  setMask(document.getElementById('cpf'), maskCPF);
  setMask(document.getElementById('phone'), maskPhone);
  setMask(document.getElementById('cep'), maskCEP);

  const form = document.getElementById('registrationForm');
  if(form){
    form.addEventListener('submit', function(e){
      if(!form.checkValidity()){ form.reportValidity(); e.preventDefault(); return; }
      const cpf = document.getElementById('cpf')?.value || '';
      const cpfDigits = (cpf.match(/\d/g) || []).join('');
      if(cpfDigits.length !== 11){ alert('CPF inválido. Verifique.'); e.preventDefault(); return; }
      const payload = {};
      new FormData(form).forEach((v,k)=> payload[k]=v);
      console.log('Payload simulado: ', payload);
      alert('Cadastro simulado enviado. Confira console.');
      e.preventDefault();
    });
  }
});