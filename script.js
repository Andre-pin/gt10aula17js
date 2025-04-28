const titulo = document.getElementById("meuTitulo");
console.log("H1: ", titulo);

const paragrafo = document.querySelector(".texto");
console.log(paragrafo);

const item = document.querySelectorAll("li");
console.log(item);

titulo.textContent = "Novo título!";
console.log(titulo.textContent);

paragrafo.innerHTML = "<strong>Texto em negrito</strong>";
console.log(paragrafo.innerHTML);

titulo.style.color = "blue";
titulo.style.fontSize = "60px";

const novoItem = document.createElement("li");
console.log(novoItem);

const lista = document.querySelector("ul");
lista.appendChild(novoItem);
novoItem.remove();

const botao = document.querySelector("#esse");
// adiciona texto
botao.addEventListener("click", () => {
  const input = document.getElementById("inputTexto");
  const texto = input.value.trim();

  alert(texto);

  botao.style.backgroundColor = "red";

  const novoItem = document.createElement("li");
  novoItem.textContent = "lista 4";
  console.log(novoItem);

  const lista = document.querySelector("ul");
  lista.appendChild(novoItem);
});
