import React from "react"
import axios from 'axios'

import Content from '../components/containers/Content'

import * as Constants from '../constants/constants'

const BE_URL = Constants.BE_ADDRESS + ":" + Constants.BE_PORT + "/images"

export default class Insert extends Content {
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

        axios.post(BE_URL+ '/insert/', newImage)
            .then(res => console.log(res.data))
            .catch(res => console.log(res))

        this.setState({
            imageName: '',
        })
    }

    render() {
        return(
            <Content>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Thonk: </label>
                        <input type="text" value={this.state.imageName} onChange={this.onChangeImageName}/>
                    </div>

                    <div>
                        <input type="submit" value="Insert"/>
                    </div>
                </form>
            </Content>
        )
    }
}