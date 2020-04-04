const Image = require('../models/imageModel')

exports.getAll = (req, res) => {
    Image.find((err, images) => 
        err ? console.log(err) : res.json(images)
    )
}

exports.getOne = (req, res) => {
    Image.findById(req.params.id)
    .then(image =>
        res.status(200).json(
            image
        )
    )
    .catch(err =>
        res.status(404).send("Image not found: " + err)    
    )
}

exports.insert = (req, res) => {
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
}

exports.delete = (req, res) => {
    Image.findByIdAndRemove(req.params.id)
    .then(() => 
        res.status(200).json({
            image: "Image deleted"
        })
    )
    .catch(err =>
        res.status(500).send("Error deleting image: " + err)
    )
}

exports.deduplicate = (req, res) => {
    let arr = []
    Image.find((err, images) => 
        err ? console.log(err) : res.send("ra")
    )
    console.log(arr)
}