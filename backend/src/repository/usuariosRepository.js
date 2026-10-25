import conexao from "./conexao/connection.js";

export async function CadastroUsuario(usuario) {
  let command = `
INSERT INTO usuarios(username,email,senha,situacao)
VALUES(?,?,?,'usuario')
    `

  const [resposta] = await conexao.query(command, [
    usuario.username,
    usuario.email,
    usuario.senha
  ])

  return resposta.insertId
}

export async function JaExisteEmail(email) {
  let command = `
SELECT username FROM usuarios WHERE email = ?
    `

  const [resposta] = await conexao.query(command, [email]);
  return resposta[0]
}

export async function JaExisteEmailLogin(email) {
  const command = `
    SELECT id_usuario, username, email, senha, situacao
    FROM usuarios
    WHERE email = ?
  `;

  const [resposta] = await conexao.query(command, [email]);

  return resposta[0];
}


export async function JaExisteUsername(username) {
  let command = `
SELECT username FROM usuarios WHERE username = ?
    `

  const [resposta] = await conexao.query(command, [username]);
  return resposta[0]
}