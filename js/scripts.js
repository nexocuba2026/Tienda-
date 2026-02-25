// ========================================
// SLIDER DE IMÁGENES EN TARJETAS
// ========================================
document.querySelectorAll('.tarjeta').forEach(tarjeta => {
    const slides = tarjeta.querySelectorAll('img');
    let index = 0;

    const prev = tarjeta.querySelector('.prev');
    const next = tarjeta.querySelector('.next');

    function showSlide(i) {
        slides.forEach(slide => slide.classList.add('hidden'));
        slides[i].classList.remove('hidden');
    }

    prev.addEventListener('click', () => {
        index = (index === 0) ? slides.length - 1 : index - 1;
        showSlide(index);
    });

    next.addEventListener('click', () => {
        index = (index === slides.length - 1) ? 0 : index + 1;
        showSlide(index);
    });

    // Mostrar primer slide
    showSlide(index);
});

// ========================================
// MENÚ LATERAL DESPLEGABLE
// ========================================
const btnMenu = document.getElementById('btn-menu');
const menuLateral = document.getElementById('menu-lateral');

btnMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('active');
});

// Cerrar menú si se hace clic fuera
document.addEventListener('click', (e) => {
    if (!menuLateral.contains(e.target) && !btnMenu.contains(e.target)) {
        menuLateral.classList.remove('active');
    }
});