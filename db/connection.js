const { Sequelize } = require('sequelize');

// Para SQLite em memória (sem ':')
const sequelize = new Sequelize('sqlite::memory');  // Ou, para persistência, use o caminho do arquivo

// Teste de conexão
sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados bem-sucedida!');
    })
    .catch(err => {
        console.error('Erro ao conectar-se ao banco de dados:', err);
    });

module.exports = sequelize;
