import React, { Component } from "react"
import axios from 'axios'
import AnimatedRoute from './animated/AnimatedRoute'

import * as Constants from '../constants/Backend'

const BE_URL = Constants.BE_ADDRESS + ":" + Constants.BE_PORT + "/api"
    
const toBase = file => new Promise((res, rej) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => res(reader.result)
    reader.onerror = error => rej(error)
})

export default class Insert extends Component {
    constructor (props) {
        super(props)

        this.state = {
            imageName: '',
            imageFile: null
        }
    }

    onChangeName = e => 
        this.setState({
            imageName: e.target.value,

        })
    
    onChangeFile = e =>
        this.setState({
            imageFile: e.target.files[0],
        })

    onSubmit = e => {
        e.preventDefault()
        const file = this.state.imageFile
        toBase(file)
        .then(res => 
            axios.post(BE_URL + '/images/insert', {
                image: res
            })    
        )
    }

    render() {
        return(
            <AnimatedRoute>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Thonk: </label>
                        <input type="text" value={this.state.imageName} onChange={this.onChangeName}/>
                        <input
                            type="file"
                            name="image"
                            onChange={this.onChangeFile}
                        />
                    </div>

                    <div>
                        <input type="submit" value="Upload"/>
                    </div>
                </form>
            </AnimatedRoute>
        )
    }
}