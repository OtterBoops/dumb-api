import React from "react"
import Button from '@material-ui/core/Button'
import AnimatedDetails from './animated/AnimatedDetails'

import './../styles/Details.scss'

const Details = props => (
    <AnimatedDetails>
            <div className="DetailsHeader">
            </div>

            <div className="DetailsBody">
                ID: {props.image._id}<br />
                Name: {props.image.imageName}<br />
            </div>

            <div className="DetailsFooter">
                <Button variant="outlined" color="secondary" onClick={() => props.handleDelete(props.image._id)}>Delete</Button>
            </div>
    </AnimatedDetails>
)

export default Details