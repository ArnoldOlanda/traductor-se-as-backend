const express = require('express')
const cors = require('cors')
require('dotenv').config()
const traductorRouter = require('./routes/traductor')

const app = express()

app.set('PORT',process.env.PORT || 3500)

app.set(express.json())

app.use(cors())
app.use(express.static('public'))

app.use('/api/traducciones',traductorRouter)

app.listen(app.get('PORT'),()=>{
    console.log(`servidor online in port ${app.get('PORT')}`);
})