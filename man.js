// Array de palavras pré-definidas
const palavras = ["javascript", "html", "css", "programacao", "desenvolvimento"];

// Seleciona aleatoriamente uma palavra do array
let palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];

// Inicializa a palavra oculta com traços
let palavraOculta = "_".repeat(palavraEscolhida.length);

// Exibe a palavra oculta na tela
document.getElementById("word-display").innerText = palavraOculta;

// Função chamada quando o jogador faz uma tentativa de adivinhar
function makeGuess() {
  const letra = document.getElementById("letter").value.toLowerCase();

  // Verifica se a letra está na palavra
  if (palavraEscolhida.includes(letra)) {
    // Substitui os traços pelas letras corretas
    for (let i = 0; i < palavraEscolhida.length; i++) {
      if (palavraEscolhida[i] === letra) {
        palavraOculta = palavraOculta.substring(0, i) + letra + palavraOculta.substring(i + 1);
      }
    }

    // Atualiza a exibição da palavra
    document.getElementById("word-display").innerText = palavraOculta;

    // Verifica se o jogador venceu
    if (palavraOculta === palavraEscolhida) {
      alert("Parabéns! Você venceu!");
      resetGame();
    }
  } else {
    alert("Letra incorreta. Tente novamente!");
  }

  // Limpa o campo de entrada
  document.getElementById("letter").value = "";
}

// Função para reiniciar o jogo
function resetGame() {
  // Seleciona uma nova palavra aleatória
  palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];
  
  // Reinicializa a palavra oculta com traços
  palavraOculta = "_".repeat(palavraEscolhida.length);
  
  // Exibe a nova palavra oculta na tela
  document.getElementById("word-display").innerText = palavraOculta;
}