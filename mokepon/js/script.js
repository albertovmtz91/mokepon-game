let ataqueJugador;
let ataqueEnemigo;
//let vidaJugador = 3;
//let vidaEnemigo = 3;

function iniciarJuego() {
  let botonMascotaJugador = document.getElementById('boton-mascota');
  botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

  let botonFuego = document.getElementById('boton-fuego');
  botonFuego.addEventListener('click', ataqueFuego);

  let botonAgua = document.getElementById('boton-agua');
  botonAgua.addEventListener('click', ataqueAgua);

  let botonTierra = document.getElementById('boton-tierra');
  botonTierra.addEventListener('click', ataqueTierra);
}

function seleccionarMascotaJugador() {
  let inputHipodoge = document.getElementById('hipodoge');
  let inputCapipepo = document.getElementById('capipepo');
  let inputRatigueya = document.getElementById('ratigueya');
  let spanMascotaJugador = document.getElementById('mascota-jugador');

  if(inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = 'Hipodoge';
  } else if(inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = 'Capipepo';
  } else if(inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = 'Ratigueya';
  } else {
    alert('Selecciona una mascota');
  }
  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  let spanMascotaEnemigo = document.getElementById('mascota-enemigo');
  
  let mascotaAleatorio = aleatorio(1, 3);
  if(mascotaAleatorio == 1){
    spanMascotaEnemigo.innerHTML = 'Hipodoge';
  } else if(mascotaAleatorio == 2){
    spanMascotaEnemigo.innerHTML = 'Capipepo';
  }else if(mascotaAleatorio == 3) {
    spanMascotaEnemigo.innerHTML = 'Ratigueya';
  }


}

function ataqueFuego() {
  ataqueJugador = 'FUEGO';
  ataqueAleatorioEnemegio();
}

function ataqueAgua() {
  ataqueJugador = 'AGUA';
  ataqueAleatorioEnemegio();
}

function ataqueTierra() {
  ataqueJugador = 'TIERRA';
  ataqueAleatorioEnemegio();
}

function ataqueAleatorioEnemegio() {
  let ataqueAleatorio = aleatorio(1, 3);
  if(ataqueAleatorio == 1){
    ataqueEnemigo = 'FUEGO';
  } else if(ataqueAleatorio == 2){
    ataqueEnemigo = 'AGUA';
  }else if(ataqueAleatorio == 3) {
    ataqueEnemigo = 'TIERRA';
  }
  resultadoPelea();
  
}

function resultadoPelea() {
  if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA' || ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO' || ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
    crearMensaje('GANASTE!!!');
    //vidaEnemigo = vidaEnemigo - 1;
  } else if(ataqueJugador == ataqueEnemigo){
    crearMensaje('EMPATE!!!');
  } else{
    crearMensaje('PERDISTE!!!');
    //vidaJugador = vidaJugador - 1;
  }
}

function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById('mensajes')
  let parrafo = document.createElement('p');
  parrafo.innerHTML = `Tu mascota atacó con ${ataqueJugador}. Las mascota del enemigo atacó con ${ataqueEnemigo}. - ${resultado}`;
  sectionMensajes.appendChild(parrafo);
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego);