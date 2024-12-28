const express = require('express');
const router = express.Router();

let users = [
    { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz' },
];

// Lista usuários
router.get('/', (req, res) => res.json(users));

// Adiciona usuário
router.post('/', (req, res) => {
    const user = { id: users.length + 1, ...req.body };
    users.push(user);
    res.status(201).json(user);
});

// Atualiza usuário
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return res.status(404).send('Usuário não encontrado.');

    users[index] = { id, ...req.body };
    res.json(users[index]);
});

// Deleta usuário
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(u => u.id !== id);
    res.status(204).send();
});

module.exports = router;
