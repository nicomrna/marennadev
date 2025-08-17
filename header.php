<?php
// Detectar la ruta base automáticamente
$base = rtrim(dirname($_SERVER['SCRIPT_NAME']), '/\\');
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marenna Dev - Desarrollador Web</title>
    <link rel="icon" type="image/png" href="favicon/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="favicon/favicon.svg" />
<link rel="shortcut icon" href="favicon/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
<meta name="apple-mobile-web-app-title" content="Marenna Dev" />
<link rel="manifest" href="favicon/site.webmanifest" />
<?php
$base_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]";
?>

<link rel="stylesheet" href="<?= $base_url ?>/styles.css">
</head>
<body>

    <header class="header">
        <a href="<?php echo $base; ?>/index.php" class="logo">
            <img src="<?php echo $base; ?>/logo.png" alt="Marenna Dev Logo">
        </a>
        <nav class="nav">
            <ul class="nav-list">
                <li><a href="<?php echo $base; ?>/index.php">Inicio</a></li>
                <li><a href="<?php echo $base; ?>/#portafolio">Proyectos</a></li>
                <li><a href="<?php echo $base; ?>/#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <main class="main-content">

