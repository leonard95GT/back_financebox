'use strict'
const { projection } = require('../database/models');


//Get all records in the database
exports.get = (req,res,next) => {
    //method for action in database
    //const id = req.params.id
    try {
        projection.findAll().then(ev => res.json(ev)) 
    } catch (error) {
        res.send(error)
    }
 
},

//Create new record in the database
exports.post = (req,res) => {
    //method for action in database
    try {
        projection.create({
            fixed_income_last_year: req.body.renda_ano_passado,
            grow_up_type: req.body.tipo_crescimento_ano,
            grow_up_value: req.body.crescimento_ano,
            grown_up_percent: req.body.porcento_ano,
            ebitda_type: req.body.meta_ebitda,
            ebitda_value: req.body.crescimento_ebitda,
            goal_ebiebitda_percenttda_percent: req.body.porcento_crescimento_ebitda,
            //company_id: req.body.company_id,
        })
        res.send('Projeção cadastrada com sucesso!');  
    } catch (error) {
        res.send(error)
    }x
  
    
},

//Update a especific record in database
exports.put = (req,res) => {        
    //method for action in database
    try {
        projection.update(
            { 
                last_year_fixed_income: req.body.last_year_fixed_income,
                grown_up_goal: req.body.grown_up_goal,
                grown_up_type: req.body.grown_up_type,
                grown_up_percent: req.body.grown_up_percent,
                goal_ebitda: req.body.goal_ebitda,
                goal_ebitda_type: req.body.goal_ebitda_type,
                goal_ebitda_percent: req.body.goal_ebitda_percent,
                company_id: req.body.company_id,
                },
            { 
                where: { id: req.params.id} 
            }
          );
          res.send('PRojeção atualizada')
    } catch (error) {
        res.send(error)
    }


},

//Delete a specific record in database
exports.delete = (req,res) => {

    //method for action in database
    try {
        projection.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send('Projeção deletada')    
    } catch (error) {
        res.send(error)
    }
}

