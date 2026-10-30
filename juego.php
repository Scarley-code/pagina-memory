<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = $_POST["Nombre"];
    if ($nombre == "" || strlen($nombre) > 30) {
        header("Location: index.html");
        exit;
    }
    $_SESSION["nombre"] = $nombre;
} else {
    if (!isset($_SESSION["nombre"])) {
        header("Location: index.html");
        exit;
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="juego.css" />
    <link rel="icon" type="image/webp" href="imagenes/ArceusFavicon.webp" />
    <title>Juego</title>
</head>
<body>
    <div class="tiempo_de_juego">
        <p id="tiempo">Tiempo restante: </p>
        <p id="puntuaciones">Puntuación: 0</p>
    </div>
    <section class="cuadricula">
        <div id="carta1" class="cartas" data-imagen="./imagenes/Pikachu.png"></div>
        <div id="carta2" class="cartas" data-imagen="./imagenes/Pikachu.png"></div>
        <div id="carta3" class="cartas" data-imagen="./imagenes/Bulbasaur.png"></div>
        <div id="carta4" class="cartas" data-imagen="./imagenes/Bulbasaur.png"></div>
        <div id="carta5" class="cartas" data-imagen="./imagenes/Charmander.png"></div>
        <div id="carta6" class="cartas" data-imagen="./imagenes/Charmander.png"></div>
        <div id="carta7" class="cartas" data-imagen="./imagenes/Squirtle.png"></div>
        <div id="carta8" class="cartas" data-imagen="./imagenes/Squirtle.png"></div>
        <div id="carta9" class="cartas" data-imagen="./imagenes/Mew.png"></div>
        <div id="carta10" class="cartas" data-imagen="./imagenes/Mew.png"></div>
        <div id="carta11" class="cartas" data-imagen="./imagenes/Lugia.png"></div>
        <div id="carta12" class="cartas" data-imagen="./imagenes/Lugia.png"></div>
        <div id="carta13" class="cartas" data-imagen="./imagenes/Ho-oh.png"></div>
        <div id="carta14" class="cartas" data-imagen="./imagenes/Ho-oh.png"></div>
        <div id="carta15" class="cartas" data-imagen="./imagenes/Kyogre.png"></div>
        <div id="carta16" class="cartas" data-imagen="./imagenes/Kyogre.png"></div>
        <div id="carta17" class="cartas" data-imagen="./imagenes/Groudon.png"></div>
        <div id="carta18" class="cartas" data-imagen="./imagenes/Groudon.png"></div>
        <div id="carta19" class="cartas" data-imagen="./imagenes/Rayquaza.png"></div>
        <div id="carta20" class="cartas" data-imagen="./imagenes/Rayquaza.png"></div>
        <div id="carta21" class="cartas" data-imagen="./imagenes/Dialga.png"></div>
        <div id="carta22" class="cartas" data-imagen="./imagenes/Dialga.png"></div>
        <div id="carta23" class="cartas" data-imagen="./imagenes/Palkia.png"></div>
        <div id="carta24" class="cartas" data-imagen="./imagenes/Palkia.png"></div>
        <div id="carta25" class="cartas" data-imagen="./imagenes/Giratina.png"></div>
        <div id="carta26" class="cartas" data-imagen="./imagenes/Giratina.png"></div>
        <div id="carta27" class="cartas" data-imagen="./imagenes/Arceus.png"></div>
        <div id="carta28" class="cartas" data-imagen="./imagenes/Arceus.png"></div>
        <div id="carta29" class="cartas" data-imagen="./imagenes/Mewtwo.png"></div>
        <div id="carta30" class="cartas" data-imagen="./imagenes/Mewtwo.png"></div>
    </section>
    <script> localStorage.setItem("nombreJugador", <?= json_encode($_SESSION["nombre"]) ?>);</script>
    <script src="juego.js"></script>
</body>
</html>