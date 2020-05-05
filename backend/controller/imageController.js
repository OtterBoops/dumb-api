const fs = require('fs')
const crypto = require('crypto')
const Image = require('../models/imageModel')

checkExtension = (extension) => 
    extension.match(/(jpg|jpeg|png)$/i) ? true : false

exports.getAll = (req, res) =>
    Image.find((err, images) => 
        err 
        ? res.status(500).json({
            status: "error",
            message: "Could not load images",
            error: err
        })
        : res.status(200).json({
            status: "success",
            data: images
        })
    )

exports.getOne = (req, res) =>
    Image.findById(req.params.id)
    .then(image => {
        if (!image) return res.status(404).json({
            status: "error",
            message: "Image not found"
        })

        res.status(200).json({
            status: "success",
            data: image
        })

    })
    .catch(err =>
        res.status(500).json({
            status: "Error",
            message: "Unhandled error",
            error: err
        })
    )

exports.insert = (req, res) => {
    let imageType = req.body.type.split('/')[1]
    let imageB64 = req.body.imageData.split(',').pop().replace("\"", "")
    let randomName = crypto.randomBytes(10).toString('hex')
    
    if (!checkExtension(imageType)) return res.status(415).json({
        status: "fail",
        data: {
            message: "Invalid file type",
            extension: imageType
        }
    })

    let writeStream = fs.createWriteStream("upload/" + randomName + '.' + imageType)
    writeStream.write(imageB64, 'base64', (err) => {
        return res.status(500).json({
            status: "error",
            message: "Unable to write file",
            error: err 
        })
    })

    let image = new Image({
        imageName: req.body.name,
        randomName: randomName + "." + imageType,
        imageSize: req.body.size,
        imageType,
        lastModified: req.body.lastModified,
    })

    image.save()
    .then(
        res.status(200).json({
            status: "success",
            data: null
        })
    )
    .catch(err => 
        res.status(500).json({
            status: "error",
            message: "Error uploading image: ",
            error: err
        })
    )
}

exports.delete = (req, res) => {
    // let test = "5eaf01da3a0ff7423cfbfa36"

    Image.findById(test, 'randomName', {lean: true})
    .then(image => {
        if (!image) return res.status(404).json({
            status: "error",
            message: "Could not find image ID"
        })
    })
}

exports.count = (req, res) =>
    Image.countDocuments({})
    .then(count => 
        res.json(count)
    )
