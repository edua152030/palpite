const Sequelize = require('sequelize');


function acao(){

    (async () => {

        const database = require('./db');
        const Post = require('./palpite');
     
    const resultadoCreate = await Post.create({
        cnpj: '555555555',
        brasil: 2,
        adversario: 3
    })
    
    console.log(resultadoCreate);
        try {
            const resultado = await database.sync();
            console.log(resultado);
        } catch (error) {
            console.log(error);
        }
        
    })()
}

acao()
  
