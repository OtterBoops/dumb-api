const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const imageRoutes = require('./routes/imageRoutes.js')

require('dotenv').config()

mongoose.connect(process.env.DB_URL , {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(
    console.log("Database connection successful")
)
.catch(e =>
    console.error("Database connection error: " + e)
)

app.use(cors())
app.use(express.json({limit: '25MB'}))
app.use(bodyParser.urlencoded({ extended: true, limit: '25MB'}))
app.use(bodyParser.raw({limit: '25MB'}))
app.use('/upload', express.static("upload"))
app.use('/api/images', imageRoutes)

app.listen(process.env.BE_PORT, () => 
    console.log("Server is running on Port: " + process.env.BE_PORT)
)
