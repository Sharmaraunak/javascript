/**
 * null:datatype that points to nothing
 */
/* let a;
console.log(a);
console.log(typeof a); */
// this will return undefined not null

let pattern = /xyz/;
let value = "This is just a test";
let result = value.match(pattern);
console.log(result);
//console.log(typeof result);
// === : strict-equality
if (result === null) {
  console.log("no match was found");
}
