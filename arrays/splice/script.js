const frutas = ["peras", "manzanas", "mandarinas", "ciruelas"];
console.log(`lista frutas original: ${frutas}`);

//splice 
// devuekve el elemento eliminado
//quita elemento/s e inserta en su lugar otro/s en reemplazo en el lugar
//donde lo/s quitamos

// acá quita el elemento en
// indice 2
// 1 elemento
// lo reemplaza por "frutillas"
const resultado = frutas.splice(2, 1, "frutillas", "ananás");

console.log(resultado);
console.log(frutas);