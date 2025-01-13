const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Lista de fotos');
});

router.post('/', (req, res) => {
    res.send('Foto criada');
});

module.exports = router;  