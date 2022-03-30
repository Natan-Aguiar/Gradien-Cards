const main = document.querySelector("main");
const myCards = document.querySelectorAll(".card_effect");

myCards.forEach( myCards => {       // altera background do Main por cada cada card selecionado.
    myCards.onclick = () =>         
    main.style.background = getComputedStyle(myCards).background;      
});