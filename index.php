
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/css/style.css">
    <script defer src="src/js/script.js"></script>
    <title>Paimon clicker</title>
</head>
    <?php session_start(); include("header.php");?> 
    <main>
        <section>
            <div class="container-clicker">
                <h2 id="compteur"></h2>
                <img src="src/images/paimon.webp" class="img-click" id="clicker" alt="">
                <p id="message"></p>
                <div class="container-shop">
                    <div class="prices-bonus-click-card">
                        <p>Bonus click +<span id="level-bonus-click"></span></p>
                        <p>prix : <span id="display-price-bonus-click"></span></p>
                        <a id="btn-buy-bonus-click" class="myButton">Buy</a>
                    </div>
                    <div class="prices-auto-click-card">
                        <p>Bonus click +<span id="level-auto-click"></span>1</p>
                        <p>prix : <span id="display-price-auto-click"></span></p>
                        <a id="btn-buy-auto-click" class="myButton">Buy</a>
                    </div>
                    <div class="reset-card">
                        <p>Réinitialisé le clicker</p>
                        <a id="btn-reset" class="myButton">Reset</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
<body>
    
</body>
</html>