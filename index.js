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

const btnOps = document.querySelectorAll(".btnOp");

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
  btnOps.forEach(btn => {
    btn.classList.remove("btn-active");
  });

}

// equal.addEventListener("click", function () {
//   console.log("ça marche !");
// });

btnOps.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    btnOps.forEach((btn) => {
      btn.classList.remove("btn-active");
    });
    chosenOp = event.target.textContent;
    event.target.classList.add("btn-active");
  });
});

// add.addEventListener("click", function () {
//   // operationChosen.innerHTML = "Opération choisie " + add.textContent;
//   btnOps.forEach((btn) => {
//     btn.classList.remove("btn-active");
//   });
//   chosenOp = add.textContent;
//   add.classList.add("btn-active");
// });

// subtract.addEventListener("click", function () {
//   // operationChosen.innerHTML = subtract.textContent;
//   btnOps.forEach((btn) => {
//     btn.classList.remove("btn-active");
//   });
//   chosenOp = subtract.textContent;
//   subtract.classList.add("btn-active");
// });

// multiply.addEventListener("click", function () {
//   // operationChosen.innerHTML = multiply.textContent;
//   btnOps.forEach((btn) => {
//     btn.classList.remove("btn-active");
//   });
//   chosenOp = multiply.textContent;
//   multiply.classList.add("btn-active");
// });

// divide.addEventListener("click", function () {
//   // operationChosen.innerHTML = divide.textContent;
//   btnOps.forEach((btn) => {
//     btn.classList.remove("btn-active");
//   });
//   chosenOp = divide.textContent;
//   divide.classList.add("btn-active");
// });

clearCalc.addEventListener("click", function () {
  input1.value = "";
  input2.value = "";
  result.textContent = "";
});
