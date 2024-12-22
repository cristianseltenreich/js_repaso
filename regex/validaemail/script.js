//crear funcion para validar email con regex
//regex
//validar email
//funcion para validar email
function validaEmail(email) {
  var regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}
// Path: regex/validaemail/index.html
// Compare this snippet from regex/index.html:

let result = document.getElementById('resultado');
let email = document.getElementById('email');
let boton = document.getElementById('button');

document.getElementById('email').addEventListener('input', function() {
    email = this.value;
    result = validaEmail(email);
    if (result) {
        this.style.borderColor = 'green';
    } else {
        this.style.borderColor = 'red';
    }
    boton.onclick = function() {
        let result = validarEmail(input.value); // Asumiendo que tienes una función validarEmail
        let mensaje = result ? 'Email válido' : 'Email inválido';
        let pElemento = document.getElementById('resultado'); // Asumiendo que tienes un <p> con id="resultado"
        pElemento.textContent = mensaje;
    }
});

function validarEmail() {
    var email = document.getElementById('email').value;
    var resultado = document.getElementById('resultado');
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        resultado.textContent = 'Email válido';
    } else {
        resultado.textContent = 'Email inválido';
    }
}
