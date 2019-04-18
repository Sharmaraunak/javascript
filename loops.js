//for loop
/*
for:keyword
i:loop variable
i<10:terminating condition
i++:incrementation
{}:loop block
 */
for (i = 0; i < 10; i++) {
  console.log(i);
}

//looping with arrays
let a = [2, 3, 4, 5, 6];
for (i = 0; i < a.length; i++) {
  console.log("array : ", a[i]);
}
//while loop
/*
while:keyword
x:iteration variable
we control the loops running in while while for loop has a structure
 */
let x = 1;
while (x < 10) {
  console.log("While:", x++);
  if (x == 7) {
    console.log("breaking");
    break;
  }
}
