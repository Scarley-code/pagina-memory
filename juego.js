"use strict";

const tiempo = document.querySelector("#tiempo");
const puntos = document.querySelector("#puntuaciones");
const cartas = document.querySelectorAll(".cartas");

class Juego {
  constructor() {
    this.contador = 60;
    this.tiempo_transcurrido = 0;
    this.tiempo_final = 0;
    this.puntuacion = 0;
    this.primeraCarta = null;
    this.segundaCarta = null;
    this.bloquearCartas = false;
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
        clearInterval(this.tiempo_restante);
      }
      if (this.puntuacion === 15) {
        this.tiempo_final = this.tiempo_transcurrido;
        alert("Juego completado. Tienes 40 puntos extra");
        this.puntuacion += 40;
        puntos.innerHTML = "Puntuación: " + this.puntuacion;
        clearInterval(this.tiempo_restante);
      }
    }, 1000);
  }

  mezclarCartas() {
    for (let i = cartas.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      cartas[i].parentNode.insertBefore(cartas[j], cartas[i]);
    }
  }

  pincharCarta() {
    for (let cadaCarta of cartas) {
      cadaCarta.addEventListener("click", () => {
        if (this.contador < 0) return;
        if (this.bloquearCartas) return;
        if (cadaCarta.classList.contains("descubierta")) return;

        cadaCarta.style.transform = "rotateY(90deg)";

        setTimeout(() => {
          cadaCarta.style.backgroundImage = `url(${cadaCarta.dataset.imagen})`;
          cadaCarta.style.backgroundSize = "100%";
          cadaCarta.style.transform = "rotateY(180deg)";
        }, 400);

        cadaCarta.classList.add("descubierta");

        if (this.primeraCarta === null) {
          this.primeraCarta = cadaCarta;
        } else {
          this.segundaCarta = cadaCarta;
          this.bloquearCartas = true;

          if (
            this.primeraCarta.dataset.imagen ===
            this.segundaCarta.dataset.imagen
          ) {
            this.puntuacion++;
            puntos.innerHTML = "Puntuación: " + this.puntuacion;

            this.primeraCarta = null;
            this.segundaCarta = null;
            this.bloquearCartas = false;
          } else {
            setTimeout(() => {
              this.primeraCarta.style.transform = "rotateY(90deg)";
              this.segundaCarta.style.transform = "rotateY(90deg)";

              setTimeout(() => {
                this.primeraCarta.style.backgroundImage =
                  "url('./imagenes/Carta.jpg')";
                this.segundaCarta.style.backgroundImage =
                  "url('./imagenes/Carta.jpg')";

                this.primeraCarta.style.transform = "rotateY(0deg)";
                this.segundaCarta.style.transform = "rotateY(0deg)";

                this.primeraCarta.classList.remove("descubierta");
                this.segundaCarta.classList.remove("descubierta");

                this.primeraCarta = null;
                this.segundaCarta = null;
                this.bloquearCartas = false;
              }, 400);
            }, 1000);
          }
        }
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const partida = new Juego();
  partida.mezclarCartas();
  partida.temporizador();
  partida.pincharCarta();
});
