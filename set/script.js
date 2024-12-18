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
    if (!Array.isArray(elementos)) {
        throw new Error("El argumento debe ser un array");
        return //salgo
    }//valido que sea un array lo que me pasan!!
    let setUnicos = new Set(elementos) //lo convierto a set para eliminar duplicados
    let arrayUnicos = [...setUnicos]
    // lo almaceno en array 
    //tengo que usar el spread operator en elemento para que funcione
    return arrayUnicos
}

let articulosUnicos = convertirUnitario(articulos);
console.log(`Los artículos únicos son ${articulosUnicos.join(", ")}`);
console.log (articulosUnicos);
