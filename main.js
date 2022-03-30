const myCards = document.querySelectorAll(".card_effect");

myCards.forEach( myCards => {   // altera background do Main por cada card selecionado.
    myCards.onclick = () =>         
    document.querySelector("main").style.background = getComputedStyle(myCards).background;      
});