/* let car = {
  make: "bmw",
  model: "745li",
  year: 2004,
  getPrice: function() {
    //perform some calc
    return 5000;
  },
  printDescription: function() {
    console.log(this.make + " : " + this.model);
  }
}; */
//this represent context
function first() {
  return this;
}

console.log(first() === global);
/**
 * this: it is Node's global object
 * because that's where the first method was called.
 */

function second() {
  "use strict"; //gets on bound to nothing

  return this;
}

console.log(second() === global);
console.log(second() === undefined);

let myObject = { value: "myObject" };
//value is set on global object
global.value = "global object";

function third(name) {
  return this.value + name;
}

console.log(third());
//bind with call inbuilt fun
console.log(third.call(myObject, "bob"));

//with apply ,array is used
console.log(third.apply(myObject, ["bob"]));
