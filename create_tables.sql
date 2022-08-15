CREATE TABLE IF NOT EXISTS clientes (
    id INT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    lealdade INTEGER NOT NULL
);


 
 CREATE TABLE IF NOT EXISTS enderecos(
    id BIGSERIAL PRIMARY KEY,
    cep VARCHAR(50) NOT NULL,
    rua VARCHAR(50) not null,
    numero INTEGER NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    complemento VARCHAR(100),
    cliente_id INTEGER UNIQUE NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);