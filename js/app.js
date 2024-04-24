'use strict';

const preguntas=["¿Actualmente tengo 23 años? (Y/N)",
"Soy hincha de Universitario de Deportes (Y/N)",
"Actualmente entre y compito en fútbol (Y/N)",
"Soy orgullosamente arequipeño (Y/N)",
"Como ultima pregunta...\n¿Estudié ingeniería de sistemas? (Y/N)"];

const respuestas=["Y","N","N","Y","Y"];

function bienvenida() {
    let user = prompt("Hola! ¿Cuál es tu nombre?");
    alert("Hola "+user+"\nJuguemos algo: Te haré 5 preguntas sobre mí y veamos cuántas aciertas")  
};

function random(max) {
    return Math.floor(Math.random() * max);
}

function pregunta6() {
    let pregunta_6 = prompt("Del 0 al 10, ¿cuál crees que es el número que estoy pensando?");
    let nro = random(10);
    console.log(nro);
    for (let i = 0; i <4; i++) {
        if(pregunta_6 == nro) {
            alert("CORRECTO!!!");
            break;
        } else if (pregunta_6<nro){
            alert("Intenta con un número mayor")
            pregunta_6 = prompt("Del 0 al 10, ¿cuál crees que es el número que estoy pensando?");
        } else {
            alert("Prueba con un número menor")
            pregunta_6 = prompt("Del 0 al 10, ¿cuál crees que es el número que estoy pensando?");
        }
    }
}

function cuestionario(preg, rpta){
    let score = 0;
    for(let i = 0; i < 5; i++) {
        let pregunta = preg[i];
        let solucion = rpta[i];
        let rptaUsuario = prompt(pregunta);
        if(rptaUsuario.toUpperCase() === solucion){
            alert("CORRECTO");
            score++;
        } else {
            alert("INCORRECTO");
        }
        }
    alert("Tu score es: "+score);
    pregunta6();
}

bienvenida();
cuestionario(preguntas,respuestas);