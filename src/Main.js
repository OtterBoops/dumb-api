import 'typeface-roboto';
import './Main.scss';

import React from 'react';
import Container from '@material-ui/core/Container';

import Header from './components/containers/Header';
import Navigation from './components/containers/Navigation';
import Content from './components/containers/Content';
import Footer from './components/containers/Footer';

function Main() {
  return (
    <Container className="Main">
        <Header />
        <Navigation />
        <Content />
        <Footer />
    </Container>
  );
}

export default Main;
