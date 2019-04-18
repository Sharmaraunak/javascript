//iffy : invoking a function at the same time calling them.

var counter = (function() {
  //private stuff
  let count = 0;

  function print(message) {
    console.log(message + "----" + count);
  }

  //return an object
  return {
    /* value: count,
    can't use this technique
    use getters ans setters
    */
    get: function() {
      return count;
    },

    set: function(value) {
      count = value;
    },

    increment: function() {
      count++;
      print("After  Increment");
    },
    reset: function() {
      print("before Reset");
      count = 0;
      print("After reset");
    }
  };
})();
//console.log(counter.count); //return undefinrd because count is never returned as part of object
//console.log(counter.value);
counter.increment();
counter.increment();
counter.set(7);
//Accidently created a closure
//console.log(counter.value)
console.log(counter.get());
counter.reset();
