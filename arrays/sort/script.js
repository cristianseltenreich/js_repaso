// ordenando cadenas
let certificaciones = ["CPTE", "CEH", "JS", "CSWAE"];
let certSort = certificaciones.sort();
console.log(`certificaciones ordenadas con sort ${certSort}\n`);

// ordenando numbers --también funcionan este método para fechas----
//sort((a, b) => a - b) ******esta es la manera de ordenar valores numéricos*****
let numeros = [2, 1, 5, 3, 4];
let numerosOrdenados = numeros.sort((a, b) => a - b);
console.log(`numeros ordenados con sort ${numerosOrdenados}\n`);

// ordenando objetos

let auto = [
    { marca: "Ford", modelo: "Mustang", año: 2015 },
    { marca: "Chevrolet", modelo: "Corvette", año: 2018 },
    { marca: "Toyota", modelo: "Camry", año: 2019 }
];

let autoOrdenados = auto.sort((a, b) => a.año - b.año);

console.log(autoOrdenados);
console.log(`autos ordenados por año con sort, usando map y uniendo con join para mostrar el console.log: ${autoOrdenados.map(item => item.marca + " " + item.modelo).join(", ")}\n`);


let autoOrdenadosInversamente = auto.sort((a, b) => b.año - a.año);

console.log(`autos ordenados inversamente por año con sort, usando map y uniendo con join para mostrar el console.log: ${autoOrdenados.map(item => item.marca + " " + item.modelo).join(", ")}\n`);

