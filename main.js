//I used a promise... I didn't write it all myself, it's 50% copy-pasted.
//Ok, 80% copy-pasted. 

function preloadJSON(url) {
    return new Promise(function(resolve, reject) {
      var JSONrequest = new XMLHttpRequest();
      JSONrequest.open('GET', url);
      JSONrequest.onload = function() {
        if (JSONrequest.status === 200) {
          resolve(JSONrequest);
        } else {
          reject(Error(`Image didn't load successfully; error code: ${JSONrequest.statusText}`));
        }
      };
      JSONrequest.onerror = function() {
          reject(Error('There was a network error.'));
      };
      JSONrequest.send();
    });
  }

preloadJSON("cars.json").then(function(response) {
	let carData = JSON.parse(response.responseText);
	carData = carData.cars;
	Carlot.printDOM(carData)}, function(Error) {
	console.log(Error);
});