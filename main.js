//VARIABLES
let secuencia = [];
let secuenciaUsuario = [];

const colores = document.querySelectorAll(".col");
const sonido1 = new Audio("sonidos/1.mp3");
const sonido2 = new Audio("sonidos/2.mp3");
const sonido3 = new Audio("sonidos/3.mp3");
const sonido4 = new Audio("sonidos/4.mp3");

//FUNCION RESALTAR

function resaltarColor(color) {
    color.style.opacity = "100%";
    if (color.id === "verde") {
        sonido1.play();
    }
    if (color.id === "rojo") {
        sonido2.play();
    }
    if (color.id === "amarillo") {
        sonido3.play();
    }
    if (color.id === "azul") {
        sonido4.play();
    }
    setTimeout(() => {
        color.style.opacity = "25%";
    }, 250);
}

//FUNCION GENERAR Y MOSTRAR SECUENCIA

function generarMostrarSecuencia() {
    secuenciaUsuario = [];
    const color = Math.floor(Math.random() * colores.length);
    secuencia.push(colores[color]);

    secuencia.forEach((color, i) => {
        let delay = (i + 1) * 500;

        setTimeout(() => {
            resaltarColor(color);
        }, delay);
    });
}

//FUNCION TURNO DEL JUGADOR

function verificarSecuencia() {
    colores.forEach(color => {
        color.onclick = (e) => {
            let colorUsuario = e.target;
            resaltarColor(colorUsuario);
            
            secuenciaUsuario.push(e.target);
            let colorSecuencia = secuencia[secuenciaUsuario.length - 1];

            if(e.target != colorSecuencia){
                alert("¡Error! La secuencia es incorrecta.");
            }
        }
    });
}

//FUNCION COMPROBAR SECUENCIA

//INICIA EL JUEGO
document.querySelector("#empezar").onclick = () => {

}

//RESETEA EL JUEGO
document.querySelector("#resetear").onclick = () => {

}
