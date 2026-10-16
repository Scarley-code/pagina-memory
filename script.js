let juego_iniciado = false;
let contador = 60;

document.getElementById("iniciar").addEventListener("click", function () {
  window.location.href = "juego.html";
  juego_iniciado = true;
});
