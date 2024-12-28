const express = require('express');
const router = express.Router();
const User = require('../models/user');

// CRUD para Users
router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.post('/', async (req, res) => {
  const newUser = await User.create(req.body);
  res.json(newUser);
});

router.put('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  await user.update(req.body);
  res.json(user);
});

router.delete('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  await user.destroy();
  res.json({ message: 'User deleted' });
});

module.exports = router;
