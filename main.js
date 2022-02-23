const card_effect = document.querySelectorAll(".card_effect");
const main = document.querySelector("body");

card_effect.forEach( (card_effect) => {
    card_effect.onclick = () => 
    main.style.background = getComputedStyle(card_effect).background;      
});