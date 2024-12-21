//importo de ciudades
import {barcelona, roma, paris, londres } from './ciudades.js';

//obtener los documentos del DOM (los enlaces)
let enlaces = document.querySelectorAll("a");

let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
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