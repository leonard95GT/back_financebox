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
            company_id: 1,
        }).then(function(resultado){
            res.status(200).json({resultado: resultado.id})
        })
          
    } catch (error) {
        res.status(500).send(error)
    }
  
    
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

exports.grossProfit = (req,res) => {
   //The values are divided monthly
    var receitaLiquida = req.body.receitaLiquida;
    var custo = req.body.custo;
    var lucroBruto = (parseInt(receitaLiquida) - parseInt(custo));
    var receitaBruta = req.body.receitaBruta;

    var resultadoLucro = (((parseInt(lucroBruto)) / (parseInt(receitaBruta))) * 100);
    //var resultadoLucro = ((6000) / (10000) * 100) ;
    


    res.status(200).json({
        resultadoMargem: Math.round(resultadoLucro),
        resultadoProfit: lucroBruto   
    })
}

exports.percentLiquidIncome = (req,res) => {
    var receitaBruta = req.body.receitaBruta;
    var receitaLiquida = req.body.receitaLiquida;

    var resultado = (parseInt(receitaLiquida) / parseInt(receitaBruta))

    res.status(200).json({
        resultado: resultado
    })
}

exports.grossMargin = (req, res) => {
    var receitaBruta = req.body.receitaBruta;
    var lucroBruto = req.body.lucroBruto;

    var resultadoMargem = (parseInt(lucroBruto) / parseInt(receitaBruta))

    res.status(200).json({
        teste:resultadoMargem
    })
}

exports.rol = (req,res) => {
    var despesas = req.body.totalDespesa;
    var receitaLiquida = req.body.receitaLiquida;

    var resultado = ((parseInt(despesas) / parseInt(receitaLiquida)) * 100)

    res.status(200).json({
        resultado: Math.round(resultado)
    })
}

exports.ebitdaCalc = (req, res) => {
    var lucroBruto = req.body.lucroBruto;
    var totalDespesa = req.body.totalDespesa;
    
    var lucroEbitda = (lucroBruto - totalDespesa);
    var margeEbitda = (lucroBruto / totalDespesa)
    res.status(200).json({
        lucro: lucroEbitda,
        margem: margeEbitda
    })
}

exports.liquidIncome = (req,res) => {
    var ebitda = req.body.ebitda;
    var irpj = 0;
    var csll = 0;
    var receitaBruta = req.body.receitaBruta;

    var lucroLiquido = (ebitda - (irpj+csll))

    var percentoLucro = (lucroLiquido / receitaBruta)

    res.status(200).json({
        lucroLiquido: lucroLiquido,
        percentual: percentoLucro
    })
}









