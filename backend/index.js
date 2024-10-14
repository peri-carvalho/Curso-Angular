const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuração do banco de dados PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'teste_db',  // nome do seu banco de dados
  password: 'root',
  port: 5432,
});

// Exemplo de um endpoint para obter funcionários
app.get('/api/funcionarios', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM funcionarios');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar funcionários');
  }
});

// Endpoint para obter universos
app.get('/api/universos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM universos');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar universos');
  }
});

// Endpoint para obter galaxias
app.get('/api/galaxias', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM galaxias');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar galaxias');
  }
});

// Endpoint para obter planetas
app.get('/api/planetas', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM planetas');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar planetas');
  }
});

// Endpoint para obter mapas
app.get('/api/mapas', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM mapas');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar mapas');
  }
});

app.post('/api/funcionarios', async (req, res) => {
    const { nome, cpf, dataNascimento, universo, galaxia, planeta, mapa } = req.body;
  
    try {
      const result = await pool.query(
        `INSERT INTO funcionarios (nome, cpf, data_nascimento, universo_id, galaxia_id, planeta_id, mapa_id)
         VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [nome, cpf, dataNascimento, universo, galaxia, planeta, mapa]
      );
      res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error('Erro ao cadastrar funcionário:', err);
      res.status(500).send('Erro ao cadastrar funcionário');
    }
  });  

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
