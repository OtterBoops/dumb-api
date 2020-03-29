const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Image = new Schema({
    imageName: {
        type: String
    }
})

module.exports = mongoose.model('Image', Image)