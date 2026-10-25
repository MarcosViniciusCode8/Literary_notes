import mysql from 'mysql2/promise';

const conexao = await mysql.createConnection({
  host: process.env.SQLHOST,
  user: process.env.SQLUSER,
  password: process.env.SQLPASSWORD,
  database: process.env.SQLDB,
  port: process.env.SQLPORT,
  ssl: {
    ca: process.env.SQLSSL_CA,
  },
});

console.log("API E BD")
export default conexao;