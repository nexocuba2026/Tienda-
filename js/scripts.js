// ==========================
// MENÚ LATERAL DERECHA
// ==========================
const btnMenu = document.getElementById('btn-menu');
const menuLateral = document.getElementById('menu-lateral');

// Mostrar / Ocultar menú
btnMenu.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el click se propague al body
    menuLateral.classList.toggle('active');
});

// Ocultar menú al hacer click fuera
document.body.addEventListener('click', (e) => {
    if (!menuLateral.contains(e.target) && menuLateral.classList.contains('active') && e.target !== btnMenu) {
        menuLateral.classList.remove('active');
    }
});

// Ocultar menú al hacer click en cualquier enlace
const enlacesMenu = menuLateral.querySelectorAll('a');
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
        menuLateral.classList.remove('active');
    });
});

// ==========================
// CARRUSEL DE IMÁGENES POR TARJETA
// ==========================
const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
    const imgs = slider.querySelectorAll('img');
    const btnPrev = slider.querySelector('.prev');
    const btnNext = slider.querySelector('.next');
    let index = 0;

    // Función para mostrar imagen activa
    function showImage(i) {
        imgs.forEach((img, idx) => {
            img.classList.remove('active');
            if(idx === i) img.classList.add('active');
        });
    }

    // Botón siguiente
    btnNext.addEventListener('click', (e) => {
        e.stopPropagation();
        index = (index + 1) % imgs.length;
        showImage(index);
    });

    // Botón anterior
    btnPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        index = (index - 1 + imgs.length) % imgs.length;
        showImage(index);
    });

    // Inicializar carrusel
    showImage(index);
});