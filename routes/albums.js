const express = require('express');
const router = express.Router();

// Exemplo de rota para listar álbuns
router.get('/', (req, res) => {
    res.send('Lista de álbuns');
});

// Exemplo de rota para criar um álbum
router.post('/', (req, res) => {
    res.send('Álbum criado');
});

module.exports = router;  // Exportando corretamente o router
