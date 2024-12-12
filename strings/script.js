// atajos teclado
// alt + 96 ` (backticks)
// Ctrl + }  comentario //
// Mayúsc + Ctrl + f --> acomoda el código indentándolo correctamente
//barra inversa «\» con el teclado alt + 92 

// Strings

//barra de escape

let string = 'Let\'s do it';
let escapalo = `El símbolo con el que se escapa es \\, probalo je`;


console.log(string);
console.log(escapalo);

let salto = `Salto de línea con\n 
esto bajó con salto de línea jeje`
console.log(salto);

//cantidad caracteres -> lenght

let palabraIngresada = "murciélago";

let cuentaletras = (palabra) => palabra.length;
console.log(cuentaletras(palabraIngresada));

//cortar una porción de una cadena -> slice
//arranca desde el caracter siguiente al primero 
//y toma hasta el último indicado inclusive

let palabraCortar = 'educación';

console.log(palabraCortar.slice(3, 8)); //cació

//reemplazar una cadena -> replace
const palabraReemplazar = "Reemplazar esta palabra a reemplazar";

console.log(palabraReemplazar.replace('palabra a reemplazar', 'palabra reemplazada')); //Reemplazar nueva palabra

//concatenar strings -> +
let concatenar = "Hola" + " " + "Mundo";

console.log(concatenar);

//convertir a mayúsculas -> toUpperCase
let mayUpper = "me hago grande";
console.log(`vamos a poner en mayúsculas la frase ${mayUpper}`); 
console.log(mayUpper.toUpperCase());

//convertir a minúsculas -> toLowerCase
let mayLower = "ME HAGO CHIQUITA";
console.log(`vamos a poner en minúsculas la frase ${mayLower}`);  
console.log(mayLower.toLowerCase());

//separar frase con splitting delimitando con uno de 
// los caracteres (el caracter luego es omitida)
let fraseSeparar = "separar";
let resultado =  fraseSeparar.split("p");
console.log(resultado);

fraseSeparar = "deletreo";
// fraseSeparar.split(""): Esto divide la cadena en un array de letras individuales
resultado = fraseSeparar.split("");
console.log(resultado);


// join("-"): Esto une las letras del array con un guion - como separador
resultado = resultado.join("-");
console.log(`resultado de la frase deletreada unido con join: ${resultado}`);

fraseSeparar = "deletreando";
let deletreado = fraseSeparar.split("").join("-");
console.log(`deletreado ${deletreado} en un solo paso con split("").join("-")!`); 

//eliminar espacio en blanco del inicio y final de una cadena de texto
//y concat para concatenar variabes
let texto1 = " JS"
let cadenaConEspacios = "   Hola Mundo   ";
console.log(cadenaConEspacios.trim().concat(texto1)); //imprime: "Hola Mundo JS"


//tambien podemos usar strimStart
let texto2 = "JS";
let cadenaConEspacios2 = "   Hola Mundo Cruel";
console.log(cadenaConEspacios2.trimStart()); //imprime: "Hola Mundo Cruel"

//y strimEnd para eliminar espacio del final de la cadena
let cadenaConEspacios3 = "Hola Mundo Cruel            ";
console.log(cadenaConEspacios3.trimEnd().concat(texto1)); //imprime: "Hola Mundo Cruel JS"

// podemos saber cual es la letra de una palabraen determinada posición
// recordemos que las cadenas empiezan en 0
let cadenaHola = "Hola";
let muestraLetra= cadenaHola.charAt(3); //muestra a
console.log(muestraLetra);

//separamos cadena de texto con split de acuerdo a un patrón por ejemplo un "."
let textoParaSepararacion = "Esto te lo pasa el backend. Es importante. Separalo";
console.log(`Cadena de texto que voy a separar con split macheando con sus puntos:\n${textoParaSepararacion}`);

let textoSeparado = textoParaSepararacion.split(".");

console.log(textoSeparado); //[ 'Esto te lo pasa el backend', ' Es importante', ' Separalo' ]


