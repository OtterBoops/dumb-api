import React, { Component } from 'react'
import Details from './Details'
import Button from '@material-ui/core/Button'
import { KeyboardArrowDown, KeyboardArrowUp} from '@material-ui/icons';

export default class Image extends Component {
    render() {
        return(
            <div className="Image">
                <Button className="ImageItem" onClick={() => this.props.handlePopup(this.props.image._id)}>
                    <p>{this.props.image.imageName}</p>
                    {this.props.image.popup ? <KeyboardArrowUp/> : <KeyboardArrowDown/> }
                </Button>
                {this.props.image.popup
                ? <Details image={this.props.image} handleDelete={this.props.handleDelete} /> 
                : null
                }
            </div>

            )
        }
}