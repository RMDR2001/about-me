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

function preguntas() {
    let cont = 0;
    alert("Recuerda que para responder tienes que escribir y/n");
    let pregunta_1 = prompt("¿Actualmente tengo 23 años? (Y/N)");
    if (pregunta_1.toUpperCase() === "Y") {
        // console.log("CORRECTO!!!... Nací un 09 de marzo del 2001, por ende, tengo 23 años");
        alert("CORRECTO!!!\nNací un 09 de marzo del 2001, por ende, tengo 23 años");
        cont+=1;
    } else {
        // console.log("###ERROR###... Nací un 09 de marzo del 2001, por ende, tengo 23 años");
        alert("###ERROR###\nNací un 09 de marzo del 2001, por ende, tengo 23 años");
    }

    let pregunta_2 = prompt("Soy hincha de Universitario de Deportes (Y/N)");
    if (pregunta_2.toUpperCase() === "Y") {
        // console.log("###ERROR###... Tengo corazón blanquiazul, nací aliancista 💙🤍💙");
        alert("###ERROR###\nTengo corazón blanquiazul, nací aliancista 💙🤍💙");
    } else {
        // console.log("CORRECTO!!!... Soy hincha de Alianza Lima desde que nací 💙🤍💙");
        alert("CORRECTO!!!\nSoy hincha de Alianza Lima desde que nací 💙🤍💙");
        cont+=1;
    }

    let pregunta_3 = prompt("Actualmente entre y compito en fútbol (Y/N)");
    if (pregunta_3.toUpperCase() === "Y") {
        // console.log("###ERROR###... entre y compito en tenis de campo");
        alert("###ERROR###\nAunque me guste ver mucho el futbol y soy hincha de Alianza Lima, yo prefiero jugar y competir en Tenis de Campo 🎾");
    } else {
        // console.log("CORRECTO!!!... Llevo entrenando Tenis de Campo 8 años");
        alert("CORRECTO!!!\nEntreno Tenis de Campo, y lo llevo haciendo ya 8 años!")
        cont+=1;
    }

    let pregunta_4 = prompt("Soy orgullosamente arequipeño (Y/N)");
    if (pregunta_4.toUpperCase() === "Y") {
        //console.log("CORRECTO!!!... como dice el dicho ''No en vano se nace al pie de un volcán''");
        alert("CORRECTO!!!\nSoy un orgulloso Arequipeño, pues como dice el dicho ''No en vano se nace al pie de un volcán''");
        cont+=1;
    } else {
        //console.log("###ERROR###... Yo nací Arequipa!");
        alert("###ERROR###\nYo nací en Arequipa!");
    }

    let pregunta_5 = prompt("Como ultima pregunta...\n¿Estudié ingeniería de sistemas? (Y/N)");
    if (pregunta_5.toUpperCase() === "Y") {
        //console.log("CORRECTO!!!... como dice el dicho ''No en vano se nace al pie de un volcán''");
        alert("CORRECTO!!!\nEstudié desde el 2018 y saqué mi bachiller en 2023");
        cont+=1;
    } else {
        //console.log("###ERROR###... Yo nací Arequipa!");
        alert("###ERROR###\nEstudié desde el 2018 y saqué mi bachiller en 2023");
    }

    let pregunta_6 = prompt("Del 1 al 10, ¿cuál crees que es el número que estoy pensando?");
    let nro = random(1, 9)
    for (let i = 0; i <4; i++) {
        if(pregunta_7=nro) {
            alert("CORRECTO!!! El tres es mi numero favorito!!!");
            cont+=1;
            break;
        } else if (pregunta_7<nro){
            alert("Intenta con un número mayor")
        } else {
            alert("Prueba con un número menor")
        }
    }
    alert("Haz acertado "+cont+" preguntas!")

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

function preguntasDRY(){
    let cuestionario= 
    [["¿Actualmente tengo 23 años? (Y/N)","Y"]
    ,["Soy hincha de Universitario de Deportes (Y/N)","N"]
    ,["Actualmente entre y compito en fútbol (Y/N)","N"]
    ,["Soy orgullosamente arequipeño (Y/N)","Y"]
    ,["¿Estudié ingeniería de sistemas? (Y/N)","Y"]];
}

bienvenida();
preguntas();
