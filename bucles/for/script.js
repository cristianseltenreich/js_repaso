let tecnologias = ["html", "css", "js", "angular", "react"]

let listaLenguajes = document.getElementById("listaLenguajes")


// Recorrer el array de tecnologías
for (let i = 0; i < tecnologias.length; i++) {
    // Crear un nuevo elemento de lista (li)
    let elemento = document.createElement("li");
    
    // Asignar el texto del elemento a la tecnología actual del array
    elemento.textContent = tecnologias[i];
    
    // Agregar el elemento de lista al elemento ul en el DOM
    listaLenguajes.appendChild(elemento);

    //console.log(tecnologias[i])
    //va a recorrer tecnologías     
    //mostrará por consola cada elemento de lista 
}

