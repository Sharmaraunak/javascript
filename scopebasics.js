let a = "first";
function scopeTest() {
  console.log(a);
  let b = "second"; //won't be accessed by outside function
}
scopeTest();
//console.log(b); : will throw error
//globle variable can be accessed from everywhere
//lifespan of a innermost scope is limited to the same block only
