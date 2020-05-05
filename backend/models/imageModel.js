const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = new Schema({
    givenName: {
        type: String
    },

    imageName: {
        type: String
    },
    
    randomName: {
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
    }

})
module.exports = mongoose.model('Image', imageSchema)
