(function() {
  function incrementCounter() {
    counter = counter + 1;
  }
  function updateUI() {
    const colors = [
      { name: "Alzarin", value: "#e74c3c" },
      { name: "Belize Hole", value: "#2980b9" },
      { name: "Midnight Blue", value: "#2ecc71" },
      { name: "Sun Flower", value: "#f1c40f" },
      { name: "Pumpkin", value: "#d35400" }
    ];
    let result = document.getElementById("resultDiv");
    //Relative to fontsize of element
    result.innerText = counter;
    if (counter > 0) {
      result.style.fontSize = counter + "em";
    }
    //Divids first into second and return the remainder
    //Access  the element of th ecolors array to grab the
    //color object
    let remainder = counter % colors.length;
    result.style.color = colors[remainder].value;
    //clear out alll existing child colors
    let colorDiv = document.getElementById("colorDiv");
    colorDiv.innerHTML = "";
    //Re-add the color divs
    for (i = 0; i < colors.length; i++) {
      //creating a node dynamically with intent of
      //adding it to colorDiv
      var node = document.createElement("div");
      var textNode = document.createTextNode(colors[i].name);
      node.appendChild(textNode);
      node.style.backgroundColor = colors[i].value;
      //can be added in css
      node.style.width = "150px";
      node.style.height = "50px";
      node.style.cssFloat = "left";
      node.style.paddingLeft = "10px";
      node.style.paddingTop = "10px";

      if (i == remainder) {
        node.style.height = "45px";
        //adding a class to the node
        //classList
        node.classList.add("selected");
      }
      colorDiv.appendChild(node);
    }
  }

  let counter = 0;
  let myButton = document.getElementById("myButton");
  myButton.addEventListener("click", () => {
    incrementCounter();
    updateUI();
  });
  updateUI();
})();
