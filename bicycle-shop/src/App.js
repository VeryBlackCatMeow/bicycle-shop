import React, { Component } from 'react';

import { Container} from 'reactstrap';
import Menu from './components/Menu.js';
import Gallery from './containers/Gallery.js';
import About from './components/About.js';
import Home from './components/Home.js';
import Product from './components/Product.js';
import Product2 from './components/Product2.js';
import Cart from './containers/Cart.js';
import PageIsNotFound from './components/PageIsNotFound.js';
import './App.css';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    const bikes = {link:'/database/bikesdatabase.json', height: '200px', path: '/bikes'};
    const girls = {link:'/database/girlsdatabase.json', height: '450px', path: '/rent'};
    /*const item = {
        id: 0,
        sku: 10000000000000000,
        product: "Bicycle",
        title: "ZE Best U-0",
        description: "Godlike vehicle",
        type: "Business",
        brand: "ZE Best",
        wheelSizes: ["26", "27.5", "29"],
        price: 2999.99,
        currencyFormat: "$",
        image: "/database/bikes/business01.jpg"
    };*/
   
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

                <Route exact path="/bikes/:id" component={Product}/>

                <Route exact path="/rent/:id" component={Product}/>

                <Route path="*" component ={PageIsNotFound}/>
            </Switch>
        </Container>
    );
  }
};


export default App;


