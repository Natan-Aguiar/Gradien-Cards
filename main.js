const card_effect = document.querySelectorAll(".card_effect");
const main = document.querySelector(".main");

card_effect.forEach(function (item) {
    item.onclick = () => 
    main.style.background = getComputedStyle(item).background;      
});