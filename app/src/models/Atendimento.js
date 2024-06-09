const mongoose = require('mongoose');
const { model, Schema }  = mongoose;

const atendimentoSchema = new Schema({
    data: Date,
    paciente: mongoose.Types.ObjectId,
    descricao: String,
    pagamento: {
        tipo: String, /** Debito|Credito|Cheque|Especie|Pix */
        parcelado: Boolean,
        num_parcelas: Number,
        efetivado: Boolean,
    }

})