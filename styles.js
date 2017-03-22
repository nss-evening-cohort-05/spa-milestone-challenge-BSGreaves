var Carlot = (function(oldCarlot){

	oldCarlot.cardSelected = function(target, color){
		target.setAttribute("style", `background-color: ${color}`);
		target.children[0].setAttribute("style", `background-color: ${color}`);
	},
	oldCarlot.revertCard = function(){

	}

	return oldCarlot;
})(Carlot || {})