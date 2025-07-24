document.addEventListener("DOMContentLoaded", () => {
  exibirFuncionarios();
});

function getFuncionarios() {
  return JSON.parse(localStorage.getItem("funcionariosAtivos") || "[]");
}

function salvarFuncionarios(lista) {
  localStorage.setItem("funcionariosAtivos", JSON.stringify(lista));
}

function exibirFuncionarios() {
  const lista = getFuncionarios();
  const container = document.getElementById("listaAtivos");
  container.innerHTML = "";

  lista.forEach((funcionario, index) => {
    const div = document.createElement("div");
    div.className = "card-funcionario";
    div.innerHTML = `
      <p><strong>Nome:</strong> ${funcionario.nome}</p>
      <p><strong>CPF:</strong> ${funcionario.cpf}</p>
      <p><strong>Local:</strong> ${funcionario.local}</p>
      <p><strong>Data de Cadastro:</strong> ${funcionario.data || "Não informado"}</p>
      <button onclick="editarFuncionario(${index})">Editar</button>
      <button onclick="excluirFuncionario(${index})">Excluir</button>
    `;
    container.appendChild(div);
  });
}

function excluirFuncionario(index) {
  const lista = getFuncionarios();
  lista.splice(index, 1);
  salvarFuncionarios(lista);
  exibirFuncionarios();
}

function editarFuncionario(index) {
  const novoNome = prompt("Novo nome:");
  const novoCpf = prompt("Novo CPF:");
  const novoLocal = prompt("Novo Local:");
  const lista = getFuncionarios();

  if (novoNome && novoCpf && novoLocal) {
    lista[index].nome = novoNome;
    lista[index].cpf = novoCpf;
    lista[index].local = novoLocal;
    salvarFuncionarios(lista);
    exibirFuncionarios();
  }
}

function ordenarFuncionarios() {
  const criterio = document.getElementById("ordenar").value;
  let lista = getFuncionarios();

  if (criterio === "nome") {
    lista.sort((a, b) => a.nome.localeCompare(b.nome));
  } else if (criterio === "data") {
    lista.sort((a, b) => new Date(b.data) - new Date(a.data));
  }

  salvarFuncionarios(lista);
  exibirFuncionarios();
}
