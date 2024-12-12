const frutas = ["peras", "manzanas", "mandarinas", "ciruelas"];
console.log(`lista frutas original: ${frutas}`);

//slice corta una rodaja de un array
//nos devuelve esa rodaja (sin el último índice incluido -ver ejemplo debajo-)

const frutasCortadas = frutas.slice(1, 3);
console.log(`lista frutas cortadas: ${frutasCortadas}`);

//no corta la lista original