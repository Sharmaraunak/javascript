//an object to check a particuar pattern
let pattern = /xyz/;

/* console.log(pattern);// /xyz/
console.log(typeof pattern);//object */

let value = "This is xyz a test";
console.log(pattern.test(value));
console.log(value.replace(pattern, "just"));

//full info of match
console.log(value.match(pattern));
/* [ 'xyz',
  index: 8,
  input: 'This is xyz a test',
  groups: undefined ] */
