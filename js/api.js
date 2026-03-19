const GIST_ID = "a49c3556c4e221dd3f964765dd9905ba";
const TOKEN = "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";

async function carregarDB() {

  const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    headers: {
      "Authorization": `token ${TOKEN}`
    }
  });

  const data = await res.json();

  return JSON.parse(data.files["database.json"].content);
}

async function salvarDB(db) {

  const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    method: "PATCH",
    headers: {
      "Authorization": `token ${TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      files: {
        "database.json": {
          content: JSON.stringify(db, null, 2)
        }
      }
    })
  });

  const result = await res.json();
  console.log(result);
}
