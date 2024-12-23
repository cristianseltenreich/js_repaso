//como usar regular expresion en javascript

//En JavaScript, puedes utilizar expresiones regulares para buscar y manipular 
// texto en cadenas de caracteres.
//Para crear una expresión regular, debes utilizar el constructor RegExp() o 
// la notación literal /.../.
//La notación literal es la más común y se utiliza para crear expresiones regulares
// de forma más sencilla. Por ejemplo, /abc/ es una expresión regular que busca
// la secuencia de caracteres 'abc' en una cadena.
//veamos un ejemplo de cómo utilizar expresiones regulares en JavaScript:
let str = 'Hola mundo';
let regex = /mundo/;
let result = regex.test(str);
console.log(result); // true    
//En este ejemplo, la expresión regular /mundo/ busca la secuencia de caracteres
// 'mundo' en la cadena 'Hola mundo'. La función test() devuelve true si la
// expresión regular coincide con la cadena, y false en caso contrario.
//Puedes utilizar expresiones regulares para buscar, reemplazar, dividir y validar

// cadenas de caracteres. Por ejemplo, puedes buscar todas las coincidencias de
// una expresión regular en una cadena utilizando el método match():
str = 'Hola mundo';
regex = /o/g;
result = str.match(regex);
console.log(result); // ['o', 'o']

//modificadores de expresiones regulares más comunes en JavaScript:
// i: Ignora mayúsculas y minúsculas.
// g: Busca todas las coincidencias en lugar de detenerse en la primera.
// m: Trata la cadena como múltiples líneas.
// u: Trata la cadena como unicode.
// s: Trata la cadena como una sola línea.
// y: Realiza una búsqueda pegajosa
//Para utilizar un modificador en una expresión regular, debes colocarlo después
// de la expresión regular. Por ejemplo, /abc/g busca todas las coincidencias de

// la secuencia de caracteres 'abc' en una cadena.
//Veamos un ejemplo de cómo utilizar el modificador i para ignorar mayúsculas y
// minúsculas en una expresión regular:
str = 'Hola mundo';
regex = /mundo/i;
result = regex.test(str);
console.log(result); // true


