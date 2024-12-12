
let array = ["manzanas", "naranjas", "mandarinas", "peras", "melón", "peras", "naranjas"];

let resultado = array.findIndex(x => x == "peras");

console.log(resultado); // Esto imprimirá: 3

// en un objeto findIndex

let auto = [
    {marca: "Ford", modelo: "Taunus", anio: 1967},
    {marca: "Toyota", modelo: "Corolla", anio: 1998},
    {marca: "Ford", modelo: "Mustang", anio: 1964},
    {marca: "Chevrolet", modelo: "Camaro", anio: 2008},
    {marca: "Ford", modelo: "T", anio: 1930}
]

let autoFord = auto.findIndex(elem => elem.marca == "Toyota");
console.log(autoFord);