const express = require('express');
const router = express.Router();

// Exemplo de rota para listar fotos
router.get('/', (req, res) => {
    res.send('Lista de fotos');
});

// Exemplo de rota para criar uma foto
router.post('/', (req, res) => {
    res.send('Foto criada');
});

module.exports = router;  // Exportando corretamente o router
