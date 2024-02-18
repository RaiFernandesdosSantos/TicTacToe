let jogador = 1;

const escolha = document.querySelector(".escolha");

escolha.addEventListener("change", () => {
  jogador = escolha.value;
});

const tabuleiro = document.querySelectorAll(".casas");

tabuleiro.forEach((casas) => {
  casas.addEventListener("click", () => {
    if (jogador === 1) {
      casas.textContent = "X";
      jogador = 2;
    } else if (jogador === 2) {
      casas.textContent = "O";
      jogador = 1;
    }
  });
});
