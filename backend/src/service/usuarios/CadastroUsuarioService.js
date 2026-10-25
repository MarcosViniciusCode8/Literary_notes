import * as DBUsuario from '../../repository/usuariosRepository.js'
import { CadastroUsuarioValidation } from '../../validation/UsuariosValidation.js';

export async function CadastroUsuarioService(usuario) {
  await CadastroUsuarioValidation(usuario);

  const resposta = await DBUsuario.CadastroUsuario(usuario);
  return resposta;
}