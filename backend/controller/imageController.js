const fs = require('fs')
const crypto = require('crypto')
const Image = require('../models/imageModel')

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
    let request = JSON.stringify(req.body.image)
    let randname = crypto.randomBytes(10).toString('hex')
    let extension = request.split(';')[0].split('/')[1];
    let b64 = request.split(',').pop().replace("\"", "")
    fs.writeFile('./upload/' + randname + '.' + extension, b64, {encoding: 'base64'}, (err) => {
        err ? console.log(err) : console.log("good shit")
    })
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

exports.deduplicate = (req, res) => {
    let arr = []
    Image.find((err, images) => 
        err ? console.log(err) : res.send("ra")
    )
    console.log(arr)
}