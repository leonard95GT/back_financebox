'use strict'

const { Tax } = require('../database/models')

exports.get = (req,res) => {
    try {
        Tax.findAll().then(ev => res.json(ev))           
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.post = (req,res) => {
    try {
        Tax.create({
            name: req.body.name,
            value: req.body.value
        })
        res.status(200).send('Taxa de imposto incluída com sucesso')
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.put = (req,res) => {
    try {
        Tax.update({
            name: req.body.name,
            value: req.body.value
        },
        {
            where: { id: req.params.id }
        })

        res.status(200).send('Imposto alterado com sucesso')
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.delete = (req,res) => {
    try {
        Tax.destroy({
            where: { id: req.params.id }
        })
        res.status(200),send('Imposto excluído com sucesso!')

    } catch (error) {
        send.status(400).send(error)
    }
}