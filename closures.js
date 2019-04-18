/**
 * mind-bending topic
 * closures:allows you to associate some data to a function
 * and then use the function attach to that data.
 * closures create its own lexical(location is used) environment.
 */
function sayHello(name) {
  //whatever value is passed is preserved in returned function.

  return function() {
    console.log("howdy " + name);
  };
}

let bob = sayHello("bob");
let raunak = sayHello("Raunak");
bob();
raunak();
