import 'dotenv/config.js';
import cors from 'cors';
import express from 'express';
import conexao from './repository/conexao/connection.js';

const api = express();

api.use(express.json());
api.use(cors());

const PORTA = process.env.PORT || 2011;

api.listen(PORTA, () => console.log("A api subiu com sucesso na porta " + PORTA));