

function consultaTipo(variableConsultarTipo){
    let resultado = typeof(variableConsultarTipo)
    return resultado;
}

let variableTipo =  "Cristian"

console.log(`typeof(${variableTipo}): ${consultaTipo(variableTipo)}`); // string

variableTipo = 5;

console.log(`typeof(${variableTipo}): ${consultaTipo(variableTipo)}`); // number

variableTipo = true;

console.log(`typeof(${variableTipo}): ${consultaTipo(variableTipo)}`); // boolean

//caso especial null es objeto!
variableTipo = null;

console.log(`typeof(${variableTipo}): ${consultaTipo(variableTipo)}`); // object

variableTipo = undefined;

console.log(`typeof(${variableTipo}): ${consultaTipo(variableTipo)}`); // undefined

variableTipo = { nombre: "Cristian" };

console.log(`typeof(${JSON.stringify(variableTipo)}): ${consultaTipo(variableTipo)}`); // object

//caso especial array devuelve objeto 
//porque un array es un objeto de JS
variableTipo = [1,2,3,4];

console.log(`typeof(${variableTipo}): ${consultaTipo(variableTipo)}`); // object

//caso especial un date es un objeto
variableTipo = new Date();

console.log(`typeof(${variableTipo}): ${consultaTipo(variableTipo)}`); // object

//typeof function
let h = typeof function(){};
console.log(`typeof(funcion): ${h}`); // function

//veamos un ejemplo de utilidad
let datoQueVieneDelBackend = 5;
if (typeof datoQueVieneDelBackend === "string"){
    console.log("Lo que viene del backend es un string")
}else{
    console.log("Epa!Lo que viene del backend no es un string")
}