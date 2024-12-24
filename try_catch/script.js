try {
    // En el try se agrega el código a evaluar
    console.log('En el try se agrega el código a evaluar');    
    noExiste; // Esto generará un error porque noExiste no está definido
    //se corta la ejecución del código en cuanto se encuentra un error
    //por lo que el segundo mensaje no se mostrará
    //se pasará el control al bloque catch
    console.log('Segundo mensaje en el try');
} catch (error) {//se ejecuta si hay un error en el try
    // Catch captura cualquier error surgido en el try
    console.log('Catch captura cualquier error surgido en el try');
    console.log(error.message); // Mostrar solo el mensaje del error
} finally {
    // El bloque finally se ejecutará siempre al final de un bloque try catch
    console.log('El bloque finally se ejecutará siempre al final de un bloque try catch');
}