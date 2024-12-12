// atajos teclado
// alt + 96 ` (backticks)
// Ctrl + }  comentario //
// Mayúsc + Ctrl + f --> acomoda el código indentándolo correctamente

//document.getElementById('demostracion').innerHTML ='texto agregado con js!'

//**********variables***/
let x;
//let permite declarar múltiples variables en una misma línea
let y, z;

const j = "piedra, papel, tijera";

//asignación de valores a variables
x = 5;
y = 7;
z = x + y; //podemos asignarle la suma de variables


console.log(x, y, z);
console.log(j);

//las variables dentro de una llave tienen -scope- alcance
//sólo dentro de esa llave 
function alcance(){
    let a = 10;
    console.log(a); //la variable a está disponible dentro de esta función
}

//llamada a la función alcance
alcance();

//console.log(a); //no está disponible fuera la función alcanc
//da error ReferenceError: a is not defined

//si fuera a la inversa no sucede esto, si dentro de las llaves no estuviera declarada
// la variable x pero si estuviera por fuera, la variable de afuera, la "padre"
// está disponible para la de adentro como en el sig ejemplo

const r = 6;

function scopeAdentro(){
    console.log(r); //la variable r está disponible dentro de esta función
}

scopeAdentro();

// variables
// Número	
let num = 10;
let flotante = 10.12; //decimal

// cadena   
let variableTexto = 'Texto';
let variableTexto1 = 'Texto';
let variableConBackticks = `Esta es una varuable con backticks ${flotante}` ;
// los backticks permiten combinar texto con otras variables en una misma cadena de texto
// a lo que está entre backticks se lo llama valor literal
// expresion de javascript se le llama a ${xxxxxx}

console.log(variableConBackticks);

// operadores

const variableQ = 'valor de la variable'; // = operador de asignación
const varSuma = 1 + 3; // + operador aritmético de suma
const varResta = 5 - 1; // - operador aritmético de resta
const multiplcation = 2 * 12; // * operador aritmético de multiplicación    
const division = 12 / 4; // / operador aritmético de división 
const resto = 23 % 3 ; // % operador aritmético del resto 
const exponen = 3 ** 3 // ** operador aritmético de exponenciación 


let numX = 5;
let numY = 5.5;

numX ++;// ++ increnta
numY --;// -- decrementa

console.log (numX, numY);

console.log (exponen);

//tipos de datos: booleanos
let m = true; //verdadero
let n = false; //falso

//tipos de datos: undefined
let o; //indefinido ya q no se le asignó valor

console.log (typeof(o)); //typeof(o) es el tipo de la variable y es  

//tipos de datos: null
let p = null; //es nulo
console.log (typeof(p)); //typeof(o) va a dar objet, eso es un bug histórico


//tipos de datos: objetos
let objeto = {
    clave: "valor"
};

//tipos de datos: arrays
let arreglo = [10, "verde", true]; //

console.log(arreglo);

//tipos de datos: date - fecha-

let fecha = new Date();

console.log(fecha);

function suma(numA, numB) {
    return numA + numB;
}

function resta(numA, numB) {
    return numA - numB;
}

function multiplcacion(numA, numB) {
    return numA * numB;
}

let t = 7;
let u = 8;

let resultado = suma(t,u);
console.log(resultado);

resultado = resta(t, u);
console.log(resultado);

resultado = multiplcacion(t, u);
console.log(resultado);