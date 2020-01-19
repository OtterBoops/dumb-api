const express = require('express')
const app = express()
const imageRoutes = express.Router()

const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const config = require('../src/config/config.js')

let Image = require('./image.model.js')

app.use(cors())
app.use(bodyParser.json())

mongoose.connect(config.DB_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const connection = mongoose.connection

connection.once('open', () => 
    console.log("Database connection successful")
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

app.listen(config.BE_PORT, () => 
    console.log("Server is running on Port: " + config.BE_PORT)
)