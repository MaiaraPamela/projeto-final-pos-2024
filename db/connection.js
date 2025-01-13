const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory'); 

sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados bem-sucedida!');
    })
    .catch(err => {
        console.error('Erro ao conectar-se ao banco de dados:', err);
    });

module.exports = sequelize;
