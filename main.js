const card_effect = document.querySelectorAll(".card_effect");
    card_effect[0].addEventListener("click", corFundo0);
    card_effect[1].addEventListener("click", corFundo1);
    card_effect[2].addEventListener("click", corFundo2);

const main = document.querySelector(".main");

function corFundo0() {
    main.style.background = getComputedStyle(card_effect[0]).background;
}

function corFundo1() {
    main.style.background = getComputedStyle(card_effect[1]).background;
}

function corFundo2() {
    main.style.background = getComputedStyle(card_effect[2]).background;
}
