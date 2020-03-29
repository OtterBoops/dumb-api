import React, { Component } from 'react'
import { Box } from "@material-ui/core"

export class Content extends Component {
    render() {
        return( 
            <Box width="70%" boxShadow="2" m="auto" mt={5}>
                {this.props.children}
            </Box>
        )
    }
}

export default Content