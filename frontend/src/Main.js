import React, { Component } from 'react'
import Box from '@material-ui/core/Box'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import List from './components/List'
import Insert from './components/Insert'
import Footer from './components/Footer'

import 'typeface-roboto'
import './styles/Main.scss'
import './styles/Scrollbar.scss'

export default class Main extends Component {
  render() {
    return (
      <Router>
        <Box width="100%" mx="auto" className="Main">
          <Header />
            <AnimatePresence>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/list" component={List} />
                <Route path="/insert" component={Insert} />
              </Switch>
            </AnimatePresence>
          <Footer />
        </Box>
      </Router>
    )
  }
}
