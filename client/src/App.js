import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  // Estados para armazenar dados
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Função para buscar dados da API
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/users');
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      setLoading(false);
    }
  };

  // Função para criar/editar usuário
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { name, email, phone };

    try {
      if (isEditing) {
        // Edita um usuário existente
        await axios.put(`http://localhost:3000/users/${currentUserId}`, userData);
      } else {
        // Cria um novo usuário
        await axios.post('http://localhost:3000/users', userData);
      }
      // Após salvar, atualiza a lista de usuários
      fetchUsers();
      resetForm();
    } catch (error) {
      console.error('Erro ao salvar o usuário:', error);
    }
  };

  // Função para resetar o formulário
  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setIsEditing(false);
    setCurrentUserId(null);
  };

  // Função para editar um usuário existente
  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setIsEditing(true);
    setCurrentUserId(user.id);
  };

  // Função para excluir um usuário
  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/users/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error('Erro ao excluir o usuário:', error);
    }
  };

  // UseEffect para buscar dados quando o componente for montado
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{isEditing ? 'Editar Usuário' : 'Cadastrar Novo Usuário'}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit">{isEditing ? 'Atualizar Usuário' : 'Cadastrar Usuário'}</button>
          {isEditing && <button type="button" onClick={resetForm}>Cancelar</button>}
        </form>

        <h2>Lista de Usuários</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong><br />
              Email: {user.email}<br />
              Phone: {user.phone}<br />
              <button onClick={() => handleEdit(user)}>Editar</button>
              <button onClick={() => handleDelete(user.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
