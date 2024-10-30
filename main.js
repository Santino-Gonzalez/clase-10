//VARIABLES
let secuencia = [];
let secuenciaUsuario = [];
let puntuacion = 0;
let mostrando;

const colores = document.querySelectorAll(".col");
const sonido1 = new Audio("sonidos/1.mp3");
const sonido2 = new Audio("sonidos/2.mp3");
const sonido3 = new Audio("sonidos/3.mp3");
const sonido4 = new Audio("sonidos/4.mp3");

//FUNCION RESALTAR

function resaltarColor(color) {
    mostrando = true;
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
        mostrando = false;
    }, 250);
}

//FUNCION GENERAR Y MOSTRAR SECUENCIA

function generarMostrarSecuencia() {
    bloquearUsuario();
    const color = Math.floor(Math.random() * colores.length);
    secuencia.push(colores[color]);

    secuencia.forEach((color, i) => {
        let delay = (i + 1) * 500;

        setTimeout(() => {
            resaltarColor(color);
        }, delay);
    });
    
    setTimeout(() => {
        verificarSecuencia();
    }, secuencia.length * 500);
}

//FUNCION TURNO DEL JUGADOR

function verificarSecuencia() {
    colores.forEach(color => {
        color.onclick = (e) => {
            let colorUsuario = e.target;
            resaltarColor(colorUsuario);

            secuenciaUsuario.push(e.target);
            let colorSecuencia = secuencia[secuenciaUsuario.length - 1];

            if (e.target != colorSecuencia) {
                bloquearUsuario();
                alert("Perdiste!")
            }else if (secuenciaUsuario.length == secuencia.length) {
                setTimeout(() => {
                    pasarRonda();
                }, 300);
            }
        }
    });
}

function bloquearUsuario() {
    colores.forEach(color => {
        color.onclick = () => { }
    });
}

//CAMBIAR RONDAS

function pasarRonda() {
    secuenciaUsuario = [];
    generarMostrarSecuencia();
    puntuacion++;
    document.querySelector("#score").innerHTML = "Score: " + puntuacion;
}

//INICIA EL JUEGO
document.querySelector("#empezar").onclick = () => {
    generarMostrarSecuencia();
    document.querySelector("#empezar").disabled = true;
}

//RESETEA EL JUEGO
function reset() {
    bloquearUsuario();
    secuencia = [];
    secuenciaUsuario = [];
    puntuacion = 0;
    document.querySelector("#score").innerHTML = "Score: " + puntuacion;
}

document.querySelector("#resetear").onclick = () => {
    reset();
    document.querySelector("#empezar").disabled = false;
}
