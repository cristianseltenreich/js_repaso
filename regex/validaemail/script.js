//aplicacion de práctica para validar email con regex
//validar email

// Path: regex/validaemail/index.html
// Compare this snippet from regex/index.html:
let email = document.getElementById('email').value; //obtener valor del input
let result;
let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //expresión regular para validar email
let resultadoValidar = document.getElementById("resultadoValidar"); //obtener elemento para mostrar resultado

//funcion para validar email
function validaEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }


//valida email en tiempo real cambiando el color del borde del input
document.getElementById('email').addEventListener('input', function() {
    email = this.value;
    result = validaEmail(email);
    if (result) {
        this.style.borderColor = 'green';
    } else {
        this.style.borderColor = 'red';
    }
});

//boton para validar email
function botonValidarEmail() {
    if (result) {
        resultadoValidar.textContent = 'Email válido';
    } else {
        resultadoValidar.textContent = 'Email inválido';
    }
}
