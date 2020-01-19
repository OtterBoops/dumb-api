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
    useUnifiedTopology: true
})

const connection = mongoose.connection

connection.once('open', () => 
    console.log(" connected to the db bro")
)

imageRoutes.route('/list').get((req, res) => 
    Image.find((err, images) =>
        err ? console.log(err) : res.json(images)
    )
)

imageRoutes.route('/insert').post((req, res) => {
    let image = new Image(req.body)
    
    image.save()
        .then(() => 
            res.status(200).json({
                image: "image added ;^))"
            })
        )
        .catch(err => 
            res.status(500).send("You're autistic" + err)
        )
})

imageRoutes.route('/delete/:id').delete((req, res) => 
    Image.findByIdAndDelete((err, image) =>
        err ? console.log(err) : res.json(image)
    )
)

app.use('/images', imageRoutes);

app.listen(config.BE_PORT, () => 
    console.log("Server is running on Port: " + config.BE_PORT)
)