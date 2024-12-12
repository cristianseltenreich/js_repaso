//some va a devolver true o false si existe elemento que cumpla con el 
//criterio de búsqueda de some
const frutas = ["peras", "manzanas", "mandarinas"];

const tienePera = frutas.some(fruta => fruta == "peras");
const tieneSandia = frutas.some(fruta => fruta == "sandia");
console.log(`Arreglo de frutas: ${frutas}`);
console.log(`Tiene pera? ${tienePera}`); //true
console.log(`Tiene sandía? ${tieneSandia}`); //false