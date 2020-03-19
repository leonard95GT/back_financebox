'use strict'
const { Distribution_Channel } = require('../database/models');


//Get all records in the database
exports.get = (req,res) => {
    try {
        Distribution_Channel.findAll().then(ev => res.json(ev)) 
    } catch (error) {
        res.send(error)
    }

  
 
},

//Create new record in the database
exports.post = (req,res) => {
    try {
        Distribution_Channel.create({
            channelName:        req.body.channelName,
            categoryProduct:    req.body.categoryProduct, 
            salesQt:            req.body.salesQt, 
            salesPrice:         req.body.salesPrice,
            costType:           req.body.costType,
            projection_id:      req.body.projection_id,
            cpv_feedstock:      req.body.cpv_feedstock,
            cpv_indirect_cost:  req.body.cpv_indirect_cost,
            cpv_labor:          req.body.cpv_labor,
            total_cost:         req.body.total_cost,
        })
        res.send('Canal de distribuição cadastrado com sucesso!');  
    } catch (error) {
        res.send(error)
    }x
  
    
},

//Update a especific record in database
exports.put = (req,res) => {        
    //method for action in database
    try {
        Distribution_Channel.update(
            { 
                channelName:        req.body.channelName,
                categoryProduct:    req.body.categoryProduct, 
                salesQt:            req.body.salesQt, 
                salesPrice:         req.body.salesPrice,
                costType:           req.body.costType,
                projection_id:      req.body.projection_id,
                cpv_feedstock:      req.body.cpv_feedstock,
                cpv_indirect_cost:  req.body.cpv_indirect_cost,
                cpv_labor:          req.body.cpv_labor,
                total_cost:         req.body.total_cost,
            },
            { 
                where: { id: req.params.id} 
            }
          );
          res.send('Canal de distribuição atualizado com sucesso')
    } catch (error) {
        res.send(error)
    }


},

//Delete a specific record in database
exports.delete = (req,res) => {

    //method for action in database
    try {
        Distribution_Channel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send('Canal de distribuição deletado com sucesso')    
    } catch (error) {
        res.send(error)
    }
}

