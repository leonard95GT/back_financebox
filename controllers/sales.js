'use strict'

const { Sales } = require('../database/models');


//Get all records in the database
exports.get = (req,res,next) => {
    //method for action in database
    try {
        Sales.findAll().then(ev => res.json(ev)) 
    } catch (error) {
        res.send(error)
    }
 
},

//Create new record in the database
exports.post = (req,res) => {    
    //method for action in database
    try {
        Sales.create({
            client: req.body.fName,
            product_service: req.body.lName, 
            quantity: req.body.email, 
            unit_price: req.body.phone,
            total_price: req.body.level,
            client_company_id: senha
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
        Sales.update(
            { 
                client: req.body.fName,
                product_service: req.body.lName, 
                quantity: req.body.email, 
                unit_price: req.body.phone,
                total_price: req.body.level,
                client_company_id: senha
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
        Sales.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send('Usuário deletado')    
    } catch (error) {
        res.send(error)
    }
}

