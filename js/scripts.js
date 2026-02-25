// MENÚ LATERAL DERECHA
const btnMenu = document.getElementById('btn-menu');
const menuLateral = document.getElementById('menu-lateral');

btnMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    menuLateral.classList.toggle('active');
});

document.body.addEventListener('click', (e) => {
    if (!menuLateral.contains(e.target) && menuLateral.classList.contains('active') && e.target !== btnMenu) {
        menuLateral.classList.remove('active');
    }
});

const enlacesMenu = menuLateral.querySelectorAll('a');
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
        menuLateral.classList.remove('active');
    });
});

// CARRUSEL
const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
    const imgs = slider.querySelectorAll('img');
    const btnPrev = slider.querySelector('.prev');
    const btnNext = slider.querySelector('.next');
    let index = 0;

    function showImage(i) {
        imgs.forEach((img, idx) => {
            img.classList.remove('active');
            if(idx === i) img.classList.add('active');
        });
    }

    btnNext.addEventListener('click', (e) => {
        e.stopPropagation();
        index = (index + 1) % imgs.length;
        showImage(index);
    });

    btnPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        index = (index - 1 + imgs.length) % imgs.length;
        showImage(index);
    });

    showImage(index);
});