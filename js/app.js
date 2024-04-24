'use strict';

function bienvenida() {
    let user = prompt("Hola! ¿Cuál es tu nombre?");
    alert("Hola "+user+"\nJuguemos algo: Te haré 5 preguntas sobre mí y veamos cuántas aciertas")  
};

function random(min, max) {
    return Math.floor((Match.random()*(max-min+1))+min)
}

function verificar(lista,rpta){
    for(let i = 0; i<lista.lenght; i++){
        if(rpta == lista[i]){
            return true;
        }
        return false;
    }
}

const preguntas=["¿Actualmente tengo 23 años? (Y/N)",
"Soy hincha de Universitario de Deportes (Y/N)",
"Actualmente entre y compito en fútbol (Y/N)",
"Soy orgullosamente arequipeño (Y/N)",
"Como ultima pregunta...\n¿Estudié ingeniería de sistemas? (Y/N)"];

const respuestas=["Y","N","N","Y","Y"];

function cuestionario(preg, rpta){
    let score = 0;
    for(let i = 0; i < 5; i++) {
        let pregunta = preg[i];
        let solucion = rpta[i];
        let rptaUsuario = prompt(pregunta);
        if(rptaUsuario.toLowerCase() === solucion){
            alert("CORRECTO");
            score++;
        } else {
            alert("INCORRECTO");
        }
        }
    alert("Tu score es: "+score);
    pregunta6();
    pregunta7();
}

function pregunta6() {
    let pregunta_6 = prompt("Del 1 al 10, ¿cuál crees que es el número que estoy pensando?");
    let nro = random(1, 9)
    for (let i = 0; i <4; i++) {
        if(pregunta_7=nro) {
            alert("CORRECTO!!! El tres es mi numero favorito!!!");
            break;
        } else if (pregunta_7<nro){
            alert("Intenta con un número mayor")
        } else {
            alert("Prueba con un número menor")
        }
    }
    alert("Haz acertado "+cont+" preguntas!")
    }

    function pregunta7(){
    let misMascotas = ["Ariel","Lola","Skipy","Chester"];
    for(let i=1;i<=6;i++) { 
        alert ("Hasta la actualidad he tenido 4 perritos, adivina el nombre de uno de ellos(as) --- (Tienes 6 intentos");
        pregunta_7 = prompt("Intento "+i+"...");
        if (verificar(misMascotas,pregunta_7)){
            alert("Correcto! Acertaste el nombre de uno de mis perritos(as)")
            break;
        }
    }
    if (verificar(misMascotas,pregunta_7)==false){
        alert("Te has quedado sin intentos")
    }
}

bienvenida();
cuestionario(preguntas,respuestas);