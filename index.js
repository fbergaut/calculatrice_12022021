const input1 = document.getElementById("number1");
const input2 = document.getElementById("number2");

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");

const operationChosen = document.querySelector(".operation-chosen");
const result = document.querySelector("#result");
const equal = document.querySelector(".equal");
let opChoisi;

function showResult() {
  if (opChoisi == "+") {
    result.textContent = Number(input1.value) + Number(input2.value);
  } else if (opChoisi == "-") {
    result.textContent = Number(input1.value) - Number(input2.value);
  }
}

// equal.addEventListener("click", function () {
//   console.log("ça marche !");
// });

add.addEventListener("click", function () {
  operationChosen.innerHTML = add.textContent;
  opChoisi = add.textContent;
});

subtract.addEventListener("click", function () {
  operationChosen.innerHTML = subtract.textContent;
  opChoisi = subtract.textContent;
});
