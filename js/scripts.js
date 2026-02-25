// SLIDER DE TARJETAS
document.querySelectorAll('.tarjeta').forEach(tarjeta => {
    const slides = tarjeta.querySelectorAll('img');
    let index = 0;
    slides.forEach((img, i)=> { if(i===0) img.classList.add('active'); });
    const prev = tarjeta.querySelector('.prev');
    const next = tarjeta.querySelector('.next');
    function showSlide(i){
        slides.forEach(s=>s.classList.remove('active'));
        slides[i].classList.add('active');
    }
    prev.addEventListener('click',()=>{ index = (index===0)?slides.length-1:index-1; showSlide(index); });
    next.addEventListener('click',()=>{ index = (index===slides.length-1)?0:index+1; showSlide(index); });
});

// MENÚ LATERAL DESPLEGABLE
const btnMenu = document.getElementById('btn-menu');
const menuLateral = document.getElementById('menu-lateral');
btnMenu.addEventListener('click', ()=> menuLateral.classList.toggle('active'));
document.addEventListener('click', e=>{
    if(!menuLateral.contains(e.target) && !btnMenu.contains(e.target)){
        menuLateral.classList.remove('active');
    }
});