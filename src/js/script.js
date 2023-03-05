//les variable d'initialisation
let count = 0;
let bonusClickPrice = 100;
let autoClickPrice = 200;
let lvlBonusClickPlus = 0;
let lvlAutoClickPlus = 0;
let bonusActive = 0;

console.log(bonusActive)
//selecteurs 
let counter = document.querySelector("#compteur")
let clicker = document.querySelector("#clicker")
//let messages = document.querySelector("#message")
let displayBonusClickPlus = document.querySelector("#level-bonus-click")
let displayAutoClickPlus = document.querySelector("#level-auto-click")
let displayBonusClick = document.querySelector("#display-price-bonus-click")
let displayAutoClick = document.querySelector("#display-price-auto-click")
let btnBuyBonusClick = document.querySelector("#btn-buy-bonus-click")
let btnBuyAutoClick = document.querySelector("#btn-buy-auto-click")
let btnReset = document.querySelector("#reset")


//afficheur de base
counter.innerText = count;
displayBonusClick.innerText = bonusClickPrice
displayAutoClick.innerText = autoClickPrice

console.log(bonusActive)
//les fonctions
// function counterIncrement() {
//     count++;         
//     //count+= lvlBonusClickPlus - 1;
//     counter.innerHTML = count;
// }

function buyBonusClick() {
    if (count > bonusClickPrice){ 
        bonusActive = 1;
        count = count - bonusClickPrice;
        counter.innerHTML = count;
        bonusClickPrice = bonusClickPrice + 200;
        lvlBonusClickPlus += 1
        displayBonusClick.innerHTML = bonusClickPrice
        displayBonusClickPlus.innerHTML = lvlBonusClickPlus 
        
    } else {
        const message = document.getElementsByTagName('p')[0];
        //message.insertBefore(message, message.nextSibling);
        message.textContent = "Tu n'as pas assez de points";
        //message.innerHTML = "Tu n'a pas assez de point !";
        message.style.textAlign = 'center';
        message.style.height = '16px';

        
        setTimeout(function() {
            //message.remove();
            message.textContent = "";
          }, 2000);
        
        
    }
}

function counterIncrement() {
    count++;         
    //count+= lvlBonusClickPlus - 1;
    counter.innerHTML = count;
    if (bonusActive = 1) {
        count+= lvlBonusClickPlus;
    }
}

//le clicker 
clicker.addEventListener("click",function(){
    counterIncrement();
})

//les bouttons achat
btnBuyBonusClick.addEventListener("click",function(){
    buyBonusClick();
})

