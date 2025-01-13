const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Lista de posts');
});

router.post('/', (req, res) => {
    res.send('Post criado');
});

module.exports = router;  
