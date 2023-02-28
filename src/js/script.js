//initilise le compteur
let count = 0;


if(typeof(localStorage) !== "undefined") {
   // let displayCount = document.querySelector('#compteur');
    count = parseInt(localStorage.getItem("count")) || 0;
}
   

//je selectionne l'élement cible et affiche la valeur du compteur dessus
let clk = document.querySelector('.clk');
//document.querySelector('#compteur').innerHTML = count;


// fonction qui incrémente de 1 le compteur
function compteurIncrement() {
   count = count + 1;
   let displayCount = document.querySelector('#compteur');
   displayCount.innerHTML = count;
}

//fonction qui met a jour le compteur 
let start = function start() {
   setInterval(compteurIncrement(), 1000)
   setInterval(localStorage.setItem("count",count),);
}

clk.addEventListener('click', start);

//c'est pour faire afficher le compteur à l'actualisation de la page
let displayCount = document.querySelector('#compteur');
displayCount.innerText = localStorage.getItem("count");
