'use strict'

const { Client } = require('../database/models');


//Get all records in the database
exports.get = (req,res,next) => {
    //method for action in database
    try {
        Client.findAll().then(ev => res.json(ev)) 
    } catch (error) {
        res.send(error)
    }
 
},

//Create new record in the database
exports.post = (req,res) => {    
    //method for action in database
    try {
        Client.create({
            cnpj: req.body.fName,
            status: 1, 
        })
        res.send('Usuário cadastrado com sucesso!');  
    } catch (error) {
        res.send(error)
    }
  
    
},

//Update a especific record in database
exports.put = (req,res) => {        
    //method for action in database
    try {
        Client.update(
            { 
                cnpj: req.body.cnpj,
                status: req.body.status, 
            },
            { 
                where: { id: req.params.id} 
            }
          );
          res.send('Usuário atualizado')
    } catch (error) {
        res.send(error)
    }


},

//Delete a specific record in database
exports.delete = (req,res) => {

    //method for action in database
    try {
        Client.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send('Usuário deletado')    
    } catch (error) {
        res.send(error)
    }
}

