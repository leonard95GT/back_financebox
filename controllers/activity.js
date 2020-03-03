'use strict'
const { Activity } = require('../database/models');


//Get all records in the database
exports.get = (req,res,next) => {
    //method for action in database
    try {
        Activity.findAll().then(ev => res.json(ev)) 
    } catch (error) {
        res.send(error)
    }
 
},

//Create new record in the database
exports.post = (req,res) => {
    //method for action in database
    try {
        Activity.create({
            type_activity_id: req.body.typeActivity,
            value: req.body.valueActivity, 
            client_company_id: req.body.clientCompany, 
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
        Activity.update(
            { 
             type_activity_id: req.body.typeActivity,
             value: req.body.valueActivity, 
             client_company_id: req.body.clientCompany, 
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
        Activity.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send('Usuário deletado')    
    } catch (error) {
        res.send(error)
    }
}

