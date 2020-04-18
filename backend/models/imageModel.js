const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AutoIncrement = require('mongoose-sequence')(mongoose)

const imageSchema = new Schema({
    givenName: {
        type: String
    },

    imageName: {
        type: String
    },

    imageSize: {
        type: Number
    },

    imageType: {
        type: String
    },

    lastModified: {
        type: Number
    },

    imageB64: {
        type: String
    }
})
module.exports = mongoose.model('Image', imageSchema)
