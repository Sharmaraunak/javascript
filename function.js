//function declaration
/*
function:keyword
sayHello:name of function
():invokation of a function, args can be passed inside the parantheses
{}:represents the scope or block of function
 */
function sayHello() {
  console.log("=======================");
  console.log("        hello");
  console.log("=======================");
}

//function callling
sayHello();
//assigning the function to variable
let a = sayHello;
a();

//passing args
function sayHelloTo(name) {
  console.log("=======================");
  console.log("      hello " + name);
  console.log("=======================");
}
let b = sayHelloTo;
b("Raunak");
b("Sharma");

// returning values from functiond
function calculateTax(amount) {
  let result = amount * 0.08;
  return result; //to return value back where it is called
}

let tax = calculateTax(100);
console.log(tax);
