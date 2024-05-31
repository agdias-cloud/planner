const mongoose = require('mongoose');
const { model, Schema } = mongoose;
const movimentacaoSchema = new Schema({
    data: Date,
    grupo: String,
    categoria: mongoose.Types.ObjectId,
    descricao: String,
    formaPagamento: String, /** [credito|debito|pix|] */
   
    valor: mongoose.Decimal128,





})


/** forma de pagamento = radio button 
 * se forma de pagamento = credito: abrir popup para inserir a compra na tabela CartaoCredito
 *  Se a forma de pagamento = pix ou débito, abrir modal para inserir a movimentacao na tabela ContaCorrente
 */

module.exports = model('Movimentacao', movimentacaoSchema);