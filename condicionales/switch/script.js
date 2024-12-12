let estilo = "reggae";

switch (estilo) {
    case "punk":
        console.log("Te recomiendo Los Ramones");
        break;
    case "rock":
        console.log("Te recomiendo Led Zeppelin");
        break;
    case "metal":
        console.log("Te recomiendo Metallica");
        break;
    case "folk":
        console.log("Te recomiendo Elton John");
        break;
    case "hip-hop":
        console.log("Te recomiendo Vanila Ice");
        break;
    case "pop":
        console.log("Te recomiendo The Beatles");
    case "jazz":
        console.log("Te recomiendo Bee Gees");
        break;
    case "blues":
        console.log("Te recomiendo Menphis");
        break;
    case "country":
        console.log("Te recomiendo The Who");
        break;
    case "classical":
        console.log("Te recomiendo Mozart");
        break;
    case "disco":
        console.log("Te recomiendo Aerosmith");
        break;
    case "reggae":
        console.log("Te recomiendo Los Pericos");
        break;

    default:
        console.log("Estilo de música no reconocido");  //Si no coincide con ninguno de los casos anteriores, se ejecuta este bloque.
        break;
}