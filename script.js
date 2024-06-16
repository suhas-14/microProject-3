// let output = document.getElementById("output-inner");
// let currentVal = "";
// let preVal = "";
// let operator = "";

// document.querySelectorAll(".num-inner").forEach((button) => {
//     button.addEventListener("click", (e) => {
//         let buttonText = e.target.textContent;

//         if (buttonText === "=") {
//             calculate();
//         } else if (buttonText === "RESET") {
//             reset();
//         } else if (buttonText === "Del") {
//             deleteChar();
//         } else if (isOperator(buttonText)) {
//             setOperator(buttonText);
//         } else {
//             appendOutput(buttonText);
//         }
//     });
// });

// function appendOutput(val) {
//     currentVal += val;
//     output.val += currentVal;
// }

// function setOperator(op) {
//     preVal = currentVal;
//     currentVal = "";
//     operator = op;
// }


// function calculate() {
//     let result = 0;
    
//     switch(operator) {
//         case "+":
//             result = parseFloat(preVal) + parseFloat(currentVal);
//             break;
//         case "-":
//             result = parseFloat(preVal) - parseFloat(currentVal);
//             break;
//         case "x":
//             result = parseFloat(preVal) * parseFloat(currentVal);
//             break;
//         case "/":
//             result = parseFloat(preVal) / parseFloat(currentVal);
//             break;
//     }
//     currentVal = result.toString();
//     output.val = currentVal;
// }

// function reset() {
//     currentVal = "";
//     preVal = "";
//     operator = "";
//     output.val = "";
// }

// function deleteChar() {
//     currentVal = currentVal.slice(0, -1);
//     output.val = currentVal;
// }

// function isOperator(val) {
//     return val === "+" || val === "-" || val === "*" || val === "/";
// }









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