//generamos número al azar entre 1 y 100
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

//obtenemos el numero ingresado por el usuario
let numeroIngresado = document.getElementById('numeroEntrada');

//asignamos el elemento del documento con id "mensaje"
//para poder utilizarlo mostrando mensajes
let mensaje = document.getElementById('mensaje');

let intentos = document.getElementById('intentos');

//esta acción se va a ejecutar cuando se haga click
//en el botón Comprobar
function chequeoResultado() {
    let numero = parseInt(numeroIngresado.value);

    //si el número ingresado es menor que el número aleatorio
    if (numero < 1 || numero > 100 || isNaN(numero)) {
        mensaje.textContent = 'Por favor introducí un número válido';
        mensaje.style.color = "red";
        return; //salimos de la función para evitar que se ejecute el resto del código
    } 
    //si el número ingresado es igual que el número aleatorio
    if (numero == numeroAleatorio) {
        mensaje.textContent = 'Felicitaciones! Adivinaste el número';
        mensaje.style.color = "green";
        numeroIngresado.disabled = true; //desactivamos el input para evitar que el usuario pueda ingresar un nuevo número
    } 
    //si el número ingresado es más alto que el número aleatorio
    else if (numero > numeroAleatorio){
        mensaje.textContent = 'El número ingresado es más alto que el número aleatorio. Probá con uno más bajo!';
        mensaje.style.color = "red";        
    }else {
        mensaje.textContent = 'El número ingresado es más bajo que el número aleatorio. Probá con uno más alto!';
        mensaje.style.color = "red";        
    }    
    intentos.textContent = `$x|{parseInt(intentos.textContent) + 1}`;
}