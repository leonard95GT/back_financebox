'use strict'

const { User } = require('../database/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth')

var salt = bcrypt.genSaltSync(10)


//Get all records in the database
exports.get = (req,res,next) => {
    //method for action in database 
    try {
        User.findAll().then(ev => res.json(ev)) 
    } catch (error) {
        res.send(error)
    }
 
},

//Get all records in the database
exports.getOne = async(req,res,next) => {
    let email = req.body.email;
    let pass = req.body.password 

    const user = await User.findOne({
        where:{
            email:email
        }
    })
    
    if(!user)
    return res.status(400).send({error: 'E-mail não cadastrado'});
    
    if(!await bcrypt.compare(pass, user.password))
    return res.status(400).send({error: 'Senha inválida'});

    const token = jwt.sign({id: user.id},authConfig.secret, {expiresIn:86400})

    user.password = undefined;

    res.send({ user, token })
 
},

//Create new record in the database
exports.post = async(req,res) => {
        var senha = req.body.password
        var senhaParaSalvar = bcrypt.hashSync(senha, salt);
        var email = req.body.email;
        if(await User.findOne({email}))
        return res.status(400).send({error: 'E-mail já cadastrado'})

        //method for action in database
    try {
        User.create({
            firstName: req.body.fName,
            lastName: req.body.lName, 
            email: req.body.email, 
            phone: req.body.phone,
            level: req.body.level,
            password: senhaParaSalvar
        });
        res.send('Usuário cadastrado com sucesso!');  
    } catch (error) {
        res.send(error)
    }
  
    
},

//Update a especific record in database
exports.put = (req,res) => {
    var senha = req.body.password
    var senhaParaSalvar = bcrypt.hashSync(senha, salt);
    
    //method for action in database
    try {
        User.update(
            { 
                firstName: req.body.fName,
                lastName: req.body.lName, 
                email: req.body.email, 
                phone: req.body.phone,
                level: req.body.level,
                password: senhaParaSalvar
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

