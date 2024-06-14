const express = require('express');
const pacientes = require('./src/routes/pacientes');
const dotenv = require('dotenv').config();
const connectDB = require('./src/config/db');


const env = process.env.NODE_ENV;

const app = express();
app.use(express.json());
app.use('/pacientes', pacientes)
const port = process.env.PORT || 3000;
connectDB();
app.listen(port, () => console.log(`Now listening on port ${port} in ${process.env.NODE_ENV} mode`))

