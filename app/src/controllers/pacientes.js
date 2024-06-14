const Paciente = require('../models/Paciente');
const { parse }  = require('date-fns');

exports.criarPaciente = async (req,res,next) => {
    try {
        const paciente = await Paciente.create(req.body);
        res.send(paciente)
    } catch (error) {
        next(error)
    }
}



exports.listarPacientes = async (req, res, next) => {
    try {
        const pacientes = await Paciente.find();
        res.json({
            sucess: true,
            data: pacientes
        })
    } catch (error) {
        next(error)
    }
}

exports.criarAtendimento = async(req, res, next) => {
  try {
    const filter = { _id: req.params.id}
    const update = { 
        $push: {
            "atendimentos": {
                "data": parse(req.body.data, 'dd/MM/yyyy', new Date()),
                "primeiraConsulta": req.body.primeiraConsulta,
                "particular": req.body.particular,
                "convenio": req.body.convenio,
                "origem": req.body.origem,
                "descricao": req.body.descricao,
                "custo": req.body.custo,
                "formaPagamento": req.body.formaPagamento,
                "bandeiraCartao": req.body.bandeiraCartao,
                "parcelado": req.body.parcelado,
                "numParcelas": req.body.numParcelas 
            }
        }
     }
    
    const paciente = await Paciente.findOneAndUpdate(filter, update);
    res.json({
        data: paciente
    })
     
  } catch (error) {
    next(error)
  }
}



