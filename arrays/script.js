const habilidades = ["HTML", "CSS", "JS", "Python"];

//se puede inicializar con x elementos vacíos
const arreglo = new Array(5);

// luego le asignamos valores

habilidades.forEach((habilidad, index) => {
    arreglo[index] = habilidad;
});

console.log(arreglo); //imprime: ["HTML", "CSS", "JS", "Python", "Node"];

//insertarlo en html
// document.getElementById('seleccionable').innerHTML= arreglo;

// Se puede inicializar con valores y luego agregar más
const arregloConValores = ["HTML", "CSS", "JS", "Python"];
console.log(`El array tiene : ${arregloConValores.length} elementos, el vacío no lo cuenta!!`); //imprime el largo del arreglo
arregloConValores.push("Node");
console.log(arregloConValores); //imprime: ["HTML", "CSS", "JS", "Python", "Node"]
console.log(`El array tiene : ${arregloConValores.length} elementos`); //imprime el largo del arreglo
console.log(arregloConValores[0]); //imprime el primer elemento del arreglo

//eliminar un elemento
console.log(arregloConValores); //imprime: ["HTML", "CSS", "Python", "Node"]
arregloConValores.splice(0, 2); //elimina dos elementos desde la posición 0
console.log(arregloConValores); //imprime: ["JS", "Python", "Node"]

//otra forma de eliminar un elemento es con pop 
arregloConValores.pop(); //elimina el último elemento
console.log(arregloConValores); //imprime: ["JS", "Python"]

//ordenar elementos numpericos de un array con sort
const arregloDesordenado = [30, 25, 8, 1, 7, 110];
console.log(`Arreglo numérico desordenado: ${arregloDesordenado}`);

const arregloOrdenado = arregloDesordenado.sort((a, b) => a - b);
console.log(`Arreglo numérico ordenado con sort(a, b) => a - b: ${arregloOrdenado}`);
// El método sort() en JavaScript, por defecto, convierte los elementos 
// del array a cadenas y los ordena en orden lexicográfico (alfabético). 
// Esto significa que no está ordenando los números de la manera que esperás.
// Entonces..
// La función de comparación (a, b) => a - b le dice a sort() 
// cómo comparar dos elementos:
// Si el resultado es negativo (a - b < 0), a se coloca antes que b.
// Si el resultado es positivo (a - b > 0), b se coloca antes que a.
// Si el resultado es cero (a - b === 0), no se cambia el orden de a y b.

const arrayCadenaOrdenable = ["pedro", "bocha", "zapato", "diaria", "aceituna", "coco"];
const arrayCadenaOrdenada = arrayCadenaOrdenable.sort();
console.log("Array desordenado -string-" + arrayCadenaOrdenable)
console.log(`array desordenado -string- ${arrayCadenaOrdenable.join("-")} (unido con join)`);
console.log(`array ordenado con sort -string- ${arrayCadenaOrdenada.join("-")} (unido con join)\n`);

//mostrar un elemento del array según ubicación
//recordar que 0 es el primer elemento
console.log(`el segundo elemento del array (array[1]) es ${arrayCadenaOrdenable[1]} -del array ordenado-`);

//ubicar último elemento de un array
let ubicacionUltimoElemento = arrayCadenaOrdenada.length - 1;
let ultimoElemento = arrayCadenaOrdenada[ubicacionUltimoElemento];
console.log(`El último elemento * array[array.length - 1] * es: ${ultimoElemento}`);

//insertar elementos al final usando el length
const arregloCualq = ['palito', 'bombón', 'pelado'];
arregloCualq [arregloCualq.length] = "para que";
arregloCualq [arregloCualq.length] = "para nada";
console.log(arregloCualq);


// filter filtrando elementos de un array
// con % obtenemos el resto 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log (numeros);
const numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log("Números pares:", numerosPares); //imprime: [2, 4, 6, 8, 10]

const numerosImpares = numeros.filter(numero => numero % 2 !=0); 
console.log("Impares:", numerosImpares); //imprime [1, 3, 5, 7, 9]

const menoresCinco = numeros.filter(numero => numero <5); 
console.log("menores a 5", menoresCinco)//imprime [1, 2, 3, 4]

//filtro array de strings que comienzan con "a"

const nombres = ["Alex", "Miguel", "Ana", "Pedro", "Andrea", "Alfredo", "Alicia", "Alberto", "Raúl", "Amelia"];
console.log("Todos los nombres:", nombres);
const nombresInicialesA = nombres.filter(nombre => nombre.startsWith("A"));
console.log("Nombres que comienzan con 'A' filtrados con .startsWith('A'):", nombresInicialesA); //imprime: ["Alex", "Alfredo", "Alicia", "Alberto"]

//usando filter en un array de objetos

const personas = [
  { nombre: "Alex", apellido: "Pérez",edad: 25, altura: 1.75 },
  { nombre: "Miguel",apellido: "Garzón", edad: 30, altura: 1.85 },
  { nombre: "Ana", apellido: "Pérez",edad: 28, altura: 1.65 },
  { nombre: "Pedro", apellido: "Pierre",edad: 22, altura: 1.90 },
  { nombre: "Andrea", apellido: "Parra",edad: 32, altura: 1.70 },
  { nombre: "Alfredo", apellido: "Pierre",edad: 27, altura: 1.80 },
  { nombre: "Alicia", apellido: "Pocoyó",edad: 35, altura: 1.60 },
  { nombre: "Alberto", apellido: "Pierre",edad: 24, altura: 1.88}
  ];

let seleccFiltro = personas.filter(item => item.apellido === "Pérez");
//const seleccFiltro = personas.filter(persona => persona.apellido === "Pérez");

console.log(`Personas filtradas con filter, con apellido Pérez ${JSON.stringify(seleccFiltro)}`);

var edadFiltro = 30;
seleccFiltro = personas.filter(p => p.edad > edadFiltro);
console.log(`Personas filtradas con filter, mayores de ${edadFiltro}: ${JSON.stringify(seleccFiltro)}`);


//voy a retornar un array de los apellidos de la última selección con forEach 
//los voy a consologuear unidos con un salto de línea \n
let perMay25 = [];
const edadFiltrar = 25;
personas.forEach(elem => {    
    if (elem.edad > edadFiltrar) {
        perMay25.push(elem.apellido);
    }    
});
console.log(`Personas mayores a ${perMay25}:\n${perMay25.join('\n')}`);


//uso de map
let frutas = ["naranjas", "manzanas", "naranjas", "peras, naranjas"];
let cambiarFruta = frutas.map("naranjas", "manzanas")



//reduce para contar cuantos elementos de un array tienen un valor mayor a 5
//reduce para sumar todos los elementos de un array
let total = 0;
const sumaNumeros = numeros.reduce((total, numero) => total + numero, 0);
console.log("Suma de todos los elementos:", sumaNumeros); //imprime: 55


//insertarlo en html
//document.getElementById("seleccionable") .innerHTML= arregloConValores;



