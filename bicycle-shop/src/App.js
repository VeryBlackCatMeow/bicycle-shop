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
    const bikes = {link:'/database/bikesdatabase.json', height: '55%'};
    const girls = {link:'/database/girlsdatabase.json', height: '72%'};
    return (
        <Container>
            <Menu/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                
                <Route path="/bikes"
                       key="/bikes"
                       render={props => <Gallery {...props} extraProps={bikes} />}/>
                
                <Route path="/rent"
                       key="/rent"
                       render={props => <Gallery {...props} extraProps={girls} />}/>
            </Switch>
        </Container>
    );
  }
};


export default App;


