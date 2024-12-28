const express = require('express');
const router = express.Router();

// Exemplo de rota para listar posts
router.get('/', (req, res) => {
    res.send('Lista de posts');
});

// Exemplo de rota para criar um post
router.post('/', (req, res) => {
    res.send('Post criado');
});

module.exports = router;  // Exportando corretamente o router
