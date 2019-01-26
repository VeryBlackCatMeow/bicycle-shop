import React, { Component } from 'react';

import { Container} from 'reactstrap';
import Menu from './components/Menu.js';
import Gallery from './containers/Gallery.js';
import About from './components/About.js';
import Home from './components/Home.js';
import './App.css';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
  
  render() {
    const { extraProps } = this.props;
    return (
        <Container>
            <Menu/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/bikes" component={Gallery} />
                <Route path="/about" component={About} />
                <Route path="/rent" component={Gallery} />
            </Switch>
        </Container>
    );
  }
};


export default App;
