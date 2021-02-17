const input1 = document.getElementById("number1");
const input2 = document.getElementById("number2");

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

const operationChosen = document.querySelector(".operation-chosen");
const equal = document.querySelector(".equal");
const result = document.querySelector("#result");
const clearCalc = document.getElementById("clear");

let chosenOp;

function showResult() {
  if (chosenOp === "+") {
    result.textContent = Number(input1.value) + Number(input2.value);
  } else if (chosenOp === "-") {
    result.textContent = Number(input1.value) - Number(input2.value);
  } else if (chosenOp === "*") {
    result.textContent = Number(input1.value) * Number(input2.value);
  } else if (chosenOp === "/") {
    result.textContent = Number(input1.value) / Number(input2.value);
  }
}

// equal.addEventListener("click", function () {
//   console.log("ça marche !");
// });

add.addEventListener("click", function () {
  // operationChosen.innerHTML = "Opération choisie " + add.textContent;
  chosenOp = add.textContent;
});

subtract.addEventListener("click", function () {
  // operationChosen.innerHTML = subtract.textContent;
  chosenOp = subtract.textContent;
});

multiply.addEventListener("click", function () {
  // operationChosen.innerHTML = multiply.textContent;
  chosenOp = multiply.textContent;
});

divide.addEventListener("click", function () {
  // operationChosen.innerHTML = divide.textContent;
  chosenOp = divide.textContent;
});

clearCalc.addEventListener("click", function() {
  input1.value = "";
  input2.value = "";
  result.textContent = "";
});
