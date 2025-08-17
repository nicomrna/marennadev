</main>

    <footer class="footer">
        <p>&copy; 2025 Marenna Dev. Todos los derechos reservados.</p>
    </footer>

</body>

<script>
    /*
        UNIFICACIÓN DE SCRIPTS
        ========================================================
        1. Animación al hacer scroll (para las secciones)
        2. Scroll suave para los enlaces del header y el botón CTA
    */

    // ----- SCRIPT 1: ANIMACIÓN AL HACER SCROLL -----
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // ----- SCRIPT 2: SCROLL SUAVE -----
    // Seleccionar todos los enlaces de la navegación y el botón de acción
    const smoothScrollLinks = document.querySelectorAll('.nav-list a[href^="#"], .cta-button[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    // ----- SCRIPT 3: POPUP PROMOCIONAL -----
const popupOverlay = document.getElementById('bonipuntos-popup');
const closeBtn = document.querySelector('.popup-close-btn');

// Función para abrir el popup
function openPopup() {
    popupOverlay.classList.add('visible');
}

// Función para cerrar el popup
function closePopup() {
    popupOverlay.classList.remove('visible');
}

// Abrir el popup automáticamente después de 3 segundos de carga de la página
setTimeout(openPopup, 3000);

// Cerrar el popup con el botón
closeBtn.addEventListener('click', closePopup);

// Cerrar el popup al hacer clic fuera del contenido
popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        closePopup();
    }
});
</script>
</html>