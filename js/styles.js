var Carlot = (function(oldCarlot) {
    var activeCard = {};

    oldCarlot.styleSelectedCard = function(target) {
        Carlot.revertCards(); //resets state
        activeCard = target;
        activeCard.setAttribute("style", "background-color: #eaf2ff");
        activeCard.classList.add("selected");
    };
    oldCarlot.revertCards = function() {
        let cards = document.querySelectorAll(".car-card");
        cards.forEach(function(each) {
            each.removeAttribute("style");
            each.classList.remove("selected");
        });
    };
    oldCarlot.resetState = function() {
        activeCard = {};
    };
    return oldCarlot;
})(Carlot || {})