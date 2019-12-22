import 'typeface-roboto';
import './Main.scss';

import React from 'react';
import Container from '@material-ui/core/Container';

import Header from './components/containers/Header';
import Navigation from './components/containers/Navigation';

function Main() {
  return (
    <Container className="Main">
        <Header />
        <Navigation />
    </Container>
  );
}

export default Main;
