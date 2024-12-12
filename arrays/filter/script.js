// Definimos un array con diferentes frutas
const array = ["manzana", "pera", "naranja", "banana", "pera", "naranja"];

// Usamos el método filter para crear un nuevo array que contenga solo los elementos que cumplen con la condición
const resultado = array.filter(elemento => elemento == "naranja");

// Mostramos el resultado en la consola
console.log(resultado); // Esto imprimirá: ["naranja", "naranja"]

//ahora el filter con un array de objetos
let auto = [
    {marca: "Ford", modelo: "Taunus", anio: 1967},
    {marca: "Toyota", modelo: "Corolla", anio: 1998},
    {marca: "Ford", modelo: "Mustang", anio: 1964},
    {marca: "Chevrolet", modelo: "Camaro", anio: 2008},
    {marca: "Ford", modelo: "T", anio: 1930}
] 

let autoFord = auto.filter(elem => elem.marca == "Ford");
console.log(autoFord); //imprimo el array filtrado que obtuve

// plus, con un bucle voy a mostrar solo una propiedad del objeto filtrado
console.log("\nAutos Ford: ")
// for (let index = 0; index < autoFord.length; index++) {
//     const element = autoFord[index];
//     console.log(element.modelo)    
// };

//misma solución comentada pero con forEach
autoFord.forEach(element => {
    console.log(element.modelo);  
});


//uso de filter
let personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Maria", edad: 30 },
    { nombre: "Pedro", edad: 20 },
    { nombre: "Ana", edad: 28 }
];

//para obtener todas las personas mayores o iguales a 28 años

let personasMayores = personas.filter(persona => persona.edad >= 28);
console.log(personasMayores); // [{ nombre: "Maria", edad: 30 }, { nombre: "Ana", edad: 28 }]


