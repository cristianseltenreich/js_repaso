//for in se usa para recorrer objetos

let persona = {
    nombre: "José",
    apellido: "Perez",
    edad: 30,
    lenguajes: ["html", "CSS", "JS"]
}

for (let clave in persona) {
    console.log(persona[clave]) 
}