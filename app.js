const add = (number1, number2) => {
  return number1 + number2;
};

const subtract = (number1, number2) => {
  return number1 - number2;
};

const multiply = (number1, number2) => {
  return number1 * number2;
};

const divide = (number1, number2) => {
  return number1 / number2;
};

/*---------récupérer le contenu des inputs-------*/

const inputField1 = document.getElementById("input-field1");

inputField1.addEventListener("change", (event) => {
  const result1 = event.target.value;
});

const inputField2 = document.getElementById("input-field2");

inputField2.addEventListener("change", (event) => {
  const result2 = event.target.value;
});
