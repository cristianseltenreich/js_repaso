// el formato 1971-01-03T00:00:00Z sigue el estándar ISO 8601
// es ampliamente utilizado para representar fechas y horas
// en un formato claro, consistente y basado en UTC (Tiempo Universal Coordinado).

// Compatibilidad Global: Es reconocido y utilizado por múltiples sistemas, API,
// bases de datos y lenguajes de programación
// Representación Precisa:
// Fecha completa: 1971-01-03 (Año-Mes-Día).
// Hora exacta: 00:00:00 (Hora-Minuto-Segundo en formato de 24 horas).
// Zona horaria: Z (Indica UTC directamente; el equivalente sería un desplazamiento de +00:00)
const fecha = new Date("2016-11-27T00:00:00Z");//le paso fecha formato UTC

//seteando el año (lo cambio)
// fecha.setUTCFullYear(2025);
//esto va a cambiar la fecha completa, no solo el año

// Obtener los componentes en UTC
const anio = fecha.getUTCFullYear();
const mes = fecha.getUTCMonth(); // Devuelve el índice del mes (0 = enero)
const dia = fecha.getUTCDate();
const diaSemana = fecha.getUTCDay(); // Índice del día de la semana (0 = domingo)

// Arrays para nombres de meses y días
const meses = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

// Construir el texto formateado
const mesTexto = meses[mes];
const diaSemanaTexto = diasSemana[diaSemana];

let resultado = (`La fecha obtenida es ${diaSemanaTexto}, ${dia} ${mesTexto} ${anio}`);

console.log(resultado);

//seteando fechas con setUTC*
let fechaCumple = new Date(Date.UTC)
fechaCumple.setUTCFullYear(2025);
fechaCumple.setUTCMonth(0); // Enero (mes 0)
fechaCumple.setUTCDate(3);  // Día 3

// Obtener los componentes en UTC getUTC*
const anioCumple = fechaCumple.getUTCFullYear();
const mesCumple = fechaCumple.getUTCMonth(); // Devuelve el índice del mes (0 = enero)
const diaCumple = fechaCumple.getUTCDate();
const diaSemanaCumple = fechaCumple.getUTCDay(); // ��ndice del día de la semana (0 = domingo)


// Construir el texto formateado para fecha cumple
const mesTextoCumple = meses[mesCumple];
const diaSemanaTextoCumple = diasSemana[diaSemanaCumple];

console.log(fechaCumple)
let resultadoCumple = (`La fecha del cumpleaños es ${diaSemanaTextoCumple}, ${diaCumple} ${mesTextoCumple} ${anioCumple}`);

console.log(resultadoCumple);




// otros fomatos de la fecha
// short sería 01/03/1971
// long ene 01 1971






