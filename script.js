const header=document.getElementById('header');const menu=document.querySelector('.mobile-menu');const toggle=document.querySelector('.menu-toggle');const close=document.querySelector('.menu-close');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>30));
function openMenu(){menu.classList.add('open');menu.setAttribute('aria-hidden','false');toggle.setAttribute('aria-expanded','true');document.body.style.overflow='hidden'}
function closeMenu(){menu.classList.remove('open');menu.setAttribute('aria-hidden','true');toggle.setAttribute('aria-expanded','false');document.body.style.overflow=''}
toggle?.addEventListener('click',openMenu);close?.addEventListener('click',closeMenu);menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.classList.contains('open'))closeMenu()});
function subscribe(e){e.preventDefault();document.getElementById('form-message').textContent='Thank you. You are on the RazielAnn list.';e.target.reset();return false}
