const myMain = document.querySelector("main");

const myCards = document.querySelectorAll(".card_effect")
    .forEach(item => {
        item.onclick = () => myMain.style.background = getComputedStyle(item).background
    });