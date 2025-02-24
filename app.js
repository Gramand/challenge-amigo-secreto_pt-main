//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("happy-cat");
  audio.play().catch((error) => {
    console.log(
      "Autoplay bloqueado. O usuário precisa interagir com a página.",
      error
    );
  });
});

let amigos = [];

function adicionarAmigo() {
  let conteudoDigitado = document.getElementById("amigo").value;
  if (conteudoDigitado.trim() !== "") {
    amigos.push(conteudoDigitado);
    console.log(amigos);
    document.getElementById("amigo").value = "";
  } else {
    console.log("Digite um nome antes de adicionar.");
    alert("O campo não pode estar vazio, duh. Insira um nome válido");
  }
  listarAmigos();
}

function listarAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    // Verifica se a lista não está vazia
    console.log(
      "A lista de amigos está vazia. Adicione amigos para fazer o sorteio!"
    );
    alert(
      "A lista de amigos está vazia. Adicione amigos para fazer o sorteio!"
    );
    return;
  }
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  console.log(indiceAleatorio);
  let amigoEscolhido = amigos[indiceAleatorio];
  console.log("Amigo escolhido:", amigoEscolhido);

  let resultado = document.getElementById("resultado");

  resultado.innerHTML = amigoEscolhido;
}
