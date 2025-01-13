const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Lista de todos');
});

router.post('/', (req, res) => {
    res.send('Todo criado');
});

module.exports = router; 
