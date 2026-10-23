"use strict";

const iniciar = document.querySelector("#iniciar");

const iniciarJuego = () => {
  if (iniciar) {
    iniciar.addEventListener("click", function () {
      window.location.href = "juego.html";
    });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  iniciarJuego();
});
