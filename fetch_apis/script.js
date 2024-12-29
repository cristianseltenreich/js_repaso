let urlBase = 'https://jsonplaceholder.typicode.com';
let query = 'posts/2';


//get - aunque no lo diga por default el fetch hace un get
//get: se usa para pedir información

//fetch es una promesa que se resuelve con una 
// respuesta (response) que se convierte a JSON
// y se imprime en consola
fetch(`${urlBase}/${query}`)
    .then(response => response.json())
    .then(json => console.log(json));    


//post

let queryPost = 'posts';//ruta para post

//datos que se enviarán
//objeto con los datos que se enviarán
//los datos que se enviarán se deben enviar en formato JSON
//deben coincidir con los datos que se piden en la API
let requestBodyPost = {
    title: 'foo',
    body: 'bar',
    userId: 1
};

//post: se usa para enviar información
fetch(`${urlBase}/${queryPost}`, {//ruta y query
    method: 'POST',//método post
    body: JSON.stringify(requestBodyPost),//datos que se enviarán en formato JSON y se convierten a string
    headers: {//cabeceras que se envían en la petición para que el servidor sepa que se envía un JSON
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then(response => response.json()) //se convierte la respuesta a JSON
    .then(json => console.log(json)); //se imprime en consola la respuesta


//put - se usa para actualizar información
//datos que se enviarán
let numPosteoPut = 1;//nro del posteo a actualizar
let queryPut = `posts/${numPosteoPut}`//ruta para put
//objeto con los datos que se enviarán
//los datos que se enviarán se deben enviar en formato JSON
//deben coincidir con los datos que se piden en la API
let requestBodyPut = {
    id: 100,
    title: 'cuco',
    body: 'barrita',
    userId: 1
};
fetch(`${urlBase}/${queryPut}`, {//ruta y query
    method: 'PUT',//método post
    body: JSON.stringify(requestBodyPut),//datos que se enviarán en formato JSON y se convierten a string
    headers: {//cabeceras que se envían en la petición para que el servidor sepa que se envía un JSON
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then(response => response.json()) //se convierte la respuesta a JSON
    .then(json => console.log(json)); //se imprime en consola la respuesta

//patch - se usa para actualizar información
//se diferencia de put en que patch se usa para actualizar una parte de la información
//datos que se enviarán
let numPosteoPatch = 1;//nro del posteo a actualizar
let queryPatch = `posts/${numPosteoPatch}`;//ruta para patch
//objeto con los datos que se enviarán
//los datos que se enviarán se deben enviar en formato JSON
//deben coincidir con los datos que se piden en la API
let requestBodyPatch = {
    title: 'cucaracha',
};
fetch(`${urlBase}/${queryPatch}`, {//ruta y query
    method: 'PATCH',//método post
    body: JSON.stringify(requestBodyPatch),//datos que se enviarán en formato JSON y se convierten a string
    headers: {//cabeceras que se envían en la petición para que el servidor sepa que se envía un JSON
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then(response => response.json()) //se convierte la respuesta a JSON
    .then(json => console.log(json)); //se imprime en consola la respuesta


//delete - se usa para eliminar información