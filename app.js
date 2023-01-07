const express = require('express')
const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()

const tasks = require('./routes/tasks')

app.use(express.json())

const PORT = 3000

app.use(express.static('./public'))
app.use('/api/v1/tasks', tasks)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`Server is Listening on port 3000`)
        })
    }
    catch(error){
        console.log(error);
    }
}

start()
