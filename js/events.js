var Carlot = (function(oldCarlot) {

    var descriptionEditor = document.querySelector("#inventoryEdit");
    var targetDescription;

    oldCarlot.addEventListeners = function(cardArray) {
        cardArray.forEach(card => card.addEventListener("click", function(e) {
            let targetCard = e.target;
            while (targetCard.classList.contains("car-card") === false) { //gets parent element car-card
                targetCard = targetCard.parentNode;
            }
            Carlot.styleSelectedCard(targetCard); //styles the card
            descriptionEditor.focus();
            targetDescription = targetCard.children[1].children[2];
            descriptionEditor.value = targetDescription.innerText;
            descriptionEditor.addEventListener("keyup", Carlot.pairDescription); //pairs description
        }));
    };
    oldCarlot.pairDescription = function(e) {
        targetDescription.innerText = descriptionEditor.value;
        if (e.keyCode === 13) {
            targetDescription.innerText = descriptionEditor.value;
            descriptionEditor.value = "";
            descriptionEditor.removeEventListener("keyup", Carlot.pairDescription);
            Carlot.revertCards();
        }
    };

    return oldCarlot;
})(Carlot || {})