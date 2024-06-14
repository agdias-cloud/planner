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
            data: String,
            primeiraConsulta: Boolean,
            particular: Boolean,
            convenio: Boolean,
            origem: String, /** [Convenio | Particular] */
            descricao: String,
            pagamento: {
                valor: mongoose.Types.Decimal128,
                forma: String, /** [Especie | Debito|Credito Vista|Credito Parcelado|Pix|Cheque|Cheque Parcelado|TED] */
                parcelado: Boolean,
                parcelas: Number,
                bandeiraCartao: String, /** [Visa|Mastercard] */
                cheque: [{
                    banco: String,
                    numero: Number
                }]

            }  

        }

       
    ]

})


module.exports = model('Paciente', pacienteSchema);