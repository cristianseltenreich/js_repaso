//every funciona asi
//si todos los elementos cumplen con una condición determinada
// devuelve true, si no devuelve false
let frutas = ["manzanas", "manzanas",  "manzanas",  "manzanas", "peras"];

let todosIguales = frutas.every(fruta => fruta == "manzanas");

console.log(todosIguales); // imprime: false
