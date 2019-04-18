//If-else statement
count = 0;
if (/*condition*/ count == 1) {
  console.log("count is 1");
} else if (count > 1) {
  console.log("count is greate then 1");
} else {
  console.log("count is  not 1");
}

//switch
let hero = "superman";
switch (hero) {
  case "superman":
    console.log("super strength");
    break;
  case "batman":
    console.log("fighting skills");
    break;
  default:
    console.log("member of JLA");
    break;
}

//ternary operator
let a = 1,
  b = "1";
let result = a == b ? "equal" : "inequal";
console.log(result);

//strict equality checks the value and  the type
console.log(1 === "1");
