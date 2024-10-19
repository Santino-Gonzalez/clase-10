//VARIABLES
let secuencia = [];
const colores = document.querySelectorAll(".col");

//FUNCION GENERAR Y MOSTRAR SECUENCIA

function generarMostrarSecuencia(){
    const color = Math.floor(Math.random() * colores.length);
    secuencia.push(colores[color]);
}

//FUNCION TURNO DEL JUGADOR

//FUNCION COMPROBAR SECUENCIA

//INICIA EL JUEGO
document.querySelector("#empezar").onclick = () => {
    
}

//RESETEA EL JUEGO
document.querySelector("#resetear").onclick = () => {

}
