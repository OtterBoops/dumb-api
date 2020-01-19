import React from 'react'
import { Button } from '@material-ui/core'

const Image = props => (
    <div>
        {props.image.imageName}
        <Button onClick={() => props.onInspect(props.image._id)}>O</Button>
        <Button onClick={() => props.onDelete(props.image._id)}>X</Button>
    </div>
)

export default Image