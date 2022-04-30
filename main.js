const myCards = document.querySelectorAll(".card_effect")

const myMain = document.querySelector("main")

const myFunc = myCards.forEach(item => {
    item.onclick = () => myMain.style.background = getComputedStyle(item).background;
});