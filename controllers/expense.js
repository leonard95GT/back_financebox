const { Expense } = require('../database/models')

exports.get = (req,res) => {
    try {
        Expense.findAll().then(ev => res.json(ev))
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.post = (req,res) => {
    try {
        Expense.create({
            title: req.body.title,
            value_year: req.body.value_year,
            typeExpense: req.body.typeExpense
        })

        res.status(200).send('Despesa cadastrada com sucesso')
    } catch (error) {
        res.status(400).send(error)        
    }
}

exports.put = (req,res) => {
    try {
        Expense.update({
            title: req.body.title,
            value_year: req.body.value_year,
            typeExpense: req.body.typeExpense
        },
        {
            where: {id: req.params.id}
        })

        res.status(200).send('Despesa atualizada com sucesso.')
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.delete = (req,res) => {
    try {
        Expense.destroy({
            where: {id: req.params.id}
        })
        res.status(200).send('Despesa excluída com sucesso')
    } catch (error) {
        res.status(400).send(error)
    }
}