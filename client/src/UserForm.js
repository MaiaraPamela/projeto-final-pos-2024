// src/components/UserForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ userId, onSave }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Quando um `userId` é passado (para edição), preenche o formulário com os dados do usuário
  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:3000/users/${userId}`)
        .then(response => {
          setName(response.data.name);
          setEmail(response.data.email);
        })
        .catch(error => console.error('Erro ao carregar o usuário:', error));
    }
  }, [userId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      name: name,
      email: email,
    };

    try {
      if (userId) {
        // Atualiza um usuário existente
        await axios.put(`http://localhost:3000/users/${userId}`, userData);
      } else {
        // Cria um novo usuário
        await axios.post('http://localhost:3000/users', userData);
      }
      // Chama a função onSave para atualizar a lista de usuários na página principal
      onSave();
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Erro ao salvar o usuário:', error);
    }
  };

  return (
    <div>
      <h2>{userId ? 'Editar Usuário' : 'Criar Novo Usuário'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">{userId ? 'Salvar Alterações' : 'Criar Usuário'}</button>
      </form>
    </div>
  );
};

export default UserForm;
