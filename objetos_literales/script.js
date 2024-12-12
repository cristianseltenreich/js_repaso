let vendedor1 ={
    nombre: 'Juan',
    apellido: 'Pérez',
    ventas: 5,
    skills: ["puntual", "pedante", "aburrido"],
    nombreCompleto : function() {
        return this.nombre + " " + this.apellido
    }
};

console.log(vendedor1.nombreCompleto());
console.log(vendedor1.skills);