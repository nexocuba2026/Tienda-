document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MENÚ LATERAL
    ========================== */

    const btnMenu = document.getElementById("btn-menu");
    const menuLateral = document.getElementById("menu-lateral");

    // Abrir / cerrar menú
    btnMenu.addEventListener("click", function (e) {
        e.stopPropagation();
        menuLateral.classList.toggle("active");
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener("click", function (e) {
        if (!menuLateral.contains(e.target) && !btnMenu.contains(e.target)) {
            menuLateral.classList.remove("active");
        }
    });

    // Cerrar menú al hacer click en cualquier enlace del menú
    const enlacesMenu = menuLateral.querySelectorAll("a");

    enlacesMenu.forEach(function (enlace) {
        enlace.addEventListener("click", function () {
            menuLateral.classList.remove("active");
        });
    });


    /* =========================
       CARRUSEL DE TARJETAS
    ========================== */

    const sliders = document.querySelectorAll(".slider");

    sliders.forEach(function (slider) {

        const images = slider.querySelectorAll("img");
        const btnPrev = slider.querySelector(".prev");
        const btnNext = slider.querySelector(".next");

        let index = 0;

        function showImage(i) {
            images.forEach(img => img.classList.remove("active"));
            images[i].classList.add("active");
        }

        btnNext.addEventListener("click", function (e) {
            e.stopPropagation();
            index++;
            if (index >= images.length) {
                index = 0;
            }
            showImage(index);
        });

        btnPrev.addEventListener("click", function (e) {
            e.stopPropagation();
            index--;
            if (index < 0) {
                index = images.length - 1;
            }
            showImage(index);
        });
// =======================
// MENÚ LATERAL
// =======================
function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle("active");
}

// =======================
// CARRUSEL POR TARJETA
// =======================
document.addEventListener("DOMContentLoaded", function(){

    const tarjetas = document.querySelectorAll(".card");

    tarjetas.forEach(tarjeta => {
        const imgs = tarjeta.querySelectorAll("img");
        let index = 0;

        const btnPrev = tarjeta.querySelector(".prev");
        const btnNext = tarjeta.querySelector(".next");

        // Mostrar la imagen inicial
        imgs.forEach((img, i) => img.style.display = (i===0) ? "block" : "none");

        // Función para cambiar imagen
        function cambiar(direccion){
            imgs[index].style.display = "none";
            index += direccion;
            if(index < 0) index = imgs.length -1;
            if(index >= imgs.length) index = 0;
            imgs[index].style.display = "block";
        }

        // Eventos botones
        btnPrev.addEventListener("click", ()=>cambiar(-1));
        btnNext.addEventListener("click", ()=>cambiar(1));

    });

});
    });

});