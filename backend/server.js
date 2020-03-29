
const express = require('express')
const app = express()
const imageRoutes = express.Router()

const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

let Image = require('./models/image.model.js')

app.use(cors())
app.use(bodyParser.json())

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
    console.log("Database connection error: " + e)
)

imageRoutes.route('/get').get((req, res) => 
    Image.find((err, images) =>
        err ? console.log(err) : res.json(images)
    )
)

imageRoutes.route('/get/:id').get((req, res) =>
    Image.findById(req.params.id)
    .then(image =>
        res.status(200).json(
            image
        )
    )
    .catch(err =>
        res.status(404).send("Image not found: " + err)    
    )
)

imageRoutes.route('/insert').post((req, res) => {
    let image = new Image(req.body)
    
    image.save()
        .then(() => 
            res.status(200).json({
                image: "Image added"
            })
        )
        .catch(err => 
            res.status(500).send("Error adding image: " + err)
        )
})

imageRoutes.route('/delete/:id').delete((req, res) => 
    Image.findByIdAndRemove(req.params.id)
        .then(() => 
            res.status(200).json({
                image: "Image deleted"
            })
        )
        .catch(err =>
            res.status(500).send("Error deleting image: " + err)
        )
)

app.use('/images', imageRoutes)

app.listen(process.env.BE_PORT, () => 
    console.log("Server is running on Port: " + process.env.BE_PORT)
)