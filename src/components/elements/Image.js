import React from 'react'

import Delete from '../Delete'

const Image = props => (
    <div>
        <p>{props.image.image_name}</p>
        <Delete />
    </div>
)

export default Image;