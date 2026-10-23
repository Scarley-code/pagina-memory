"use strict";

const tiempo = document.querySelector("#tiempo");
const cartas = document.querySelectorAll(".cartas");

const temporizador = () => {
  let contador = 60;
  const tiempo_restante = setInterval(() => {
    tiempo.innerHTML = "Tiempo restante: " + contador;
    console.log(contador);
    contador--;
    if (contador < 0) {
      alert("Se ha acabado el tiempo. Los pokemons han huido.");
      console.log("Se ha acabado el tiempo.");
      clearInterval(tiempo_restante);
    }
  }, 1000);
};

const pincharCarta = () => {
  for (let cadaCarta of cartas) {
    cadaCarta.addEventListener("click", function () {
      console.log("Has hecho clic en: " + cadaCarta.id);
    });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  temporizador();
  pincharCarta();
});
