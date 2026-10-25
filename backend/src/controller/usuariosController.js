import { Router } from "express";
const endpoints = Router();
import { CadastroUsuarioService } from "../service/usuarios/CadastroUsuarioService.js";
endpoints.post('/usuarios/cadastro', async (req, resp, next) => {
  try {
    let usuario = req.body
    
    const resposta = await CadastroUsuarioService(usuario);

    resp.status(201).send({ 
      resposta: "Usuário criado com sucesso"
    });
  } catch (erro) {
    resp.status(400).send({
      erro: erro.message
    })
  }
});

export default endpoints