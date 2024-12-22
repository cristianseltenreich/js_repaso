//como usar regular expresion en javascript

//En JavaScript, puedes utilizar expresiones regulares para buscar y manipular 
// texto en cadenas de caracteres.
//Para crear una expresión regular, debes utilizar el constructor RegExp() o 
// la notación literal /.../.
//La notación literal es la más común y se utiliza para crear expresiones regulares
// de forma más sencilla. Por ejemplo, /abc/ es una expresión regular que busca
// la secuencia de caracteres 'abc' en una cadena.
//veamos un ejemplo de cómo utilizar expresiones regulares en JavaScript:
var str = 'Hola mundo';
var regex = /mundo/;
var result = regex.test(str);
console.log(result); // true    
//En este ejemplo, la expresión regular /mundo/ busca la secuencia de caracteres
// 'mundo' en la cadena 'Hola mundo'. La función test() devuelve true si la
// expresión regular coincide con la cadena, y false en caso contrario.
//Puedes utilizar expresiones regulares para buscar, reemplazar, dividir y validar

//regex para validar un email
console.log('regex para validar un email');
var email = 'pepe-email.com.ar';
console.log(email);
var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
var result = regex.test(email);   
console.log(result); // true
email = 'pepe@email.com.ar';
console.log(email);
result = regex.test(email);
