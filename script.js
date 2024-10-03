const button = document.querySelector("button");

button.addEventListener("click", fruitStats);

let resultdiv = document.createElement("div");
resultdiv.id = "result";
document.getElementById("wrapper").appendChild(resultdiv);

function fruitStats() {
  let input = document.querySelector("#input");
  let fruits = input.options[input.selectedIndex].value;

  let Availability = "";
  let Color = "";
  let Nutrients = "";

  switch (fruits) {
    case "Apple":
      Availability = "during Rainy";
      Color = "Red and Green";
      Nutrients = "Vitamin C and Dietary Fiber";

      break;

    case "Banana":
      Availability = "during Winter";
      Color = "Yellow and Red";
      Nutrients = "Potassium and Vitamin B6";

      break;

    case "Orange":
      Availability = "during Monsoon";
      Color = "Orange";
      Nutrients = "Vitamin C and Folate";

      break;

    case "Grapes":
      Availability = "during Spring";
      Color = "Green and Purple";
      Nutrients = "Antioxidants";

      break;
  }

  let text = `The fruit ${fruits} is typically available ${Availability}. 
  It comes in various colors such as ${Color}. 
  It is rich in nutrients including ${Nutrients}`;

  let result = document.getElementById("result");

  result.innerHTML = text;
}
