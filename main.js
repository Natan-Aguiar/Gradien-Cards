document.querySelectorAll(".card_effect").forEach((card_effect)=> {
    card_effect.onclick = () => 
    document.querySelector("main").style.background = getComputedStyle(card_effect).background;      
});