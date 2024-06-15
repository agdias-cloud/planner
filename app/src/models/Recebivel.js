/**
 * 
 * Aqui iremos cadastrar os pagamentos relativos a cada atendimento
 * 
 */

const mongoose = require('mongoose');
const {model, Schema } = mongoose


const RecebivelSchema = new Schema({
    data: Date,
    atendimento: mongoose.Types.ObjectId,
    valor: mongoose.Types.Decimal128
})

module.exports = model('Recebivel', RecebivelSchema);

