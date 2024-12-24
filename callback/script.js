//un callback es una función que se pasa como argumento a otra función
//y se ejecuta después de un proceso que probablemente tome tiempo


// Función para mostrar un número en la consola
function mostrarPantalla(numero) {
    console.log(numero);
};

// Función para sumar dos números y ejecutar un callback con el resultado
function suma(num1, num2, callback) {
    let resultado = num1 + num2; // Sumar los dos números
    callback(resultado); // Ejecutar el callback con el resultado de la suma
}

// Llamar a la función suma con los números 5 y 7, 
// y la función mostrarPantalla como callback
suma(5, 7, mostrarPantalla); // Debería mostrar 12 en la consola
