import React, { Component } from "react"
import Button from '@material-ui/core/Button'
import AnimatedDetails from './animated/AnimatedDetails'

import './../styles/Details.scss'

export default class Details extends Component {
    render() {
        return(
            <AnimatedDetails>
                    <div className="DetailsHeader">
                    </div>

                    <div className="DetailsBody">
                        <img src={'data:image/' + this.props.image.imageType + ';base64,' + this.props.image.imageB64} alt=""/>
                        ID: {this.props.image._id}<br />
                        Name: {this.props.image.imageName}<br />
                        Size: {this.props.image.imageSize}<br />

                    </div>

                    <div className="DetailsFooter">
                        <Button variant="outlined" color="secondary" onClick={() => this.props.handleDelete(this.props.image._id)}>Delete</Button>
                    </div>
            </AnimatedDetails>
        )
    }
}