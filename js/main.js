let jogador = 1;
let x = [];
let o = [];
let somaX = 0;
let somaO = 0;

const tabuleiro = document.querySelectorAll(".btnCasas");
const reset = document.querySelector("#reset");
const divs = document.querySelectorAll(".casa");

reset.addEventListener("click", () => {
  window.location.reload();
});

tabuleiro.forEach((casas, index) => {
  casas.addEventListener("click", () => {
    casas.disabled = true;
    if (jogador === 1) {
      casas.textContent = "X";
      jogador = 2;
      x.push(index);
      somaX += index;

      checarVencedor();
    } else if (jogador === 2) {
      casas.textContent = "O";
      jogador = 1;
      o.push(index);
      somaO += index;

      checarVencedor();
    }
  });
});

function checarVencedor() {
  if (x.length > 2 && somaX % 3 === 0) {
    console.log("X venceu");
  } else if (o.length > 2 && somaO % 3 === 0) {
    console.log("O venceu");
  }
}
