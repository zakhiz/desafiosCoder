const fondo = document.getElementById("inputColores");
inputColores.addEventListener("input",()=>{
    document.body.style.backgroundColor = inputColores.value;
});

class Empleado{
    constructor(nombre, apellido, sueldo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.sueldo = sueldo;
    }
}
const persona = [];
const empleado = document.getElementById("formPersonal");
 
    empleado.addEventListener("submit",(crear)=>{
        crear.preventDefault();
        let nombre =  document.getElementById("nombre").value
        let apellido = document.getElementById("apellido").value
        let sueldo = document.getElementById("sueldo").value
        const trabajadores = new Empleado(nombre, apellido, sueldo);
        persona.push(trabajadores);
        console.table(persona);
        formPersonal.reset();
    })