"use strict";

const iniciar = document.querySelector("#iniciar");

document.addEventListener("DOMContentLoaded", function () {
  if (iniciar) {
    iniciar.addEventListener("click", function () {
      window.location.href = "juego.html";
    });
  }
});
