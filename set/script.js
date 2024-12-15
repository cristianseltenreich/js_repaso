// podemos usar set cuando necesesitamos que no se repitan elementos
//por ejemplo

const { stringify } = require("querystring");

let personas = new Set(["Juan", "Pedro", "María", "Juan", "Juan"]);



//métodos adicionales
personas.add("Cacho"); //método para agregar elementos

console.log (personas);

let tamaño = personas.size;

console.log(tamaño); //imprime: 3

personas.delete("Juan"); //método para eliminar elementos, elimina todos los iguales

console.log (personas);

//metodo para averiguar si existe un elemento
let buscado = "Juan";
let exite = personas.has(buscado);

console.log(`${buscado} está en el set: ${exite}`); //imprime: false

//podemos darle uso si queremos que no se repitan los elementos de un array

//definimos el array
let articulos = ["mouse", "teclado", "monitor", "mouse", "CPU"];

function convertirUnitario (elementos){
    return new Set(elementos);
}

let articulosUnicos = convertirUnitario(articulos);
console.log(`Los artículos únicos son ${JSON.stringify([...articulosUnicos])}`);
console.log (articulosUnicos);
