//En JavaScript, especialmente en el entorno de Node.js, puedes 
//interactuar con el sistema de archivos utilizando el módulo fs (file system). 
//Este módulo proporciona una API para trabajar con archivos y directorios, 
//permitiendo leer, escribir, eliminar y manipular archivos en el sistema.


//leer test.txt e imprimir su contenido

//fs es un módulo incorporado en Node.js que proporciona 
// una API para interactuar con el sistema de archivos.

//Para utilizar el módulo fs, primero debes requerirlo -importarlo- en tu script.
var fs = require('fs');

//fs.readFile() es una función que lee un archivo de forma asíncrona.
fs.readFile('test.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
}   );  //leer test.txt e imprimir su contenido




