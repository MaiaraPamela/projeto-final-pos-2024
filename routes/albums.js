const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Lista de álbuns');
});

router.post('/', (req, res) => {
    res.send('Álbum criado');
});

module.exports = router; 
