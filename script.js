var display = document.getElementById("output-inner");

function getInput(value) {
    // console.log("Number/operators keys clicked");
    var userInput = value;
    
    if(display.value && display.value.slice(-1) === '.') {
        if (value === ".") {
            return;
        }
    }

    display.value += userInput;
}

function isOperator(userInput) {
    return userInput === "+" || userInput === "-" || userInput === "x" || userInput === "/";
}

function delHandler() {
    // console.log("Delete button clicked");
    currentVal = display.value;
    if (currentVal === "") {
        alert("Nothing to delete")
    }
    else {
        display.value = display.value.slice(0, -1);
    }
}

function resetHandler() {
    // console.log("Reset button clicked")
    currentVal = display.value
    if (currentVal === "") {
        alert("Nothing to clear");
    }
    else {
        display.value = "";
    }
}

function result() {
    // console.log("Result button clicked")
    currentVal = display.value;
    if (currentVal === "") {
        alert("Nothing to evaluate");
    }
    else {
        try{
            display.value = eval(currentVal);
        }
        catch(err) {
            alert("Invalid Input");
        }
    }
}



















































// const display = document.getElementById("output-inner")

// function appendToDisplay(input) {
//     display.value += input;
// }

// function clear() {
//     // display.value = ""
// }

// function reset() {
//     display.value = ""
// }

// function result() {
//     try {
//         display.value = eval(display.value)
//     } catch (error) {
//         display.value = alert("You have not selected a number!")
//     }
// }
