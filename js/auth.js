async function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  const db = await carregarDB();

  const user = db.usuarios.find(
    u => u.usuario === usuario && u.senha === senha
  );

  if (!user) {
    alert("Login inválido");
    return;
  }

  localStorage.setItem("user", JSON.stringify(user));

  if (user.tipo === "professor") {
    window.location = "professor.html";
  } else {
    window.location = "aluno.html";
  }
}

async function cadastrar() {
  const nome = document.getElementById("nome").value;
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  const db = await carregarDB();
  const id = Date.now();

  db.usuarios.push({
    id,
    nome,
    usuario,
    senha,
    tipo: "aluno"
  });

  db.alunos.push({
    id,
    turma: null,
    disciplinas: {
      Algoritmos: 0,
      JavaScript: 0,
      HTML: 0,
      CSS: 0
    },
    emblemas: [],
    xp: 0,
    nivel: 1
  });

  await salvarDB(db);

  alert("Cadastro realizado!");
}
