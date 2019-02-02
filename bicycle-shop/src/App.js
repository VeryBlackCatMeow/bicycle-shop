import React, { Component } from 'react';

import { Container} from 'reactstrap';
import Menu from './components/Menu.js';
import Gallery from './containers/Gallery.js';
import About from './components/About.js';
import Home from './components/Home.js';
import Product from './components/Product.js';
import Cart from './containers/Cart.js';
import PageIsNotFound from './components/PageIsNotFound.js';
import './App.css';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    const bikes = {link:'/database/bikes.json', height: '200px', path: '/bikes'};
    const girls = {link:'/database/rent.json', height: '450px', path: '/rent'};
   
    return (
        <Container>
            <Menu/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route exact path="/cart" component={Cart} />
                
                <Route exact path="/bikes"
                       key="/bikes"
                       render={props => <Gallery {...props} extraProps={bikes} />}/>
                
                <Route exact path="/rent"
                       key="/rent"
                       render={props => <Gallery {...props} extraProps={girls} />}/>

                <Route exact path="/:product/:id" component={Product}/>

                <Route path="*" component ={PageIsNotFound}/>
            </Switch>
        </Container>
    );
  }
};


export default App;


