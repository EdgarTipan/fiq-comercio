// Funcionalidad del acordeón
const headers = document.querySelectorAll('.accordion-header');
headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const arrow = header.querySelector('.arrow');
        const isActive = content.classList.contains('active');

        // Cerrar todos los acordeones y resetear flechas
        document.querySelectorAll('.accordion-content').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.arrow').forEach(arrow => {
            arrow.classList.remove('active');
        });

        // Abrir el acordeón clicado si no estaba activo y rotar la flecha
        if (!isActive) {
            content.classList.add('active');
            arrow.classList.add('active');
        }
    });
});

// Funcionalidad de las flechas y puntos del carrusel
const carousels = document.querySelectorAll('.carousel');
document.querySelectorAll('.carousel-nav, .carousel-dots .dot').forEach(element => {
    element.addEventListener('click', () => {
        const carouselIndex = element.dataset.carousel;
        const carousel = carousels[carouselIndex];
        const items = carousel.querySelectorAll('.carousel-item');
        const dots = document.querySelectorAll(`.carousel-dots[data-carousel="${carouselIndex}"] .dot`);
        let currentIndex = parseInt(carousel.dataset.current);

        // Determinar nuevo índice
        if (element.classList.contains('carousel-nav')) {
            if (element.classList.contains('left')) {
                currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
            } else {
                currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
            }
        } else if (element.classList.contains('dot')) {
            currentIndex = Array.from(dots).indexOf(element);
        }
        carousel.dataset.current = currentIndex;

        // Actualizar visibilidad, desenfoque y puntos
        items.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
        });
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });

        // Desplazar el carrusel
        const itemWidth = 1215; // Ancho del item (400px) + margen (15px)
        carousel.scrollTo({ left: currentIndex * itemWidth, behavior: 'smooth' });
    });
});

// Desplazamiento suave para el enlace de Contacto
document.querySelector('a[href="#footer"]').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#footer').scrollIntoView({ behavior: 'smooth' });
});
