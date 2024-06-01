let screen = document.getElementById('screen');
let memory = '';

// Función para agregar números y operadores al display
function addToScreen(value) {
screen.value += value;
}

// Función para limpiar el display
function clearScreen() {
screen.value = '';
}

// Función para calcular el resultado de la operación ingresada
function calculate() {
try {
memory = screen.value; // Guarda la operación en memoria
screen.value = eval(screen.value); // Calcula el resultado
} catch (error) {
screen.value = 'Error'; // En caso de error, muestra un mensaje de error en el display
}
}