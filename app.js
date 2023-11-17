const express = require('express')

const { mongoConn } = require('./databases/configuration')
const dotenv = require('dotenv').config()
const cors = require('cors')

mongoConn()

const app = express()

app.use(express.json())

app.use(cors({
    origin: '*'
}))

const proyecto = require('./routes/proyecto')



app.use('/api/v1/proyectos',proyecto)



module.exports = app