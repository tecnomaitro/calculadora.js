// Esta funcion limpian todos los valores
function clearScreen() {
    document.getElementById("result").value = "";
}


// Esta funcion muestra todos los valores
function display(value) {
    document.getElementById("result").value += value;
}

// Esta funcion evalua la expresion y retorna el resultado
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}