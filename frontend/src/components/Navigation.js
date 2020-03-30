import React from 'react'
import { NavLink  } from 'react-router-dom'

import '../styles/Header.scss'

function Navigation() {

    return(
        <nav>
            <NavLink exact to="/" className="NavLink" activeClassName="NavLink-active">Home</NavLink>
            <NavLink to="/List" className="NavLink" activeClassName="NavLink-active">List</NavLink>
            <NavLink to="/Insert" className="NavLink" activeClassName="NavLink-active">Insert</NavLink>
        </nav>
    )
}

export default Navigation