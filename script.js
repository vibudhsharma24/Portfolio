
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  });
});
const menuBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if(menuBtn){
  menuBtn.addEventListener('click', ()=>{
    const shown = navLinks.style.display === 'flex';
    navLinks.style.display = shown ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.background = 'rgba(0,0,0,0.25)';
    navLinks.style.position = 'absolute';
    navLinks.style.right = '1rem';
    navLinks.style.top = '4.25rem';
    navLinks.style.padding = '0.75rem';
    navLinks.style.borderRadius = '8px';
  });
}
