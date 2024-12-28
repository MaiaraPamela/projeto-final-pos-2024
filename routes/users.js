const express = require('express');
const router = express.Router();

// Exemplo de rota para listar usuários
router.get('/', (req, res) => {
    res.send('Lista de usuários');
});

// Exemplo de rota para criar um usuário
router.post('/', (req, res) => {
    res.send('Usuário criado');
});

module.exports = router;  // Exportando corretamente o router
