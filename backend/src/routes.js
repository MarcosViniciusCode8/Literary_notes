import usuarios from './controller/usuariosController.js';
import livros from './controller/livrosController.js';
import anotacoes from './controller/anotacoesController.js';

export default function Rotas(api) {
  api.use(usuarios);
  api.use(livros);
  api.use(anotacoes);
}