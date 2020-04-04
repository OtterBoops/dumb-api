import React, { Component } from "react"
import axios from "axios"
import AnimatedRoute from './animated/AnimatedRoute'
import ScrollTop from './elements/ScrollTop'

import Image from './Image'

import * as Constants from '../constants/Backend'

const BE_URL = Constants.BE_ADDRESS + ":" + Constants.BE_PORT + "/api"
export default class List extends Component {

    state = {
        images: []
    }

    componentDidMount() {
        axios.get(BE_URL + '/images/get/')
        .then(response => { 
            this.setState({
                images: [
                    ...response.data.map(image => ({
                        ...image,
                        popup: false
                    }))
                ]
            })
        })
        .catch(err => 
            console.log(err)
        )

    }

    handlePopup = (id) => 
        this.setState({
            images: this.state.images.map(image =>
                image._id === id
                ? { ...image, popup: !image.popup }
                : image
            )
        })

    handleDelete = (id) => 
        axios.delete(BE_URL + '/images/delete/' + id)
        .then(() => 
            this.setState({images: this.state.images.filter(image => image._id !== id)})
        )
        .catch(err => 
            console.log("Error deleting. Contact the sysadmin: " + err)
        )

    render() {
        return(
            <AnimatedRoute>
                <div className="List">
                    {this.state.images.map((image, i) => 
                        <Image image={image} key={i} handleDelete={this.handleDelete} handlePopup={this.handlePopup}/>
                    )}
                </div>
                <ScrollTop />
            </AnimatedRoute>
        )
    }
}