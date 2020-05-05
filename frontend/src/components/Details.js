import React, { Component } from "react"
import Button from '@material-ui/core/Button'
import AnimatedDetails from './animated/AnimatedDetails'
import * as Constants from '../constants/Backend'

import './../styles/Details.scss'

const BE_URL = Constants.BE_ADDRESS + ":" + Constants.BE_PORT

export default class Details extends Component {

    render() {
        return(
            <AnimatedDetails>
                    <div className="DetailsHeader">
                    </div>

                    <div className="DetailsBody">
                        <img src={BE_URL + "/upload/" + this.props.image.randomName} alt=""/>
                        <div>
                            ID: {this.props.image._id}<br />
                            Name: {this.props.image.imageName}<br />
                            Size: {this.props.image.imageSize}<br />
                        </div>

                    </div>

                    <div className="DetailsFooter">
                        <Button variant="outlined" color="secondary" onClick={() => this.props.handleDelete(this.props.image._id)}>Delete</Button>
                    </div>
            </AnimatedDetails>
        )
    }
}