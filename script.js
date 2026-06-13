const cards=document.querySelectorAll('.game-tile,.phone-card');
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.animate([{transform:'translateY(22px)',opacity:.2},{transform:'translateY(0)',opacity:1}],{duration:650,easing:'cubic-bezier(.2,.7,.2,1)',fill:'both'});});},{threshold:.15});cards.forEach(c=>io.observe(c));

// Mobile hamburger menu toggle
const navToggle=document.querySelector('.nav-toggle');
const siteHeader=document.querySelector('.site-header');
if(navToggle&&siteHeader){
  navToggle.addEventListener('click',()=>{
    const open=siteHeader.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded',open?'true':'false');
  });
  siteHeader.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{
    siteHeader.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded','false');
  }));
}