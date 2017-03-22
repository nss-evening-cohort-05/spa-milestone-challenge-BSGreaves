var Carlot = (function(oldCarlot){

	oldCarlot.addEventListeners = function(cardArray){
		console.log(cardArray);
		cardArray.forEach(card => card.addEventListener("click", function(e){
			console.log("e", e);
			let targetElement = e.target;
			console.log(targetElement);
			while (targetElement.classList.contains("car-card") === false) {
				console.log("worked");
				targetElement = targetElement.parentNode;
			}
			Carlot.cardSelected(targetElement, "#eaf2ff");
		}));
	};
	return oldCarlot;
})(Carlot || {})