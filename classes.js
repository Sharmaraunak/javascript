//declaration
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  print() {
    console.log(`${this.make} ${this.model} ${this.year}`);
  }
}

let myCar = new Car("audi", "567ki", 2011);
myCar.print();

//expression

class SportsCar extends Car {
  revEngine() {
    console.log("vroom goes the", this.model);
  }
}
let mySportsCar = new SportsCar("mg", "897hu", 2003);
mySportsCar.print();
//myCar.revEngine();
mySportsCar.revEngine();
