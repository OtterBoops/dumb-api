import React, { Component } from "react"
import axios from "axios"
import AnimatedRoute from './animated/AnimatedRoute'

import Image from './elements/Image'

import * as Constants from '../constants/Backend'

const BE_URL = Constants.BE_ADDRESS + ":" + Constants.BE_PORT + "/api"
export default class List extends Component {

    constructor(props) {
        super(props)

        this.state = {
            images: [],
        }
    }

    componentDidMount() {
        axios.get(BE_URL + '/images/get/')
            .then(response => 
                this.setState({ images: response.data })
            )
            .catch(err => 
                console.log(err)
            )
    }

    handleInspect = (id) => {
        axios.get(BE_URL + '/images/get/' + id)
        .then(res => {
            console.log(res.data);
        })
        .catch(err =>
            console.log("Unable to find image" + err)
        )
    }

    handleDelete = (id) => {
        axios.delete(BE_URL + '/delete/' + id)
        .then(() => 
            this.setState({images: this.state.images.filter((image) => image._id !== id)}) 
        )
        .catch(err => 
            console.log("Error deleting. Contact the sysadmin: " + err)
        )
    }

    render() {
        return(
            <AnimatedRoute>
                {this.state.images.map((image, i) => 
                    <Image className="Image" image={image} key={i} onInspect={this.handleInspect} />
                    )}
            </AnimatedRoute>
        )
    }
}