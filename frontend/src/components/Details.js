import React from "react"
import Button from '@material-ui/core/Button'

import "../styles/containers/Popup.scss"

const Details = props => (
    <div className="Popup">
        <Button onClick={() => props.onClose()}>X</Button>
        <br />
        ID: <br />
        Name: 
        <br />

        <Button onClick={() => props.onDelete(props.image._id)}>trash</Button>
    </div>
)

export default Details