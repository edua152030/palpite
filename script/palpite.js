const Sequelize = require('sequelize');
const database = require('./db');


const Post = database.define('palpite', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    cnpj: {
        type: Sequelize.STRING(18),
        allowNull: false
    },

    brasil: {
        type: Sequelize.INTEGER(2),
        allowNull: false
    },     

    adversario: {
        type: Sequelize.INTEGER(2),
        allowNull: false
    }

})


module.exports = Post