//javascript has classes but kind of not useful
//javascript has inheritence but again not so useful
//It offers something called prototype-chaining
/**
 * prototype-chaining:
 * link between a parent object and the new object inherited
 * from it,called prototype-chain and process is called
 * prototype-chaining.(relationship between object)OLOO
 * (objects linking to other objects)
 */
let originalCar = {
  make: "bmw", //key:value pair
  model: "745li",
  year: 2004
};
//to make an object
let newCar = Object.create(originalCar);

console.log(newCar.make);
newCar.make = "audi";
console.log(newCar.make);
console.log(newCar.whatever); //undefined bcoz none of the prototype
//has that property
console.log(Object.getPrototypeOf(newCar));

originalCar.doors = 4;
console.log(newCar.doors);

console.log(originalCar.hasOwnProperty("doors"));
console.log(newCar.hasOwnProperty("doors"));

console.log(originalCar);
