edad = 0;
do{
    {
        console.log(`Tenés ${edad}`)
        edad++;
        if (edad == 60) break //con break puedo cortar el bucle 
        //obligando a que salga del script después de un número 
        // específico de iteraciones
    }
    
}while (edad < 70);

console.log(`Ya te jubilás, no trabajes más, cumpliste ${edad}!`)