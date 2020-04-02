const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = new Schema({
    imageName: {
        type: String
    }
})

module.exports = mongoose.model('Image', imageSchema)

