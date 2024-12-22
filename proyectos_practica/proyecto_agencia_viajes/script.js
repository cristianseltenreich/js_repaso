//importo de ciudades
import {barcelona, roma, paris, londres } from './ciudades.js';

//obtener los documentos del DOM (los enlaces)
let enlaces = document.querySelectorAll("a");

let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
let imagenElemento = document.getElementById("imagen")
let subtituloPrecio = document.getElementById("precio")
let botonComprar = document.getElementById("comprar")
let parrafoElemento = document.getElementById("parrafo");

//console.log(enlaces);

//agregamos evento click a los enlaces
enlaces.forEach(function (enlace){
    enlace.addEventListener("click", function(){
        //vamos a remover la clase activo del enlace 
        // esta clase css es la que hace que se vea seleccionado en otro color
        enlaces.forEach(function(enlace){
            enlace.classList.remove("active");            
        });
     
    //agregar estado activo a la clase del enlace seleccionado
    this.classList.add("active");

    //obtener el contenido correspondiente segun enlace seleccionado
    let contenido = obtenerContenido(this.textContent);

    //mostrar el contenido en el dom
    tituloElemento.innerHTML = contenido.titulo
    subtituloElemento.innerHTML = contenido.subtitulo
    imagenElemento.src = contenido.imagen;  //mostrar la imagen de la ciudad seleccionada en el DOM  (se puede usar innerHTML o textContent)  //textContent es más seguro ya que evita la inyección de scripts en el DOM
    subtituloPrecio.innerHTML = contenido.precio;  //mostrar el precio de la ciudad seleccionada en el subtítulo precio en el DOM  (se puede usar innerHTML otextContent)  //textContent es más seguro ya que evita la inyección de scripts en el DOM  //innerHtml puede causar problemas si el contenido tiene etiquetas html, por lo que se recomienda usar textContent en este caso
    botonComprar.style.display = "block"; // Mostrar el botón
    parrafoElemento.innerHTML = contenido.parrafo;
    })
});

//función para mostrar el contenido de la ciudad seleccionada
//desde ciudades.js
function obtenerContenido (enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Londres' : londres,
        'París' : paris,
        'Roma' : roma
    };
    return contenido[enlace];
}