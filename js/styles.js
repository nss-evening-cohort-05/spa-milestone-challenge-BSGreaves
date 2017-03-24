var Carlot = (function(oldCarlot) {
    var activeCard;

    oldCarlot.styleSelectedCard = function(target) {
        activeCard = target;
        activeCard.children[0].setAttribute("style", "background-color: #eaf2ff");
        activeCard.setAttribute("style", "background-color: #eaf2ff");
        activeCard.classList.toggle("selected");
    };
    oldCarlot.revertCard = function() {
        activeCard.children[0].removeAttribute("style");
        activeCard.removeAttribute("style");
        activeCard.classList.toggle("selected");
    };

    return oldCarlot;
})(Carlot || {})