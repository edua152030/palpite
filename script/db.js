const Sequelize = require('sequelize')
const sequelize = new Sequelize('copa2022', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
})


sequelize.authenticate().then(function(){
    console.log('conexão ok')
}).catch( function(erro){
    console.log('falha ao se conectar '+ erro)
})


module.exports = sequelize



