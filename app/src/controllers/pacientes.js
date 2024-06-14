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
                "origem": req.body.origem,
                "primeiraConsulta": req.body.primeiraConsulta,
                "convenio": req.body.convenio,
               
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



