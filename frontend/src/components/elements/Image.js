import React, { Component } from 'react'
import Details from '../Details'
import Button from '@material-ui/core/Button'

export default class Image extends Component {
    constructor (props) {
        super(props)

        this.state = {
            image: [],
            popup: false
        }
    }


    handleClose = () => {
        this.setState({
            popup: false,
        })        
    }

    render() {
        return(
            <div>
            {this.props.image.imageName}
            <Button onClick={() => this.props.onInspect(this.props.image._id)}>O</Button>
            
            {this.state.popup ? <Details onClose={this.handleClose} onDelete={this.handleDelete} /> : null}
            </div>
            )
        }
}
    
    // const Image = props => (
    //     <div>
    //         {props.image.imageName}
    //         <Button onClick={() => props.onInspect(props.image._id)}>O</Button>
    
    //         {this.state.popup ? <Details onClose={this.handleClose} onDelete={this.handleDelete} /> : null}
    //     </div>
    // )
    
    // export default Image