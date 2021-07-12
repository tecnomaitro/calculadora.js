# calculadora.js
2da practica para el curso front end
Logica del java
 Understanding the JavaScript Code

The clearScreen(), display(), and calculate() functions are used to add functionality to the Calculator.
Clearing Values

The clearScreen() function access the DOM using the id of the result and clear its value by assigning it an empty string.

function clearScreen() {
 document.getElementById("result").value = "";
}

Displaying Values

display() function accesses the DOM using the id of the result and appends the value of the clicked button to the result.

function display(value) {
 document.getElementById("result").value += value;
}

Evaluating Expression

The calculate() function accesses the DOM using the id of the result and evaluates the expression using the eval() function. The evaluated value of the expression is again assigned to the result.

Note: The eval() function is used in JavaScript to evaluate the expression passed to it as a parameter. It returns the evaluated result of the mathematical expression.

function calculate() {
 var p = document.getElementById("result").value;
 var q = eval(p);
 document.getElementById("result").value = q;
}
