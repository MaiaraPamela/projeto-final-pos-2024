const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Lista de comentários');
});

router.post('/', (req, res) => {
    res.send('Comentário criado');
});

module.exports = router;  
