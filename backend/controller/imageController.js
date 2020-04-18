// const fs = require('fs')
// const crypto = require('crypto')
const Image = require('../models/imageModel')

checkExtension = (extension) => 
    extension.match(/(jpg|jpeg|png)$/i) ? true : false

exports.getAll = (req, res) =>
    Image.find((err, images) => 
        err ? console.log(err) : res.json(images)
    )

exports.getOne = (req, res) =>
    Image.findById(req.params.id)
    .then(image =>
        res.status(200).json(
            image
        )
    )
    .catch(err =>
        res.status(404).send("Image not found: " + err)    
    )

exports.insert = (req, res) => {
    let imageType = req.body.type.split('/')[1]
    
    if (!checkExtension(imageType)) {
        res.status(415).json({
            status: "Invalid extension"
        })
        return
    }

    let image = new Image({
        imageName: req.body.name,
        imageSize: req.body.size,
        imageType,
        lastModified: req.body.lastModified,
        imageB64: req.body.imageData.split(',').pop().replace("\"", "")
    })

    image.save()
    .then(
        res.status(200).json({status: "Image saved" })
    )
    .catch(err => 
        res.status(500).json({status: "Error uploading image: " + err})
    )
}

exports.delete = (req, res) =>
    Image.findByIdAndRemove(req.params.id)
    .then(() => 
        res.status(200).json({
            image: "Image deleted"
        })
    )
    .catch(err =>
        res.status(500).send("Error deleting image: " + err)
    )

exports.count = (req, res) =>
    Image.countDocuments({})
    .then(count => 
        res.json(count)
    )
