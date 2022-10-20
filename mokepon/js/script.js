let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
  sectionSeleccionarAtaque.style.display = 'none';

  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);

  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);

  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);

  let botonReiniciar = document.getElementById('boton-reiniciar');
  botonReiniciar.addEventListener('click', reiniciarJuego);
  let sectionReiniciar = document.getElementById('reiniciar');
  sectionReiniciar.style.display = 'none';
}

function seleccionarMascotaJugador() {
  let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
  sectionSeleccionarMascota.style.display = 'none';

  let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
  sectionSeleccionarAtaque.style.display = 'block';

  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("mascota-jugador");

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
  } else {
    alert("Selecciona una mascota");
  }
  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
  let mascotaAleatorio = aleatorio(1, 3);
  if (mascotaAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (mascotaAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else if (mascotaAleatorio == 3) {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }
}

function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueAleatorioEnemegio();
}

function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueAleatorioEnemegio();
}

function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemegio();
}

function ataqueAleatorioEnemegio() {
  let ataqueAleatorio = aleatorio(1, 3);
  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA";
  } else if (ataqueAleatorio == 3) {
    ataqueEnemigo = "TIERRA";
  }
  combate();
}

function combate() {
  let spanVidasJugador = document.getElementById("vidas-jugador");
  let spanVidasEnemigo = document.getElementById("vidas-enemigo");

  if (
    (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") ||
    (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") ||
    (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA")
  ) {
    crearMensaje("Le has quitado 1 vida al enemigo");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == ataqueEnemigo) {
    crearMensaje("Ambas mascotas esquivaron el ataque");
  } else {
    crearMensaje("Te han quitado 1 vida");
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }
  revisarVidas();
}

function revisarVidas() {
  if (vidasJugador == 0) {
    crearMensajeFinal('¡Haz perdido el combate!')
    
  } else if (vidasEnemigo == 0) {
    crearMensajeFinal('¡Haz ganado el combate!')
  }
}

function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML = `Tu mascota atacó con ${ataqueJugador}. Las mascota del enemigo atacó con ${ataqueEnemigo}. - ${resultado}`;
  sectionMensajes.appendChild(parrafo);
}

function crearMensajeFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML = resultadoFinal;
  sectionMensajes.appendChild(parrafo);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.disabled = true;

  let botonAgua = document.getElementById("boton-agua");
  botonAgua.disabled = true;

  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.disabled = true;

  let sectionReiniciar = document.getElementById('reiniciar');
  sectionReiniciar.style.display = 'block';

}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);