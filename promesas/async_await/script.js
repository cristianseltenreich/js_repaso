//async y await se utilizan para
//trabajar con promesas de una manera más sencilla
//async indica que una función regresa una promesa  
//await indica que una promesa será regresada
//y que la función debe esperar a que esta se resuelva
//para continuar
//veamos un ejemplo

//creamos una función asíncrona que regresa una promesa
async function promesa0() {
    try {
        let resp = await new Promise((resolve, reject) => {
            setTimeout(() => {
                let exito = true; // Cambiar a false para que la promesa falle
                if (exito) {
                    resolve({
                        response: 200,
                        descripcion: '00 Petición exitosa 1000'
                    });
                } else {
                    reject('Error en la petición');
                }
            }, 1000);
        });
        return resp;
    } catch (error) {
        console.log('Promesa0 rechazada:', error);
        throw error;
    }
}

async function promesa01() {
    try {
        let resp = await new Promise((resolve, reject) => {
            setTimeout(() => {
                let exito = false; // Cambiar a true para que la promesa se resuelva
                if (exito) {
                    resolve({
                        response: 400,
                        descripcion: '01 Otra petición exitosa 2000'
                    });
                } else {
                    reject('Error en la petición');
                }
            }, 2000);
        });
        return resp;
    } catch (error) {
        console.log('Promesa01 rechazada:', error);
        throw error;
    }
}

async function promesa02() {
    try {
        let resp = await new Promise((resolve, reject) => {
            setTimeout(() => {
                let exito = true; // Cambiar a false para que la promesa falle
                if (exito) {
                    resolve({
                        response: 200,
                        descripcion: '02 Otra petición exitosa 500'
                    });
                } else {
                    reject('Error en la petición');
                }
            }, 500);
        });
        return resp;
    } catch (error) {
        console.log('Promesa02 rechazada:', error);
        throw error;
    }
}

// Llamamos a la función promesa con await
// Esto nos permite esperar a que la promesa se resuelva
// para continuar con la ejecución
async function llamada() {
    try {
        let res = await promesa0();
        console.log(res.descripcion);
    } catch (error) {
        console.log('Error en promesa0:', error);
    }

    try {
        let res0 = await promesa01();
        console.log(res0.descripcion);
    } catch (error) {
        console.log('Error en promesa01:', error);
    }

    try {
        let res01 = await promesa02();
        console.log(res01.descripcion);
    } catch (error) {
        console.log('Error en promesa02:', error);
    }
}

llamada();