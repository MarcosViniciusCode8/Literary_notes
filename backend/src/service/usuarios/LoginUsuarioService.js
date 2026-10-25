import * as DBUsuario from '../../repository/usuariosRepository.js';
import { gerarToken } from '../../utils/Token.js';
import { LoginUsuariosValidation } from '../../validation/UsuariosValidation.js';

export async function LoginUsuarioService(usuario) {
  LoginUsuariosValidation(usuario)
  const usuarioBanco = await DBUsuario.JaExisteEmailLogin(usuario.email);

  if (!usuarioBanco || usuarioBanco.senha !== usuario.senha) {
      throw new Error("Email ou senha inválidos")
  }

  const token = gerarToken(usuarioBanco);

  return token
}
