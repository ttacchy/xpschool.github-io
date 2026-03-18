async function carregarAluno() {
  const user = JSON.parse(localStorage.getItem("user"));
  const db = await carregarDB();

  const aluno = db.alunos.find(a => a.id === user.id);

  document.getElementById("xp").innerText = aluno.xp;
  document.getElementById("nivel").innerText = aluno.nivel;

  const lista = document.getElementById("emblemas");
  lista.innerHTML = "";

  aluno.emblemas.forEach(e => {
    const li = document.createElement("li");
    li.innerText = e;
    lista.appendChild(li);
  });
}

carregarAluno();
