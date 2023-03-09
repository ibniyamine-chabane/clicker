//les variable d'initialisation
let count = 0;
let bonusClickPrice = 100;
let autoClickPrice = 200;
let lvlBonusClickPlus = 0;
let lvlAutoClickPlus = 0;
let bonusActive = 0;


//selecteurs 
let counter = document.querySelector("#compteur")
let clicker = document.querySelector("#clicker")
let displayBonusClickPlus = document.querySelector("#level-bonus-click")
let displayAutoClickPlus = document.querySelector("#level-auto-click")
let displayBonusClick = document.querySelector("#display-price-bonus-click")
let displayAutoClick = document.querySelector("#display-price-auto-click")
let btnBuyBonusClick = document.querySelector("#btn-buy-bonus-click")
let btnBuyAutoClick = document.querySelector("#btn-buy-auto-click")
let btnReset = document.querySelector("#btn-reset")

if(typeof(localStorage) !== "undefined") {
    count = parseInt(localStorage.getItem("count")) || 0;
    bonusClickPrice = parseInt(localStorage.getItem("bonusClickPrice")) || 0;
    autoClickPrice = parseInt(localStorage.getItem("autoClickPrice")) || 0;
    lvlBonusClickPlus = parseInt(localStorage.getItem("lvlClick")) || 0;
    lvlAutoClickPlus = parseInt(localStorage.getItem("lvlAuto")) || 0;
 }


//afficheur de base
counter.innerText = count;
displayBonusClick.innerText = bonusClickPrice
displayAutoClick.innerText = autoClickPrice




//////////////////////////les fonctions\\\\\\\\\\\\\\\\\\\\\\\\\\\

//achats
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
        message.textContent = "Tu n'as pas assez de points";
        message.style.textAlign = 'center';
        message.style.height = '35px';
        message.style.color = '#f1f3d8';
        message.style.textShadow = '3px 3px 3px #20201a';
       
        setTimeout(function() {
            message.textContent = "";
          }, 2000)              
    }
}


function buyAutoClick() {
    if (count > autoClickPrice){ 
        bonusActive = 1;
        count = count - autoClickPrice;
        //counter.innerHTML = count;
        autoClickPrice = autoClickPrice + 200;
        lvlAutoClickPlus += 1
        displayAutoClick.innerHTML = autoClickPrice
        displayAutoClickPlus.innerHTML = lvlAutoClickPlus 
        function autoClick() {
            count+= lvlAutoClickPlus;
            counter.innerHTML = count;
        }
        
        setInterval(autoClick, 1000);
    } else {
        const message = document.getElementsByTagName('p')[0];
        message.textContent = "Tu n'as pas assez de points";
        message.style.textAlign = 'center';
        message.style.height = '35px';
        message.style.color = '#f1f3d8';
        message.style.textShadow = '3px 3px 3px #20201a';

        
        setTimeout(function() {
            //message.remove();
            message.textContent = "";
          }, 2000);        
    }
}

///////////////enregistrement dans le localStorage\\\\\\\\\\\\\\\\

function registerLocalStorage() {
 
let registerCount = () => localStorage.setItem("count",count)
setInterval(registerCount,100)
//regist du prix
let registerClickPrice = () => localStorage.setItem("bonusClickPrice",bonusClickPrice)
setInterval(registerClickPrice,100)

let registerAutoClickPrice = () => localStorage.setItem("autoClickPrice",autoClickPrice )
setInterval(registerAutoClickPrice,100)
//regist du niveau des achat
let registerLvlClick = () => localStorage.setItem("lvlClick",lvlBonusClickPlus)
setInterval(registerLvlClick,100)

let registerLvlAuto = () => localStorage.setItem("lvlAuto", lvlAutoClickPlus)
setInterval(registerLvlAuto,100)

}

counter.innerHTML = localStorage.getItem("count")
displayBonusClickPlus.innerText = localStorage.getItem("lvlClick")
displayAutoClickPlus.innerText = localStorage.getItem("lvlAuto") 
displayBonusClick.innerText = localStorage.getItem("bonusClickPrice")
displayAutoClick.innerText = localStorage.getItem("autoClickPrice")


function resetGame() {
    count = 0;
    bonusClickPrice = 100;
    autoClickPrice = 200;
    lvlBonusClickPlus = 0;
    lvlAutoClickPlus = 0;
    bonusActive = 0;
    counter.innerText = count;
    displayBonusClick.innerText = bonusClickPrice
    displayAutoClick.innerText = autoClickPrice
    displayBonusClickPlus.innerText = lvlAutoClickPlus
    displayAutoClickPlus.innerText = lvlAutoClickPlus
}


//incrémentation au click
function counterIncrement() {
    count++;         
    counter.innerHTML = count;
    if (bonusActive = 1) {
        count+= lvlBonusClickPlus;
    }
}

//le clicker sur l'image
clicker.addEventListener("click",function(){
    counterIncrement();
    registerLocalStorage()
})

//les bouttons achat
btnBuyBonusClick.addEventListener("click",function(){
    buyBonusClick();
    registerLocalStorage()
})

btnBuyAutoClick.addEventListener("click",function(){
    buyAutoClick();
    registerLocalStorage()
})

btnReset.addEventListener("click",function (){
    resetGame()
})