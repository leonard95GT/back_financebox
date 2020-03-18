const { Variable_Cost } = require('../database/models')

exports.get = (req,res) => {
    try {
        Variable_Cost.findAll().then(ev => res.json(ev))
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.post = (req,res) => {
    try {
        Variable_Cost.create({
            title: req.body.title,
            value_year: req.body.value_year,
            typeCost: req.body.typeCost
        })

        res.status(200).send('Custo cadastrado com sucesso')
    } catch (error) {
        res.status(400).send(error)        
    }
}

exports.put = (req,res) => {
    try {
        Variable_Cost.update({
            title: req.body.title,
            value_year: req.body.value_year,
            typeCost: req.body.typeCost
        },
        {
            where: {id: req.params.id}
        })

        res.status(200).send('Custo atualizado com sucesso.')
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.delete = (req,res) => {
    try {
        Variable_Cost.destroy({
            where: {id: req.params.id}
        })
        res.status(200).send('Custo excluído com sucesso')
    } catch (error) {
        res.status(400).send(error)
    }
}