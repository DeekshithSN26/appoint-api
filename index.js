const express = require("express")
var cors = require('cors')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
// app.use(express.json())
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}))
app.use(cors())
require('./src/db/mongoose-db')
const route = require('./src/routes')


app.use('/api', route)

//App listening to port
app.listen(process.env.APP_PORT, ()=>{
    console.log("Server is running on port : "+process.env.APP_PORT)
})