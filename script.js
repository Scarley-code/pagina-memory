let juego_iniciado = false;
let contador = 60;

document.getElementById("iniciar").addEventListener("click", function () {
  window.location.href = "juego.html";
  juego_iniciado = true;
  if (juego_iniciado) {
    recorrerCuadricula();
  }
});

function recorrerCuadricula() {
  let cartas = [];
  for (let i = 0; i < 30; i++) {
    let id_carta = document.getElementById("carta" + i);
    cartas.push(id_carta);
  }
  console.log(cartas);
}
