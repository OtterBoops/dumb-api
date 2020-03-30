import React, { Component } from "react"
import axios from "axios"
import { Box } from "@material-ui/core"

import Image from './elements/Image'

import * as Constants from '../constants/constants'

const BE_URL = Constants.BE_ADDRESS + ":" + Constants.BE_PORT + "/images"
export default class List extends Component {

    constructor(props) {
        super(props)

        this.state = {
            images: [],
        }
    }

    componentDidMount() {
        axios.get(BE_URL + '/get/')
            .then(response => 
                this.setState({ images: response.data })
            )
            .catch(err => 
                console.log(err)
            )
    }

    handleInspect = (id) => {
        axios.get(BE_URL + '/get/' + id)
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
            <Box width="70%" boxShadow="5" className="Content">
                {this.state.images.map((image, i) => 
                    <Image className="Image" image={image} key={i} onInspect={this.handleInspect} />
                )}
            </Box>
        )
    }
}