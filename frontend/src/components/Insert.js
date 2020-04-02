import React, { Component } from "react"
import axios from 'axios'
import AnimatedRoute from './animated/AnimatedRoute'

import * as Constants from '../constants/Backend'

const BE_URL = Constants.BE_ADDRESS + ":" + Constants.BE_PORT + "/api"

export default class Insert extends Component {
    constructor (props) {
        super(props)

        this.state = {
            imageName: '',
        }
    }

    onChangeImageName = e => 
        this.setState({
            imageName: e.target.value
        })
    
    onSubmit = e => {
        e.preventDefault()

        const newImage = {
            imageName: this.state.imageName
        }

        axios.post(BE_URL+ '/images/insert/', newImage)
        .then(res => console.log(res.data))
        .catch(res => console.log(res))

        this.setState({
            imageName: '',
        })
    }

    render() {
        return(
            <AnimatedRoute>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Thonk: </label>
                        <input type="text" value={this.state.imageName} onChange={this.onChangeImageName}/>
                    </div>

                    <div>
                        <input type="submit" value="Insert"/>
                    </div>
                </form>
            </AnimatedRoute>
        )
    }
}