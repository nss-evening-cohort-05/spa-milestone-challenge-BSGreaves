var Carlot = (function(oldCarlot){
	var carData = [];

	oldCarlot.makeCard = function(object) {
		let currCard = "";
		currCard += `<div class="car-card col-md-4 col-sm-6"><img class="img-thumbnail" src=${object.img} alt="${object.make} ${object.model}">`;
		currCard += `<div class="caption text-center"><h4>${object.year} ${object.make} ${object.model}</h4><h5 class="price">Starting at $${object.price}</h5><p>${object.description}</p></div>`
		currCard += `</div>`
		return currCard;
	}

	oldCarlot.printDOM = function(array){
		let outputDiv = document.querySelector("#outputDiv");
		let ops = ""; //output string
		ops += `<div class="row">`;
		for (let i = 0; i < array.length; i++) {
			if (i !== 0 && i % 3 === 0 && i !== array.length) { //ugly, but it prevents it screwing up the first and last row tags
				ops += `<div class="row"></div>`;
			}
			ops += Carlot.makeCard(array[i]);
		}
		ops += `</div>`;
		outputDiv.innerHTML = ops;
		let carCards = document.querySelectorAll(".car-card")
		Carlot.addEventListeners(carCards);
	}
	oldCarlot.loadCars = function(){
		let data = JSON.parse(this.responseText);
		carData = data.cars;
		Carlot.printDOM(carData);
	}
	oldCarlot.loadJSON = function(filepath){
		let fetchCars = new XMLHttpRequest();
		fetchCars.addEventListener("load", Carlot.loadCars);
		fetchCars.addEventListener("error", function(){console.log("JSON Error")});
		fetchCars.open("GET", filepath);
		fetchCars.send();
	}
	oldCarlot.getCarData = function(){
		return carData;
	}
	oldCarlot.setCarData = function(array){
		carData = array;
	}

	return oldCarlot;
})(Carlot || {});