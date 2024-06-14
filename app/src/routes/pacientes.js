const express = require('express')
const router = express.Router();
const { 
  criarPaciente,
  listarPacientes, 
  criarAtendimento
} = require('../controllers/pacientes');


router
  .route('/')
  .post(criarPaciente)
  .get(listarPacientes)
  .put(criarAtendimento)

  router
    .route('/:id')
    .put(criarAtendimento)
   

  module.exports = router;