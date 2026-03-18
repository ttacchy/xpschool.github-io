async function rankingGeral() {
  const db = await carregarDB();

  const ranking = db.alunos.sort((a, b) => b.xp - a.xp);

  const tabela = document.getElementById("ranking");
  tabela.innerHTML = "";

  ranking.forEach((a, i) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${a.id}</td>
      <td>${a.xp}</td>
      <td>${a.nivel}</td>
    `;

    tabela.appendChild(tr);
  });
}
