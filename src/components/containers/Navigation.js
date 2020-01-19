import '../../styles/containers/Navigation.scss'

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Box, Button } from '@material-ui/core';

import NavButton from '../elements/NavButton';

import Home from '../Home';
import Insert from '../Insert';
import List from '../List';

function Navigation() {

    return(
        <Router>
            <Box boxShadow={2} mx="auto" display="flex" justifyContent="flex-end" alignItems="center" paddingY={1} marginTop={1} paddingX={2}>
                <Box display="flex" justifyContent="space-around" className="navButtons">

                    <Link to="/">
                        <NavButton value="Home" />
                    </Link>
{/* 
                    <Link to=>
                        <NavButton value="Random" />
                    </Link> */}
{/* 
                    <Link>
                        <NavButton value="Submit" />
                    </Link> */}

                    <Link to="/list">
                        <NavButton value="List" />
                    </Link>

                    <Link to="/insert">
                        <NavButton value="Insert" />
                    </Link>
                </Box>

                <Box className="spacer">

                </Box>

                <Button className="admin">Admin Area</Button>
            </Box>
            <Route path="/" exact component={Home} />
            {/* <Route path="/:id" component={Show} /> */}
            <Route path="/list" component={List} />
            <Route path="/insert" component={Insert} />
            {/* <Route path="/delete" component={Delete} /> */}

        </Router>
    );
}

export default Navigation;