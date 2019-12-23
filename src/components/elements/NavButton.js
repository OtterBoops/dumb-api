import React from "react";
import { Button } from '@material-ui/core';

function NavButton (props) {
    return (
        <Button variant="contained" color="primary" className="navButton">{props.value}</Button>
    );

}

export default NavButton;