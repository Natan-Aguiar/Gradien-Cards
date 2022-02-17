const card_effect = document.querySelectorAll(".card_effect");
card_effect[0].onclick = corFundo0;
card_effect[1].onclick = corFundo1;
card_effect[2].onclick = corFundo2;

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