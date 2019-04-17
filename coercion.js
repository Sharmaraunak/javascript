//coercion:forcing a type into a completeley different type.

let a = 7;
let b = "6";
let c = a + b; //treating both as string
console.log(c);

let x = 7;
let y = "6";
//coercing y
y = parseInt(b, 10); //radix is like base
let z = x + y;
console.log(z);
//trying to do evil or as said coerce a total string
let d = parseInt("bob", 10);
console.log(d);
//result NaN means not a number
console.log(isNaN(d)); //to check NaN
