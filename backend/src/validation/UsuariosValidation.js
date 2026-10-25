import * as DBUsuario from '../repository/usuariosRepository.js'

export async function CadastroUsuarioValidation(usuario) {
  const emailExistente = await DBUsuario.JaExisteEmail(usuario.email);
  const usernameExistente = await DBUsuario.JaExisteUsername(usuario.username)

  if (!usuario.username) {
    throw new Error("Username é obrigatório")
  }

  if (usuario.username.length < 8) {
      throw new Error("O username deve ter no mínimo 8 caracteres")
    }

  if (usuario.username.length > 24) {
      throw new Error("O username deve ter no máximo 24 caracteres")
    }

  if (usernameExistente) {
        throw new Error("Já existe uma conta com este username")
  }
  
  if (!usuario.email) {
    throw new Error("Email é obrigatório")
  }

  if (emailExistente) {
    throw new Error("Já existe uma conta com este email")
  }

  if (!usuario.senha) {
    throw new Error("Senha é obrigatória")
  }

  if (usuario.senha.length < 8) {
    throw new Error("A senha deve ter no minímo 8 digitos")
  }
}

export async function LoginUsuariosValidation(usuario) {
  if (!usuario.email) {
    throw new Error("Email é obrigatório")
  }

  if (!usuario.senha) {
    throw new Error("Senha é obrigatória")
  }
  
}