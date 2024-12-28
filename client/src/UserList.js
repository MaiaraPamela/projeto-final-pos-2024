import React, { useState, useEffect } from 'react';
import api from '../services/api';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.get('/users').then((response) => {
            setUsers(response.data);
        });
    }, []);

    return (
        <div>
            <h2>Lista de Usuários</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
