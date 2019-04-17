//can hold many values in one variable
//they have 0 based index(position of elements)
//that means to access the third element of array you go like a[2]
let a = [4, 2, 5, 6, 7, 9];
let b = ["davis", "ales", "geya", 6];
//they have 0 based index(position of elements)
//that means to access the third element of array you go like a[2]
console.log(a);
console.log(a[2]);
//setting the values
a[0] = 2;
console.log(a);
//type of array
console.log(typeof a);
//array can include elements of different data types
let c = ["asert", 2, true];
console.log(c);
//accessing out of index is undefined
console.log(c[4]);

//length of array(not 0 based but actual)
console.log(c.length);

// assigning to an array
c[10] = 23; //since length of c is only 3 ,what will happen?
console.log(c);
console.log(c.length);
/*
3
[ 'asert', 2, true, <7 empty items>, 23 ]
11
It prints 7 empty items ,making sparse array

 */

//push :pushes to last of array
c.push(3);
console.log(c);
console.log(c.length);

//pop: removes last element
c.pop();
console.log(c);
console.log(c.length);
