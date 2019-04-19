//more on date inbuilt function

let today = new Date();

let Raunak = new Date("August 15,1999");

let sharma = new Date(1999, 08, 15);

console.log(today);
console.log(Raunak);

var elapsed = today - Raunak;
console.log(elapsed);

console.log(Raunak.getDate());
console.log(Raunak.getTime());
/**
 * getMonth()
 * getDay()
 * UTC()
 *
 */
