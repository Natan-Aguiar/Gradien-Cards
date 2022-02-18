const card_effect = document.querySelectorAll(".card_effect");
const main = document.querySelector(".main");

card_effect[0].onclick = () => 
    main.style.background = getComputedStyle(card_effect[0]).background;

card_effect[1].onclick = () => 
    main.style.background = getComputedStyle(card_effect[1]).background;

card_effect[2].onclick = () => 
    main.style.background = getComputedStyle(card_effect[2]).background;