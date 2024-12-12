
//uso de find
let personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Maria", edad: 30 },
    { nombre: "Pedro", edad: 20 },
    { nombre: "Ana", edad: 28 }
];

//busca la primera persona con edad mayor a 25
let mayorEdad = personas.find(persona => persona.edad > 25);
console.log(mayorEdad); // { nombre: "Maria", edad: 30 }

let city = ["Reciife", "Porto Seguro", "Maragogi"];

//busca la primera ciudad que comience con la letra 'P'

let ciudadPortuguesa = city.find(c => c.startsWith('P'));
console.log(ciudadPortuguesa); // Porto Seguro

//busco la primera ciudad que se llame Maragogi
let buscaCiudad = city.find(x => x == "Maragogi" );
console.log(buscaCiudad);
