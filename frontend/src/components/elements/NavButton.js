import React from "react"
import { Button } from '@material-ui/core'

function NavButton (props) {
    return (
        <Button variant="contained" color="default" className="navButton">{props.value}</Button>
    )

}

export default NavButton