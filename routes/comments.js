const express = require('express');
const router = express.Router();

// Exemplo de rota para listar comentários
router.get('/', (req, res) => {
    res.send('Lista de comentários');
});

// Exemplo de rota para criar um comentário
router.post('/', (req, res) => {
    res.send('Comentário criado');
});

module.exports = router;  // Exportando corretamente o router
