let array = ["a", "b", "c", "d", "e"];

// El método fill() rellena un array con un valor inicial específico.
// Si la posición inicial es mayor que la longitud del array, el método no realiza nada.

//fill todo
// Rellena todo el array con "X" 
let resultado = array.fill("X");
console.log(resultado); // imprime: ["X", "X", "X", "X", "X"]

// Reseteamos el array a su estado original para las siguientes pruebas
array = ["a", "b", "c", "d", "e"];

// fill desde
// Rellena el array desde el índice 1 hasta el final con "X"
let fillSegundo = array.fill("X", 1);
console.log(fillSegundo); // imprime: ["a", "X", "X", "X", "X"]

// Reseteamos el array a su estado original para las siguientes pruebas
array = ["a", "b", "c", "d", "e"];

// fill rango
// Rellena el array desde el índice 1 hasta el índice 3 
// (sin incluirlo el 3 en los resultados) con "X"
let fillTercero = array.fill("X", 1, 3);
console.log(fillTercero); // imprime: ["a", "X", "X", "d", "e"]



    