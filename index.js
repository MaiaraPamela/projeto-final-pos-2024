const express = require('express');
const sequelize = require('./db/connection');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const todoRoutes = require('./routes/todos');
const commentRoutes = require('./routes/comments');
const albumRoutes = require('./routes/albums');
const photoRoutes = require('./routes/photos');

// Configurar sincronização do banco de dados e iniciar o servidor
afterSync();

function afterSync() {
    sequelize.sync({ force: true }) // Apaga e recria o banco de dados
        .then(() => {
            console.log('Banco de dados sincronizado!');
            startServer(); // Iniciar o servidor após a sincronização
        })
        .catch(error => {
            console.error('Erro ao sincronizar o banco de dados:', error);
        });
}

function startServer() {
    const app = express();

    app.use(express.json()); // Middleware para JSON

    // Usando as rotas corretamente
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
