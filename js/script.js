let maquina;
let maquinaLegible;
let vuelta = 0;
let puntajeMaquina =0;
let puntajeJugador = 0;
while(vuelta < 3){
    maquina=Math.random();
    if (maquina > 0 || maquina < 0.33){
        maquinaLegible = "piedra";
    } else if (maquina >= 0.33 || maquina < 0.66){
        maquinaLegible = "papel"
    } else {
        maquinaLegible = "tijera"
    }
    let seleccion = prompt('ingresa "piedra", "papel" o "tijera":')

    if (seleccion === "piedra" && maquinaLegible === "piedra"){
        puntajeJugador++;
        puntajeMaquina++;
    } else if(seleccion === "piedra" && maquinaLegible === "papel"){
        puntajeMaquina++;
    }else if(seleccion === "piedra" && maquinaLegible === "tijera"){
        puntajeJugador++;
    }
    if (seleccion === "papel" && maquinaLegible === "papel"){
        puntajeJugador++;
        puntajeMaquina++;
    } else if(seleccion === "papel" && maquinaLegible === "tijera"){
        puntajeMaquina++;
    }else if(seleccion === "papel" && maquinaLegible === "piedra"){
        puntajeJugador++;
    }
    if (seleccion === "tijera" && maquinaLegible === "tijera"){
        puntajeJugador++;
        puntajeMaquina++;
    } else if(seleccion === "tijera" && maquinaLegible === "piedra"){
        puntajeMaquina++;
    }else if(seleccion === "tijera" && maquinaLegible === "papel"){
        puntajeJugador++;
    }
    vuelta++;
    console.log(puntajeJugador);
    console.log(puntajeMaquina);
}

if(puntajeJugador > puntajeMaquina){
    alert("Ganaste");
} else if (puntajeJugador < puntajeMaquina) {
    alert("Perdiste");
} else {
    alert("Empate")
}



