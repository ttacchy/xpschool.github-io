function calcularNivel(xp) {
  if (xp < 100) return 1;
  if (xp < 300) return 2;
  if (xp < 600) return 3;
  return 4;
}

async function criarTurma() {
  const nome = document.getElementById("turmaNome").value;
  const db = await carregarDB();

  db.turmas.push({ id: Date.now(), nome });

  await salvarDB(db);
  alert("Turma criada!");
}

async function criarDisciplina() {
  const nome = document.getElementById("disciplinaNome").value;
  const db = await carregarDB();

  db.disciplinas.push({ id: Date.now(), nome });

  await salvarDB(db);
  alert("Disciplina criada!");
}

async function darPontos(idAluno, disciplina, pontos) {
  const db = await carregarDB();
  const aluno = db.alunos.find(a => a.id === idAluno);

  aluno.disciplinas[disciplina] += pontos;
  aluno.xp += pontos;
  aluno.nivel = calcularNivel(aluno.xp);

  await salvarDB(db);
  alert("Pontos adicionados!");
}

async function darEmblema(idAluno, emblema) {
  const db = await carregarDB();
  const aluno = db.alunos.find(a => a.id === idAluno);

  aluno.emblemas.push(emblema);

  await salvarDB(db);
  alert("Emblema dado!");
}
