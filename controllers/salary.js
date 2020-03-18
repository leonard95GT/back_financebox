'use strict'
const { Salary_position } = require('../database/models');


//Get all records in the database
exports.get = (req,res) => {
    try {
        Salary_position.findAll().then(ev => res.json(ev)) 
    } catch (error) {
        res.send(error)
    }

  
 
},

//Create new record in the database
exports.post = (req,res) => {
    try {
        if(req.body.title == null){
            res.status(400).send('Valores inválidos')
        }else if(req.body.value_year == null){
            res.status(400).send('Valores inválidos')
        }else{
            Salary_position.create({
                title:        req.body.title,
                value_year:    req.body.value_year, 
            })
            res.send('Inserção de Salário/Cargo na planilha feita com sucesso!');      
        }
    } catch (error) {
        res.send(error)
    }x
  
    
},

//Update a especific record in database
    exports.put = (req,res) => {        
    //method for action in database
    try {
        Salary_position.update(
            { 
                title:        req.body.title,
                value_year:    req.body.value_year, 
            },
            { 
                where: { id: req.params.id} 
            }
          );
          res.send('Salário / Cargo atualizado com sucesso')
    } catch (error) {
        res.send(error)
    }


},

//Delete a specific record in database
exports.delete = (req,res) => {

    //method for action in database
    try {
        Salary_position.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send('Canal de distribuição deletado com sucesso')    
    } catch (error) {
        res.send(error)
    }
}

