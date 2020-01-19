import 'typeface-roboto'
import './styles/Main.scss'

import React from 'react'
import Container from '@material-ui/core/Container'

import Navigation from './components/containers/Navigation'
import Content from './components/containers/Content'
import Footer from './components/containers/Footer'

function Main() {
  return (
    <Container className="Main">
        <Navigation />
        <Content />
        <Footer />
    </Container>
  )
}

export default Main
