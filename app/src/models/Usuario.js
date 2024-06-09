const mongoose = require('mongoose');
const { model, Schema } = mongoose;
const usuarioSchema = new Schema({
    nome: {
        type: String,
        require: true,
        unique: true
    },
    email: String,
    role: String,
    senha: String,

})

module.exports = model(usuarioSchema, Usuario);