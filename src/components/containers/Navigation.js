import '../../styles/containers/Navigation.scss'

import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Box, Button } from '@material-ui/core';

import NavButton from '../elements/NavButton';
import List from '../List';
import Insert from '../Insert';
import Delete from '../Delete';
import Edit from '../Edit';
import Show from '../Show';

function Navigation() {

    return(
        <Router>
            <Box boxShadow={2} mx="auto" display="flex" justifyContent="flex-end" alignItems="center" paddingY={1} paddingX={1}>
                <Box display="flex" justifyContent="space-around" className="navButtons">
                    <Link>
                        <NavButton value="Random" />
                    </Link>

                    <Link>
                        <NavButton value="Submit" />
                    </Link>

                    <Link to="/list">
                        <NavButton value="List" />
                    </Link>

                    <Link to="/insert">
                        <NavButton value="Insert" />
                    </Link>

                    <Link to="/edit">
                        <NavButton value="Edit" />
                    </Link>
                </Box>

                <Box className="spacer">

                </Box>

                <Button className="admin">Admin Area</Button>
            </Box>
            <Route path="/show/:id" component={Show} />
            <Route path="/list" component={List} />
            <Route path="/insert" component={Insert} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/delete" component={Delete} />

        </Router>
    );
}

export default Navigation;