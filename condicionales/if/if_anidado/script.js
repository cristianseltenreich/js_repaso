//if anidado
let edad = 8;
let nacionalidad = "argentino";
let pasaporte = true;

if (edad >=18) {
    console.log("Eres mayor de edad aprobado trámite 1");
    if (nacionalidad == "argentino") {
        console.log("Eres argentino aprobado trámite 2");
        if (pasaporte) {
            console.log("Tienes pasaporte. Puedes entrar al país");
        } else {
            console.log("Debes tener un pasaporte para entrar al país");
        }
    } else {
        console.log("No puedes entrar al país porque no eres argentino");
    }
}else{
    console.log(`Tienes ${edad}. No eres mayor de edad para entrar al país. Vuelve con tu mami.`);
}
