let output = document.getElementById("output-inner");
let currentVal = "";
let prevVal = "";
let operator = "";

document.querySelectorAll(".num-inner").forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonText = e.target.textContent;

    if (buttonText === "=") {
      calculate();
    } else if (buttonText === "RESET") {
      reset();
    } else if (buttonText === "Del") {
      deleteLastChar();
    } else if (isOperator(buttonText)) {
      if (currentVal === "") {
        alert("Please select a number first");
      } else {
        setOperator(buttonText);
      }
    } else {
      appendToOutput(buttonText);
    }
  });
});

function appendToOutput(val) {
  currentVal += val;
  output.value = currentVal;
}

function setOperator(op) {
  prevVal = currentVal;
  console.log(prevVal);
  currentVal = "";
  operator = op;
}

function calculate() {
  let result = 0;

  switch (operator) {
    case "+":
      result = parseFloat(prevVal) + parseFloat(currentVal);
      break;
    case "-":
      result = parseFloat(prevVal) - parseFloat(currentVal);
      break;
    case "x":
      result = parseFloat(prevVal) * parseFloat(currentVal);
      break;
    case "/":
      result = parseFloat(prevVal) / parseFloat(currentVal);
      break;
  }

  currentVal = result.toString();
  output.value = currentVal;
}

function reset() {
  currentVal = "";
  prevVal = "";
  operator = "";
  output.value = currentVal;
}

function deleteLastChar() {
  currentVal = currentVal.slice(0, -1);
  output.value = currentVal;
}

function isOperator(val) {
  return val === "+" || val === "-" || val === "x" || val === "/";
}
