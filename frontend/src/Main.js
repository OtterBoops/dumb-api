import 'typeface-roboto'
import './styles/Main.scss'

import React from 'react'
import Box from '@material-ui/core/Box'
import {BrowserRouter as Router, Route} from 'react-router-dom'


import Header from './components/Header'
import Home from './components/Home'
import List from './components/List'
import Insert from './components/Insert'
import Footer from './components/Footer'

function Main() {
  return (
    <Router>
      <Box width="100%" mx="auto" className="Main">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/list" component={List} />
        <Route path="/insert" component={Insert} />
        <Footer />
      </Box>
    </Router>
  )
}

export default Main
