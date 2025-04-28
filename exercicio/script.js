const lista = document.getElementById("lista");
const input = document.getElementById("itemInput");
const botaoAdicionar = document.getElementById("adicionarBtn");

// botão para Adicionar texto à lista
botaoAdicionar.addEventListener("keydown", () => {
  const texto = input.value.trim();

  if (texto !== "") {
    const li = document.createElement("li");
    li.textContent = texto;

    // remover texto digitado 
    const removerBtn = document.createElement("button");
    removerBtn.textContent = "Remover";

    removerBtn.addEventListener("keydown", () => {
      li.remove();
    });

    li.appendChild(removerBtn);
    lista.appendChild(li);
    input.value = "";
  }
});

