//initilise le compteur
let count = 0;

//je selectionne l'élement cible et affiche la valeur du compteur dessus
let clk = document.querySelector('.clk');
document.querySelector('#compteur').innerHTML = count;


// fonction qui incrémente de 1 le compteur
function compteurIncrement() {
   count = count + 1;
   let displayCount = document.querySelector('#compteur');
   displayCount.innerHTML = count;
}

//fonction qui met a jour le compteur 
let start = function start() {
   setInterval(compteurIncrement(), 1000)
}

clk.addEventListener('click', start);



