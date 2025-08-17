<?php include 'header.php'; ?>

<section id="inicio" class="hero">
    <h1>Hago páginas web como si fueran cuentos.</h1>
    <p>No me interesa que tu web “se vea profesional”. Me interesa que, cuando alguien entre, sienta que lo están invitando a tu casa y no a un banco. Que se quede, que lea, que entienda quién sos. Después, claro, también que funcione rápido y no explote.</p>
    <a href="#portafolio" class="cta-button">Mirá lo que ya hice</a>
</section>

<section id="servicios" class="services">
    <h2>Lo que hago (y lo que no).</h2>
    <div class="services-grid">
        <div class="service-card">
            <i class="icon-code"></i>
            <h3>Front-end sin disfraces</h3>
            <p>La parte que se ve. No pongo fuegos artificiales innecesarios: tipografías limpias, botones que parecen botones y textos que cuentan cosas. Internet no necesita más humo.</p>
        </div>
        <div class="service-card">
            <i class="icon-server"></i>
            <h3>Back-end que no se rompe</h3>
            <p>Lo que no se ve, pero sostiene todo. Bases de datos que no lloran, paneles que cualquiera puede usar sin tutoriales eternos, y sistemas que no te dan dolores de cabeza un domingo.</p>
        </div>
        <div class="service-card">
            <i class="icon-design"></i>
            <h3>Diseño con sentido</h3>
            <p>No hago dibujitos lindos. Pienso con vos qué querés transmitir, y lo convierto en un sitio que diga algo. Que tenga voz. Que sea tuyo.</p>
        </div>
    </div>
</section>

<section id="portafolio" class="portfolio">
    <h2>Algunas historias que ya programé</h2>
    <div class="portfolio-grid">
        <a href="bonipuntos.php" class="project-card">
            <img src="/bonipuntos-min.png" alt="Bonipuntos" class="project-image">
            <div class="project-info">
                <h3 class="project-title">Sistema de fielización de clientes</h3>
                <p class="project-description">Una web que empezó siendo un “quiero algo simple” y terminó siendo un espacio donde la gente se queda a charlar.</p>
            </div>
        </a>
        <a href="valentaffa.php" class="project-card">
            <img src="/valen-min.png" alt="Valen Taffa Store" class="project-image">
            <div class="project-info">
                <h3 class="project-title">Tienda online</h3>
                <p class="project-description">Una tienda online que no parece un supermercado chino de internet. Cada producto tiene historia, y se nota.</p>
            </div>
        </a>
        <a href="vtk.php" class="project-card">
            <img src="/vtk-prev.png" alt="VTK" class="project-image">
            <div class="project-info">
                <h3 class="project-title">Tienda Online</h3>
                <p class="project-description">Un sitio donde la estética no le gana al contenido, pero tampoco se queda atrás. Equilibrio, como en la vida.</p>
            </div>
        </a>
    </div>
</section>

<section id="testimonios" class="testimonials">
    <h2>Lo que dicen los que confiaron</h2>
    <div class="testimonial-card">
        <p>
            “Yo quería una web normalita, de esas que tienen un par de fotos y un botón de WhatsApp escondido abajo.  
            Pero terminé con algo raro: un lugar donde mis clientes me escriben como si ya me conocieran de toda la vida.  
            No sé qué pasó: si la magia está en el diseño, en los textos o en la cabeza de este tipo.  
            Lo único que sé es que ahora me saludan con confianza, como si la página hubiera armado una mesa de café en vez de un formulario de contacto.”
        </p>
        <p class="client-name">— Cliente que no esperaba tanto</p>
    </div>
</section>


<section id="acerca-de" class="about">
    <h2>Quién soy (y por qué hago esto)</h2>
    <p>No soy una agencia, ni un equipo multidisciplinario, ni tengo un slide de misión y visión. Soy uno solo, con la manía de contar historias en formato digital. Me gustan los sitios honestos, con personalidad. Trabajo escuchando primero, programando después. Y nunca al revés.</p>
</section>

<section id="contacto" class="contact-cta">
    <h2>Escribime, pero de verdad</h2>
    <p>Si me mandás un mensaje, no te va a contestar un bot, ni una secretaria, ni un “estimado cliente”. Voy a ser yo, con mate en mano, charlando de tu proyecto.</p>
    <a href="https://api.whatsapp.com/send/?phone=542317402288&text&type=phone_number&app_absent=0" class="cta-button">Quiero charlar con vos</a>
</section>

<div id="bonipuntos-popup" class="popup-overlay hidden">
    <div class="popup-content">
        <span class="popup-close-btn">&times;</span>
        <img src="/bonipuntos-min.png" alt="Bonipuntos promoción" class="popup-image">
        <div class="popup-text">
            <h2>Bonipuntos, tu sistema de fidelización</h2>
            <p>Un proyecto hecho a medida para que premies a tus clientes y los hagas volver una y otra vez. Una web que no parece una web, sino un espacio para charlar.</p>
            <a href="bonipuntos.php" class="popup-cta-btn">Ver el proyecto</a>
        </div>
    </div>
</div>


<?php include 'footer.php'; ?>
