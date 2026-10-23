"use strict";

const tiempo = document.querySelector("#tiempo");
const cartas = document.querySelectorAll(".cartas");

class Juego {
  constructor() {
    this.contador = 5;
    this.tiempo_transcurrido = 0;
    this.tiempo_final = 0;
  }

  temporizador() {
    this.tiempo_restante = setInterval(() => {
      tiempo.innerHTML = "Tiempo restante: " + this.contador;
      console.log(this.contador);
      this.contador--;
      this.tiempo_transcurrido++;
      if (this.contador < 0) {
        this.tiempo_final = this.tiempo_transcurrido;
        alert("Se ha acabado el tiempo. Los pokemons han huido.");
        console.log("Se ha acabado el tiempo.");
        console.log("Tiempo final: ", this.tiempo_final);
        clearInterval(this.tiempo_restante);
      }
    }, 1000);
  }

  pincharCarta() {
    if (this.contador > 0) {
      for (let cadaCarta of cartas) {
        cadaCarta.addEventListener("click", function () {
          console.log("Has hecho clic en: " + cadaCarta.id);
        });
      }
    } else {
      console.log("Prueba: " + this.contador);
      return;
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const partida = new Juego();
  partida.temporizador();
  partida.pincharCarta();
});
