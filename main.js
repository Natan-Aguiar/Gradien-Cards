document.querySelectorAll(".card_effect").forEach((card_effect)=> { //seleciona todas class e para cada um deles
    card_effect.onclick = () =>                                     // retorna um evento
    document.querySelector("main").style.background = getComputedStyle(card_effect).background;      
});