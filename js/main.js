let jogador = 1;

const escolha = document.querySelector(".escolha");
const tabuleiro = document.querySelectorAll(".btnCasas");
const reset = document.querySelector("#reset");
const divs = document.querySelectorAll(".casa");

reset.addEventListener("click", () => {
  window.location.reload();
});

escolha.addEventListener("change", () => {
  jogador = escolha.value;
});

tabuleiro.forEach((casas, index) => {
  casas.addEventListener("click", () => {
    casas.disabled = true;
    if (jogador === 1) {
      casas.textContent = "X";
      jogador = 2;
    } else if (jogador === 2) {
      casas.textContent = "O";
      jogador = 1;
    }
  });
});

function checarVencedor() {}
