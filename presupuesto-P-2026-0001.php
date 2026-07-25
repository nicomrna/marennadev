<?php
// presupuesto-P-2026-0001.php
// Presupuesto formal — reemplazá los placeholders [COMPLETAR] con tus datos reales.

$numero_presupuesto = "P-2026-0001";
$fecha_emision      = date("d/m/Y");
$whatsapp_numero    = "542317402288"; // [COMPLETAR] tu número con código de país, sin + ni espacios
$mail_contacto      = "marennanicolas@yahoo.com"; // [COMPLETAR]

$items = [
  ["tag" => "SUSCRIPCIÓN MENSUAL", "titulo" => "Plan Tienda Nube Esencial", "detalle" => "Plataforma de e-commerce, pasarela de pagos y hosting incluido.", "precio" => "\$26.999 / mes"],
  ["tag" => "ANUAL", "titulo" => "Dominio web", "detalle" => "Ej: okeylibreria.com — \$16.900 x 12 meses.", "precio" => "\$16.900 / mes"],
  ["tag" => "PAGO ÚNICO", "titulo" => "Implementación tienda online", "detalle" => "Configuración completa, diseño, carga inicial y puesta en marcha.", "precio" => "\$490.000"],
];

$total_abonado = "250.000";
$saldo_restante = "283.900";
?>
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Presupuesto <?php echo $numero_presupuesto; ?></title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Montserrat:wght@700;900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
    :root {
      --papel: #080808;
      --tinta: #f0f0f0;
      --gris-soft: #888;
      --blanco: #ffffff;
      --serif: 'Merriweather', serif;
      --sans: 'Montserrat', sans-serif;
      --mono: 'JetBrains Mono', monospace;
    }

    * { box-sizing: border-box; }
    body {
      margin: 0; background: var(--papel); color: var(--tinta);
      font-family: var(--serif); line-height: 1.8; overflow-x: hidden;
    }

    .container { max-width: 800px; margin: 0 auto; padding: 60px 24px; }

    .reveal {
      opacity: 0;
      transform: translateY(15px);
      transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
    }
    .reveal.active { opacity: 1; transform: translateY(0); }

    header {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 80px; border-bottom: 1px solid #1a1a1a; padding-bottom: 30px;
    }
    .brand { display: flex; align-items: center; gap: 24px; }
    .brand img { width: 85px; height: 85px; border-radius: 12px; filter: grayscale(1); }
    .brand h1 {
      font-family: var(--sans);
      font-size: 1.8rem;
      margin: 0;
      letter-spacing: -1.5px;
      color: var(--blanco);
      line-height: 1;
    }
    .brand-doc {
      font-family: var(--mono);
      font-size: 0.85rem;
      color: var(--gris-soft);
      text-align: right;
      letter-spacing: 1px;
    }
    .brand-doc strong { color: var(--blanco); display: block; font-size: 1rem; margin-bottom: 4px; }

    .hero h2 {
      font-family: var(--sans); font-size: clamp(2.3rem, 8vw, 4.2rem);
      line-height: 0.95; margin-bottom: 40px; letter-spacing: -3px; color: var(--blanco);
    }
    .hero p { font-size: 1.35rem; color: var(--gris-soft); margin-bottom: 1.5rem; }

    .label {
      font-family: var(--mono);
      font-size: 0.85rem;
      color: var(--blanco);
      margin: 100px 0 40px 0;
      display: flex;
      align-items: center;
      gap: 15px;
      letter-spacing: 2px;
      font-weight: bold;
    }
    .label::after { content: ''; flex: 1; height: 1px; background: rgba(255,255,255,0.3); }

    .laburo-item { margin-bottom: 50px; display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; flex-wrap: wrap; }
    .laburo-item .info { flex: 1; min-width: 240px; }
    .laburo-item h4 { font-family: var(--sans); font-size: 1.6rem; margin: 0 0 8px 0; color: var(--blanco); letter-spacing: -1px; }
    .laburo-item p { color: var(--gris-soft); font-size: 1rem; margin: 0; }
    .laburo-item .precio { font-family: var(--sans); font-size: 1.3rem; font-weight: 900; color: var(--blanco); white-space: nowrap; }
    .tag { font-family: var(--mono); font-size: 0.7rem; color: var(--blanco); background: #1a1a1a; padding: 4px 8px; border-radius: 4px; margin-bottom: 10px; display: inline-block; }

    .totales {
      margin-top: 20px;
      border-top: 1px solid #1a1a1a;
      padding-top: 30px;
    }
    .fila-total {
      display: flex; justify-content: space-between; align-items: center;
      font-family: var(--sans); padding: 10px 0;
    }
    .fila-total span:first-child { color: var(--gris-soft); font-size: 1rem; letter-spacing: 1px; }
    .fila-total span:last-child { color: var(--blanco); font-size: 1.4rem; font-weight: 900; }
    .fila-total.saldo span:last-child { color: #f0c419; }

    .datos-lista { list-style: none; margin: 0; padding: 0; counter-reset: dato; }
    .datos-lista li {
      counter-increment: dato;
      padding: 18px 0 18px 45px;
      position: relative;
      border-bottom: 1px solid #151515;
      color: var(--gris-soft);
      font-size: 1.05rem;
    }
    .datos-lista li:last-child { border-bottom: none; }
    .datos-lista li::before {
      content: counter(dato);
      position: absolute; left: 0; top: 16px;
      font-family: var(--mono); font-weight: bold; color: var(--blanco);
      width: 28px; height: 28px; border: 1px solid #333; border-radius: 50%;
      display: flex; align-items: center; justify-content: center; font-size: 0.85rem;
    }
    .datos-lista strong { color: var(--blanco); }
    .datos-lista a { color: var(--blanco); }

    .cta-box {
      margin-top: 120px;
      padding: 60px;
      background: linear-gradient(145deg, #0f0f0f 0%, #080808 100%);
      border: 1px solid #222;
      border-radius: 4px;
      position: relative;
      overflow: hidden;
    }
    .cta-box::before {
      content: '';
      position: absolute;
      top: 0; right: 0;
      width: 100px; height: 100px;
      background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%);
    }
    .cta-box h3 {
      font-family: var(--sans);
      font-size: 2.2rem;
      line-height: 1.1;
      margin: 0;
      color: var(--blanco);
      letter-spacing: -2px;
    }
    .cta-box p {
      margin: 30px 0;
      color: var(--gris-soft);
      font-size: 1.15rem;
      line-height: 1.6;
      max-width: 520px;
    }

    .btn-wa {
      display: inline-block;
      background: var(--blanco);
      color: #000;
      padding: 22px 45px;
      font-family: var(--sans);
      font-weight: 900;
      text-decoration: none;
      border-radius: 2px;
      letter-spacing: 1px;
      transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .btn-wa:hover {
      transform: scale(1.05);
      box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    }

    .proyecto-links { display: flex; gap: 15px; margin-top: 20px; flex-wrap: wrap; }
    .btn-proyect {
      font-family: var(--mono);
      font-size: 0.75rem;
      text-decoration: none;
      padding: 10px 18px;
      border: 1px solid var(--blanco);
      color: var(--blanco);
      border-radius: 4px;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .btn-proyect:hover { background: var(--blanco); color: #000; }

    footer {
      margin-top: 100px;
      padding: 60px 0;
      border-top: 1px solid #1a1a1a;
      font-family: var(--mono);
      font-size: 0.85rem;
      color: var(--gris-soft);
      text-align: center;
      letter-spacing: 1px;
    }

    @media (max-width: 600px) {
      .brand img { width: 60px; height: 60px; }
      .brand h1 { font-size: 1.4rem; }
      .hero h2 { letter-spacing: -1px; }
      .cta-box { padding: 30px; }
      header { flex-wrap: wrap; gap: 20px; }
      .brand-doc { text-align: left; }
    }
</style>
</head>
<body>
<div class="container">

  <header class="reveal active">
    <div class="brand">
      <img src="logo.png" alt="Logo">
    </div>
    <div class="brand-doc">
      <strong>PRESUPUESTO <?php echo htmlspecialchars($numero_presupuesto); ?></strong>
      Emitido: <?php echo htmlspecialchars($fecha_emision); ?>
    </div>
  </header>

  <section class="hero reveal active">
    <h2>Presupuesto<br>aprobado.</h2>
    <p>Gracias por confirmar el proyecto. A continuación encontrás el detalle desglosado, el estado de pago y los datos que necesitamos para avanzar con la implementación.</p>
  </section>

  <div class="label">DETALLE DEL PRESUPUESTO</div>

  <?php foreach ($items as $item): ?>
  <div class="laburo-item reveal active">
    <div class="info">
      <span class="tag"><?php echo htmlspecialchars($item['tag']); ?></span>
      <h4><?php echo htmlspecialchars($item['titulo']); ?></h4>
      <p><?php echo htmlspecialchars($item['detalle']); ?></p>
    </div>
    <div class="precio"><?php echo htmlspecialchars($item['precio']); ?></div>
  </div>
  <?php endforeach; ?>

  <div class="totales">
    <div class="fila-total">
      <span>Total abonado</span>
      <span>$<?php echo htmlspecialchars($total_abonado); ?></span>
    </div>
    <div class="fila-total saldo">
      <span>Saldo restante</span>
      <span>$<?php echo htmlspecialchars($saldo_restante); ?></span>
    </div>
  </div>

  <div class="label">DATOS QUE NECESITAMOS DE VOS</div>

  <ol class="datos-lista">
    <li><strong>Dominio deseado</strong> — ej: okeylibreria.com (sujeto a disponibilidad).</li>
    <li><strong>Dirección física del local.</strong></li>
    <li><strong>Horarios de apertura y cierre.</strong></li>
    <li>Registrarte en <a href="https://www.correoargentino.com.ar/MiCorreo/public" target="_blank" rel="noopener">Mi Correo — Correo Argentino</a>.</li>
    <li>Enviarnos tu <strong>logo</strong> en el mejor formato digital posible (preferentemente .png o .svg, fondo transparente).</li>
    <li><strong>CUIL / CUIT.</strong></li>
  </ol>

  <div class="cta-box reveal active">
    <h3>¿Ya tenés todo listo?</h3>
    <p>Envianos los datos solicitados para poner en marcha tu tienda online lo antes posible.</p>
    <a class="btn-wa" href="https://wa.me/<?php echo $whatsapp_numero; ?>?text=<?php echo urlencode('Hola! Te envío los datos para el presupuesto ' . $numero_presupuesto); ?>" target="_blank" rel="noopener">ENVIAR DATOS POR WHATSAPP</a>
    <div class="proyecto-links">
      <a class="btn-proyect" href="mailto:<?php echo htmlspecialchars($mail_contacto); ?>?subject=Datos%20presupuesto%20<?php echo htmlspecialchars($numero_presupuesto); ?>">ENVIAR POR MAIL →</a>
    </div>
  </div>

  <footer>
    PRESUPUESTO <?php echo htmlspecialchars($numero_presupuesto); ?> · <?php echo date('Y'); ?>
  </footer>

</div>
</body>
</html>
