let car = {
  make: "bmw", //key:value pair
  model: "745li",
  year: 2004
};

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
//new keyword makes the constructor call
let myCar = new Car("bmw", "745li", 2010);
console.log(myCar);
console.log(typeof myCar);

function myFunction() {
  console.log("I am a simple function");
}
let myfunction = new myFunction();
