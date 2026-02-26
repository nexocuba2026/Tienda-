document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MENÚ LATERAL
    ========================== */

    const btnMenu = document.getElementById("btn-menu");
    const menuLateral = document.getElementById("menu-lateral");

    if (btnMenu && menuLateral) {

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

        // Cerrar menú al hacer click en enlaces
        const enlacesMenu = menuLateral.querySelectorAll("a");
        enlacesMenu.forEach(function (enlace) {
            enlace.addEventListener("click", function () {
                menuLateral.classList.remove("active");
            });
        });
    }


    /* =========================
       CARRUSEL POR TARJETA
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

        if (btnNext && btnPrev) {

            btnNext.addEventListener("click", function (e) {
                e.stopPropagation();
                index = (index + 1) % images.length;
                showImage(index);
            });

            btnPrev.addEventListener("click", function (e) {
                e.stopPropagation();
                index = (index - 1 + images.length) % images.length;
                showImage(index);
            });

        }

    });


    /* =========================
       WHATSAPP DINÁMICO
    ========================== */

    const numeroWhatsApp = "5355415537";

    const tarjetas = document.querySelectorAll(".tarjeta");

    tarjetas.forEach(function (tarjeta) {

        const boton = tarjeta.querySelector(".boton-whatsapp");
        const nombreProducto = tarjeta.querySelector("h3");

        if (boton && nombreProducto) {

            const mensaje = encodeURIComponent(
                `Hola, estoy interesado en comprar el producto ${nombreProducto.textContent}.`
            );

            boton.href = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
        }

    });

});
