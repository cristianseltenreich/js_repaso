//promesas
//las promesas son valores que aun no conocemos
//una promesa es un objeto que representa 
//la terminación o el fracaso de una operación asíncrona
//y su valor resultante
//una promesa es un objeto que puede estar en uno de tres estados
//pendiente, resuelta o rechazada
//una promesa se crea con el constructor Promise 
//y toma una función como argumento
//esta función toma dos argumentos, resolve y reject

//veamos un ejemplo
//creamos una promesa que se resuelve después de un segundo
//con la posibilidad de que falle
let promesa = new Promise((resolve, reject) => {        
    setTimeout(() => {
        let exito = false; // Cambiar a true para que la promesa se resuelva
        if (exito) {
            let resp = {
                response : 200,
                descripcion : 'Petición exitosa'
            }        
            resolve(resp);
        } else {
            reject('Error en la petición');
        }
    }     
    , 1000);
});

//una vez que la promesa se resuelve o se rechaza
//podemos acceder a su valor con el método then
//y podemos manejar un error con el método catch

promesa.then(res => {
    console.log(res.descripcion)
}).catch((error) => {
    console.warn(error)    
});
