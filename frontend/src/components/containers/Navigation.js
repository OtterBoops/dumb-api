import '../../styles/containers/Navigation.scss'

import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Box } from '@material-ui/core'

import NavButton from '../elements/NavButton'

import Home from '../Home'
import Insert from '../Insert'
import List from '../List'

function Navigation() {

    return(
        <Router>
            <Box boxShadow={2} mx="auto" display="flex" justifyContent="flex-end" alignItems="center" paddingY={1} marginTop={1} paddingX={2}>
                <Box display="flex" justifyContent="space-around" className="navButtons">

                    <Link to="/">
                        <NavButton value="Home" />
                    </Link>

                    <Link to="/get">
                        <NavButton value="List" />
                    </Link>

                    <Link to="/insert">
                        <NavButton value="Insert" />
                    </Link>
                </Box>

                <Box className="spacer">

                </Box>
            </Box>

            <Route path="/" exact component={Home} />
            <Route path="/get" component={List} />
            <Route path="/insert" component={Insert} />

        </Router>
    )
}

export default Navigation