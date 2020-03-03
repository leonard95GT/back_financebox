'use strict'

const { Fin_plan } = require('../database/models');

//Get all records in the database
exports.get = (req,res,next) => {
    //method for action in database
    try {
        Fin_plan.findAll().then(ev => res.json(ev)) 
    } catch (error) {
        res.send(error)
    }
 
},

//Create new record in the database
exports.post = (req,res) => {
    
    //method for action in database
    try {
        Fin_plan.create({
            type_plan: req.body.fName,
            period: req.body.lName, 
            purchase: req.body.email, 
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
        User.update(
            { 
                type_plan: req.body.fName,
                period: req.body.lName, 
                purchase: req.body.email, 
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
        User.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send('Usuário deletado')    
    } catch (error) {
        res.send(error)
    }
}

