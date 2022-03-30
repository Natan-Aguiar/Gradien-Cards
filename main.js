(function() {
    const main = document.querySelector("main");
    const myCards = document.querySelectorAll(".card_effect");

    myCards.forEach( myCards => { // altera background do Main pelo de 
        myCards.onclick = () =>   // cada card selecionado.
        main.style.background = getComputedStyle(myCards).background;      
    });

}) (); // função que se auto-invoca