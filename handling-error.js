/* let a = (7 * undefined) / "Raunak";
console.log(a); */
// will not throw exception or error for this code
//but it will give some exception for
//some code.
function beforeTryCatch() {
  let obj = undefined;
  console.log(obj.b);
  console.log("exception happened,you will not see this");
}
//beforeTryCatch();
function afterTryCatch() {
  try {
    let obj = undefined;
    console.log(obj.b);
    console.log("exception happened,you will not see this");
  } catch (error) {
    console.log("Exception: " + error.message);
  } finally {
    console.log("This will happen no matter what!");
  }
}
//afterTryCatch();

function performCalculation(obj) {
  if (!obj.hasOwnProperty("b")) {
    throw new Error("object missing property");
  }
  //continue with calculation
  return "yes";
}

function performHigherLevelOperation() {
  let obj = {};
  let value = 0;
  try {
    value = performCalculation(obj);
  } catch (error) {
    console.log(error.message);
  }

  if (value == 0) {
    //contigency
    //retry logic
  }
}

performHigherLevelOperation();
