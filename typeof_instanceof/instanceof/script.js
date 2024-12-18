//instanceof viene a solucionar la imposibilidad de 
//typeof de devolvernos el tipo de dato de los
//objetos de js -objetos propiamente dichos - u objetos
//de js como por ejemplo array o date entre otros

//tipeof
//objeto
let a = typeof {curso: "Javascript"};

//array
let b = typeof [1,2,3];

//date
let c = typeof new Date();

//null
let d = typeof null;


console.log(`typeof({curso: "Javascript"}): ${a}`); // object
console.log(`typeof([1,2,3]): ${b}`); // object
console.log(`typeof(new Date()): ${c}`); // object
console.log(`typeof(null): ${d}`); // object

//instanceof

//objeto
let g = {nombre: "Cristian"};

//array
//let e =["HTML", "CSS", "JS","Python"]
let e = 2; //false instanceof 
//let e = {lenguaje: "Python"}; //false instanceof 

//date
let f = new Date();

//null
let h = null;

if (g instanceof Object){
    console.log(`verificado, ${JSON.stringify(g)} es un objeto`)
}else{
    console.log(`no pasa, ${JSON.stringify(g)} no es un objeto, `)}


if (g instanceof Array){
    console.log(`verificado, ${JSON.stringify(e)} es un array`)
}else{
    console.log(`no pasa, ${JSON.stringify(e)} no es un array `)}
    

console.log(`Objeto: ${g instanceof Object}`); // true
console.log(`Array: ${e instanceof Array}`); // false
console.log(`Date: ${f instanceof Date}`); // false
//console.log(`Null: ${h instanceof null}`); // se rompe no anda para null


