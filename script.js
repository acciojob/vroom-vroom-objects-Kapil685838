// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
}

function SportsCar(make, model, topSpeed) {
	new Car(make, model);
	this.topSpeed = topSpeed;
}

SportsCar.prototype.getTopSpeed = function () {
	return this.topSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
