const express = require('express');
const sequelize = require('./db/connection');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const todoRoutes = require('./routes/todos');
const commentRoutes = require('./routes/comments');
const albumRoutes = require('./routes/albums');
const photoRoutes = require('./routes/photos');

afterSync();

function afterSync() {
    sequelize.sync({ force: true }) 
        .then(() => {
            console.log('Banco de dados sincronizado!');
            startServer(); 
        })
        .catch(error => {
            console.error('Erro ao sincronizar o banco de dados:', error);
        });
}

function startServer() {
    const app = express();

    app.use(express.json());

    app.use('/users', userRoutes);
    app.use('/posts', postRoutes);
    app.use('/todos', todoRoutes);
    app.use('/comments', commentRoutes);
    app.use('/albums', albumRoutes);
    app.use('/photos', photoRoutes);

    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
}
