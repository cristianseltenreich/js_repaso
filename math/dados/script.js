//emular resultado lanzqmiento 6 dados

// Generar un número aleatorio entre 1 y 6
for (let i = 0; i < 5; i++) { // Cambiar 'i > 5' a 'i < 5'
    let numeroAleatorio = Math.floor(Math.random() * 5) + 1; // Generar nuevo número aleatorio para cada tiro
    console.log(`Dado ${i + 1}: ${numeroAleatorio}`);
}