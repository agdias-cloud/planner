const mongoose = require('mongoose');
const { model, Schema } = model;
const pacienteSchema = new Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    genero: String,
    celular: String,
    nome_mae: String,
    convenio: mongoose.Types.ObjectId,
    prontuario: {
        data: Date,
        efetivado: Boolean,
        descricao: String
    }

})