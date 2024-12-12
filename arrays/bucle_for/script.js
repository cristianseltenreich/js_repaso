let lenguajes = ["HTML", "CSS", "JS", "Python"];

let texto = "";
for (let index=0; index<lenguajes.length; index++){
    texto += "<li>"+ lenguajes[index]+ "</li>";    
}
document.getElementById("listaLenguajes").innerHTML = texto;