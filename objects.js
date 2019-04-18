//defining object
//has key:value pair
let car = {
  make: "bmw", //key:value pair
  model: "745li",
  year: 2004,
  getPrice: function() {
    //value can be of any datatype
    //perform some calc
    return 5000;
  },
  printDescription: function() {
    //A method is a function defined in an object
    console.log(this.make + " : " + this.model); //this is used to access local keys of objects.
  }
};

car.printDescription(); //variable name plus dot operator to access variable and methods of particular objects.
console.log(car.year);
console.log(car["year"]);
//feature of objects
//dynamic properties
var anotherCar = {};
anotherCar.whatever = "bob";
console.log(anotherCar.whatever);

var a = {
  myProperty: { b: "hi" }
};
console.log(a.myProperty.b); //namespace

var c = {
  myProperty: [
    {
      d: "hello"
    },
    {
      c: "Raunak"
    }
  ]
};
//console.log(c.myProperty.sort);
console.log(c);

//JSON -javascript object notation
//used to send info cross platform
