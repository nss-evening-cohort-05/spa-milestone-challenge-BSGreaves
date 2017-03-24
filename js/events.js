var Carlot = (function(oldCarlot) {

    var cardSelected = false; //flag to prevent multiple card selections
    var descriptionEditor = document.querySelector("#inventoryEdit");
    var targetDescription;

    oldCarlot.addEventListeners = function(cardArray) {
        cardArray.forEach(card => card.addEventListener("click", function(e) {
            if (cardSelected === false) {
                let targetCard = e.target;
                while (targetCard.classList.contains("car-card") === false) { //gets parent element car-card
                    targetCard = targetCard.parentNode;
                }
                cardSelected = true;
                Carlot.styleSelectedCard(targetCard); //styles the card
                descriptionEditor.focus();
                targetDescription = targetCard.children[1].children[2];
                descriptionEditor.value = targetDescription.innerText;
                descriptionEditor.addEventListener("keyup", Carlot.pairDescription); //pairs description
            }
        }));
    };
    oldCarlot.pairDescription = function(e) {
        targetDescription.innerText = descriptionEditor.value;
        if (e.keyCode === 13) {
            targetDescription.innerText = descriptionEditor.value;
            descriptionEditor.value = "";
            descriptionEditor.removeEventListener("keyup", Carlot.pairDescription);
            cardSelected = false; //frees the main event listener
            Carlot.revertCard(); //reverts styles to normal
        }
    };
    return oldCarlot;
})(Carlot || {})