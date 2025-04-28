const lista = document.getElementById("lista");
const input = document.getElementById("itemInput");
const botaoAdicionar = document.getElementById("adicionarBtn");
const botaoLimparTudo = document.getElementById("limparTudoBtn");

// Adicionar item à lista
botaoAdicionar.addEventListener("click", () => {
  const texto = input.value.trim();

  if (texto !== "") {
    const li = document.createElement("li");
    li.textContent = texto;

    // Criar botão de remover individual
    const removerBtn = document.createElement("button");
    removerBtn.textContent = "Remover";

    removerBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(removerBtn);
    lista.appendChild(li);
    input.value = "";
  }
});

// Limpar toda a lista com confirmação
botaoLimparTudo.addEventListener("click", () => {
  const confirmar = confirm("Tem certeza que deseja apagar todos os itens da lista?");
  if (confirmar) {
    lista.innerHTML = "";
  }
});
