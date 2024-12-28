const express = require('express');
const router = express.Router();

// Exemplo de rota para listar todos
router.get('/', (req, res) => {
    res.send('Lista de todos');
});

// Exemplo de rota para criar um todo
router.post('/', (req, res) => {
    res.send('Todo criado');
});

module.exports = router;  // Exportando corretamente o router
