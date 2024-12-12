//agregar a pantalla el valor del botón presionado
function agregar(valor) {
    document.getElementById("pantalla").value += valor;
    };

//borrar la pantalla
function borrar(valor) {
    document.getElementById("pantalla").value = "";
    };

function calcular() {
    //obtener valor de la pantalla 
    const valorPantalla = document.getElementById("pantalla").value;

    try {
        const resultado = eval(valorPantalla); //evaluar valor de la pantalla
        document.getElementById("pantalla").value = resultado; //mostrar resultado en pantalla
        } catch(error) {
            document.getElementById("pantalla").value = "error";//mostrar error en pantalla
            //manejo de errores
        }
    };


    