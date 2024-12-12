// Para calcular cuántos grados Celsius
// Fahrenheit = (Celcius * 1.8) + 32


// function CelciusAFarenheit(cel) {
//     return (cel * 1.8) + 32;

// };


// misma función con arrow function (función flecha)
const celciusAFarenheit = (cel) => (cel * 1.8) + 32;
// con la flecha, se retorna el resultado automáticamente 
// si se usa una sola expresión
// no es necesario el return si se usa una sola expresión


let celcius = 10;

let farenheit = celciusAFarenheit (parseInt(celcius));
//parseInt convierte a entero -sirve en caso de que nos envíen un número cómo string
console.log(`${celcius}º celcius equivalen a ${farenheit}º farenheit`);

