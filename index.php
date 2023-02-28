<?php

?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clicker</title>
</head>
<body>
    <?php session_start(); include("header.php");?>
    <main>
        <section>
            <h1>Bienvenu sur le clicker</h1>
            <h2 id="compteur"></h2>
            <button class="clk"><a href="#">click sur ce boutton</a></button>
        </section>
    </main>
    <footer>
        
        </footer>
        <script src="src/js/script.js"></script>
</body>
</html>