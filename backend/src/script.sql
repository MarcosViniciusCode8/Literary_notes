CREATE DATABASE= notes;
USE notes;

CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(24) NOT NULL UNIQUE,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    foto VARCHAR(800),
    criacao DATE DEFAULT (CURRENT_DATE),
    situacao ENUM('usuario', 'adm')
);

CREATE TABLE livros (
    id_livro INT AUTO_INCREMENT PRIMARY KEY,
    capa VARCHAR(800),
    titulo VARCHAR(150) NOT NULL,
    paginas INT NOT NULL,
    data_lancamento DATE,
    sinopse TEXT,
    situacao ENUM('liberado', 'pendente')
);

CREATE TABLE anotacoes (
    id_anotacao INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_livro INT NOT NULL,
    texto TEXT,
    pagina_inicial_lida INT,
    pagina_final_lida INT,
    reacao ENUM(
        'amei',
        'rindo',
        'chorando',
        'surpreso',
        'irritado',
        'emotivo'
    ),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_livro) REFERENCES livros(id_livro)
);