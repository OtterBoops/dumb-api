import 'typeface-roboto'
import './styles/Main.scss'

import React from 'react'
import Box from '@material-ui/core/Box'

import Navigation from './components/containers/Navigation'
import Content from './components/containers/Content'
import Footer from './components/containers/Footer'

function Main() {
  return (
    <Box width="85%" mx="auto" className="Main">
        <Navigation />
        <Content />
        <Footer />
    </Box>
  )
}

export default Main
