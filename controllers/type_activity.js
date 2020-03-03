'use strict'

const { Type_activity } = require('../database/models');


//Get all records in the database
exports.get = (req,res,next) => {
    //method for action in database
    try {
        Type_activity.findAll().then(ev => res.json(ev)) 
    } catch (error) {
        res.send(error)
    }
 
},

//Create new record in the database
exports.post = (req,res) => {    
    //method for action in database
    try {
        Type_activity.create({
            firstName: req.body.fName,
            lastName: req.body.lName, 
            email: req.body.email, 
            phone: req.body.phone,
            level: req.body.level,
            password: senha
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
        Type_activity.update(
            { 
                firstName: req.body.fName,
                lastName: req.body.lName, 
                email: req.body.email, 
                phone: req.body.phone,
                level: req.body.level,
                password: novaSenha
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
        Type_activity.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send('Usuário deletado')    
    } catch (error) {
        res.send(error)
    }
}

