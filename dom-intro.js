//dom:object based structure of html page.
(function() {
  function clickHandler(message) {
    console.log("hi----" + message);
  }

  //get a reference to myButton
  let myButton = document.getElementById("myButton");
  console.log(myButton);
  myButton.addEventListener("click", () => {
    clickHandler("hi from iffe");
  });
})();
