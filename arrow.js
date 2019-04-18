/**
 * =>:fat arrow operator
 */
let hi = () => {
  console.log("hi");
};
hi();

let Bye = name => {
  console.log(`Bye ${name}`);
};
Bye("Raunak");

//with return
let add = (a, b) => {
  return a + b;
};
console.log(add(4, 5));

let names = ["david", "arya", "sansa", "Jon"];
names.map(name => {
  console.log(`hi ${name}`);
});
