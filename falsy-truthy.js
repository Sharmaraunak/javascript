/**
 *falsy:A falsy value is a value that is considered false when encountered in a Boolean context.
 */
if (null) {
} else {
  console.log("null is falsy");
}

if (undefined) {
} else {
  console.log("undefined is falsy");
}

if (0) {
} else {
  console.log("0 is falsy");
}

if (NaN) {
} else {
  console.log("NaN is falsy");
}

if ("") {
} else {
  console.log("an empty string is falsy");
}

/**
 *Truthy:In JavaScript, a truthy value is a value that is considered  true when encountered in a Boolean context.
 */
if (true) {
  console.log("true is truthy");
}
if ({}) {
  console.log("{} is truthy");
}
if ([]) {
  console.log("[] is truthy");
}
if (42) {
  console.log("42 is truthy");
}
if ("0") {
  console.log("'0' is truthy");
}
if (new Date()) {
  console.log("new date is truthy");
}
if (-42) {
  console.log("-42 is truthy");
}
if (3.14) {
  console.log("3.14 is truthy");
}
if (-3.14) {
  console.log("-3.14 is truthy");
}
if (Infinity) {
  console.log("Infinity is truthy");
}
if (-Infinity) {
  console.log("-Infinity is truthy");
}
