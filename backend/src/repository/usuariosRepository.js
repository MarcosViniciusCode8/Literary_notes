import conexao from "./conexao/connection.js";

export async function CadastroUsuario(usuario) {
  let command = `
INSERT INTO usuarios(username,email,senha,situacao)
VALUES(?,?,?,'usuario')
    `

  const [resposta] = await conexao.execute(command, [
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

  const [resposta] = await conexao.execute(command, [email]);
  return resposta[0]
}

export async function JaExisteUsername(username) {
  let command = `
SELECT username FROM usuarios WHERE username = ?
    `

  const [resposta] = await conexao.execute(command, [username]);
  return resposta[0]
}