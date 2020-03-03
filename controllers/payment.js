'use strict'

const { Payment } = require('../database/models/payment');


//Get all records in the database
exports.get = (req,res,next) => {
    //method for action in database
    try {
        Payment.findAll().then(ev => res.json(ev)) 
    } catch (error) {
        res.send(error)
    }
 
},

//Create new record in the database
exports.post = (req,res) => {
    //method for action in database
    try {
        Payment.create({
            type_payment: req.body.fName,
            titularName: req.body.lName, 
            cart_number: req.body.email, 
            shelf_life: req.body.phone,
            security_code: req.body.level,
            value: senha,
            finance_plan_id: req.body.level,
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
        Payment.update(
            { 
                type_payment: req.body.fName,
                titularName: req.body.lName, 
                cart_number: req.body.email, 
                shelf_life: req.body.phone,
                security_code: req.body.level,
                value: senha,
                finance_plan_id: req.body.level,
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
        Payment.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send('Usuário deletado')    
    } catch (error) {
        res.send(error)
    }
}

