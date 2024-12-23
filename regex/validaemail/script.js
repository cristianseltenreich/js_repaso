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
let email = document.getElementById('email').value;
let result;
let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let resultadoValidar = document.getElementById("resultadoValidar");

document.getElementById('email').addEventListener('input', function() {
    email = this.value;
    result = validaEmail(email);
    if (result) {
        this.style.borderColor = 'green';
    } else {
        this.style.borderColor = 'red';
    }
});

function botonValidarEmail() {
    if (result) {
        resultadoValidar.textContent = 'Email válido';
    } else {
        resultadoValidar.textContent = 'Email inválido';
    }
}
