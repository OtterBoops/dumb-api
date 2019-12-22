import React from 'react';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';


function Navigation() {

    return(

        <Box boxShadow={2} mx="auto" display="flex" justifyContent="space-evenly" paddingY={1}>
            <Button variant="contained" color="default">AAA</Button>
            <Button variant="contained" color="default">BBB</Button>
            <Button variant="contained" color="default">BBB</Button>
            <Button variant="contained" color="default">BBB</Button>
            <Button variant="contained" color="default">BBB</Button>
        </Box>
    );
}

export default Navigation;