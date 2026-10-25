import { Router } from "express";
const endpoints = Router();
import { CadastroUsuarioService } from "../service/usuarios/CadastroUsuarioService.js";
import { LoginUsuarioService } from '../service/usuarios/LoginUsuarioService.js';
import { validarToken } from "../utils/Token.js";


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

endpoints.post('/usuarios/login', async (req, resp) => {
  try {
    let usuario = req.body;
    const resposta = await LoginUsuarioService(usuario);

    resp.json({ 
      token: resposta
    });
  } catch (erro) {
    resp.status(400).send({
      erro: erro.message
    })
  }
});


export default endpoints