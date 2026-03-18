const GIST_ID = "COLE_AQUI";
const TOKEN = "TOKEN_AQUI";

async function carregarDB() {
  const res = await fetch(`https://api.github.com/gists/${GIST_ID}`);
  const data = await res.json();
  return JSON.parse(data.files["database.json"].content);
}

async function salvarDB(db) {
  await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    method: "PATCH",
    headers: {
      Authorization: `token ${TOKEN}`
    },
    body: JSON.stringify({
      files: {
        "database.json": {
          content: JSON.stringify(db, null, 2)
        }
      }
    })
  });
}
