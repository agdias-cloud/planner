const mongoose = require('mongoose');
const { model, Schema } = mongoose;
const pacienteSchema = new Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    cpf: {
        type: Number,
        required: true,
        unique: true
    },
    sexo: String,
    celular: String,
    nomeMae: String,
    
    atendimentos: [
        {
            data: {
                type: Date,
                required: true,
                unique: true, //The unique Option is Not a Validator
            },
            primeiraConsulta: Boolean,
            particular: Boolean,
            convenio: String,
            origem: String, /** [Convenio | Particular] */
            descricao: String,
            custo: mongoose.Types.Decimal128,
            formaPagamento: String,
            bandeiraCartao: String,
            parcelado: Boolean,
            numParcelas: Number,
        }
    ]

})


module.exports = model('Paciente', pacienteSchema);