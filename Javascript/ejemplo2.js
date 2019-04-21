function Profesor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

const profesor1 = new Profesor('marcos', 44);
console.log(profesor1.nombre);
profesor1.nombre = 'marcos javier';
console.log(profesor1.nombre);
Profesor.prototype.soyElProfe = function () {
    console.log("Soy el profe " + this.nombre);
}



profesor1.soyElProfe();


profesor1.cumpleanos();
