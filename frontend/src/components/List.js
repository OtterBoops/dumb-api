import React, { Component } from "react"
import axios from "axios"
import AnimatedRoute from './animated/AnimatedRoute'
import ScrollTop from './elements/ScrollTop'

import Image from './Image'

import * as Constants from '../constants/Backend'

const BE_URL = Constants.BE_ADDRESS + ":" + Constants.BE_PORT
export default class List extends Component {

    state = {
        images: []
    }

    componentDidMount() {
        axios.get(BE_URL + '/api/images/get/')
        .then(response => { 
            this.setState({
                images: [
                    ...response.data.data.map(image => ({
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

    isEmpty = () => { 
        return (this.state.images.length === 0) ? true :false
    }

    handleDelete = (id) => 
        axios.delete(BE_URL + '/api/images/delete/' + id)
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
                    {this.isEmpty() ?  <div>No images to show.</div> : null}
                </div>
                <ScrollTop />
            </AnimatedRoute>
        )
    }
}