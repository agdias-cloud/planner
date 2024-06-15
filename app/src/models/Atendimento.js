const mongoose = require('mongoose');
const { model, Schema }  = mongoose;

const AtendimentoSchema = new Schema({
    data: Date,
    paciente: mongoose.Types.ObjectId,
    origem: String,  /** Convenio|Particular */
    tipo: String, /** [Consulta|Cirurgia|Procedimento] */
    descricao: String,
    procedimentos: [mongoose.Types.ObjectId],
    convenio: mongoose.Types.ObjectId,
    formaPagamento: String, /** [Especie|Pix|Credito|Debito|Cheque] */
    cheque: {
        agencia: String,
        conta: String,
        parcelas: Number,
        cheques: [Number]
    },
    cartao: {
        parcelas: Number,
        bandeira: String
    },
   
    valor: mongoose.Types.Decimal128,
})

module.exports = model('Atendimento', AtendimentoSchema)