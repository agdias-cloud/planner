const mongoose = require('mongoose');

const { model, Schema } = new Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    descricao: String,
    
})