const mongoose = require('mongoose')
const connectionUrl = process.env.DB_CONNECTION_URL
const databaseName = process.env.DATABASE_NAME

mongoose.connect(connectionUrl + '/' + databaseName, {}).then(()=>{
    console.log("Database Connection Successful!!!")
}).catch((err)=>{
    console.log("Database Connection Failed!!!", err)
})