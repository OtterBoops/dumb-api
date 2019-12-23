import '../../styles/containers/Navigation.scss'

import React from 'react';
import { Box, Button } from '@material-ui/core';
import NavButton from '../elements/NavButton';



function Navigation() {

    return(
        <Box boxShadow={2} mx="auto" display="flex" justifyContent="flex-end" alignItems="center" paddingY={1} paddingX={1}>
            <Box display="flex" justifyContent="space-around" className="navButtons">
                <NavButton value="Random" />
                <NavButton value="Submit" />
            </Box>

            <Box className="spacer">

            </Box>

            <Button className="admin">Admin Area</Button>
        </Box>
    );
}

export default Navigation;