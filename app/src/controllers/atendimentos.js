const Paciente = require('../models/Paciente');

exports.criarAtendimento = async (req, res, next) => {
    
    try {
        console.log(req.params.id)
        const paciente = await Paciente.findById(req.params.id);
        const atendimento = {
            data: req.data,
            primeiraConsulta: req.primeiraConsulta,
            convenio: req.convenio,
            origem: req.origem,
            descricao: req.descricao,
        }
       console.log(req.params.id)
    } catch (error) {
        next(error)
    }
}