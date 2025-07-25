document.addEventListener('DOMContentLoaded', () => {
  const menuHTML = `
    <nav class="menu-topo">
      <a href="index.html">Home</a>
      <a href="cadastro.html">Cadastrar Funcionário</a>
      <a href="ativos.html">Funcionários Ativos</a>
      <a href="inativos.html">Funcionários Inativos</a>
      <a href="ferias.html">Lançar Férias</a>
      <a href="demissao.html">Registrar Demissão</a>
      <a href="aviso.html">Aviso Prévio</a>
      <a href="relatorio.html">Gerar Relatório</a>
    </nav>
  `;

  const body = document.body;
  // Inserir o menu no topo da página, antes do conteúdo
  body.insertAdjacentHTML('afterbegin', menuHTML);
});
