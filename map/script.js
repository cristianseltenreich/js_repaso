//En JavaScript, la estructura Map es un objeto que permite 
//almacenar pares de clave-valor. A diferencia de los objetos 
//normales, las claves de un Map pueden ser de cualquier tipo, 
//incluyendo objetos, funciones y otros tipos primitivos. Esto 
// lo hace más flexible en comparación con los objetos que 
// solo permiten cadenas o símbolos como claves.

//Creación de un Map
let mapa = new Map();

//Agregar elementos al Map
mapa.set('clave1',{ nombre: "Pepe", edad: 20});
mapa.set('clave2', {nombre: "Cacho", edad: 8});
mapa.set(3, {nombre: "Rosa", edad: 50}); // Clave numérica
mapa.set({}, {nombre: "María", edad: 44}); // Clave objeto

// Mostrar el Map completo
console.log(mapa);

for (const [indice, clave] of mapa){
    console.log(`Clave: ${indice}, Nombre: ${clave.nombre} Edad: ${clave.edad}`);
}


// Obtener el valor de una clave
let obtenerValor = mapa.get('clave2'); // {valor: "Pepe"}
console.log(obtenerValor);

// Eliminar un elemento del Map
mapa.delete('clave2');
console.log(mapa);

// Verificar si una clave existe en el Map
console.log(mapa.has('clave2')); // false
console.log(mapa.has(3)); // true

// Limpiar el Map
//mapa.clear();
//console.log(mapa); // Map {}

// Obtener la cantidad de elementos del Map
console.log(mapa.size); // 3 *** o 0 - si descomento limpiar -

// Mapa como un objeto
console.log(JSON.stringify(mapa)); 
// {} --no anda entonces debemos convertir el mapa a array


// Convertir Map a Array
let arrayMapa = Array.from(mapa);
console.log(arrayMapa);

//o consologuearlo asi jeje
console.log(JSON.stringify(Array.from(mapa))); 
[["clave1",{"nombre":"Pepe","edad":20}],[3,{"nombre":"Rosa","edad":50}],[{},{"nombre":"María","edad":44}]]




