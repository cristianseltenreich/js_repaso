//de string a number
//tenemos tres formas Number - parseInt - parseFloat - +
//let pi = Number("3.14");
let pi = parseFloat("3.14");//solo con punto va a andar
console.log(pi);
console.log(`pi es un número: ${typeof pi}`);

//con parseint vamos a convertir el string a un entero
let entero = parseInt("10,3");
console.log(entero);
console.log(`entero es un número: ${typeof entero}`);

//si transformamos una variable string que no sea número
//nos va a devolver NaN que es tb un número
let noEsNumero = parseFloat("hola");
console.log(noEsNumero);
console.log(`noEsNumero es un número: ${typeof noEsNumero} luego de parsearlo jajaj`);

//si parseamos una cadena vacía da 0
let cadenaVacia = parseFloat("");
console.log(cadenaVacia);
console.log(`cadenaVacia es un número: ${typeof cadenaVacia}`);

//conversión con símbolo +
variableA = +"5";
console.log(variableA);
console.log(typeof(variableA));

//número a string
let numeroString = String(10);

console.log(numeroString);
console.log(typeof(numeroString));

//otra manera variable.toString()
let l = 100;
let n = l.toString();

console.log(n);
console.log(typeof(n));

//podemos convertir dates a numbers
fechaA = new Date();
fechaNumero = Number(fechaA); //la convierte en milisegundos

console.log(fechaA);
console.log(fechaNumero);
console.log(typeof(fechaNumero));

//dates a strings
let fechaString = String(fechaA);

console.log(fechaString);
console.log(typeof(fechaString));

//otra manera de convertir dates a strings
let fechaString2 = `${fechaA.getFullYear()}-${fechaA.getMonth()+1}-${fechaA.getDate()}`;

console.log(fechaString2);
console.log(typeof(fechaString2));

//date.toString()
let fechaToString3 = fechaA.toString();

console.log(fechaToString3);
console.log(typeof(fechaToString3));

//Number a Boolean
