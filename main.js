const myMain = document.querySelector("main");

const myCards = document.querySelectorAll(".card_effect")
    .forEach(myCard => 
        myCard.onclick = () => myMain.style.background = getComputedStyle(myCard).background
    );