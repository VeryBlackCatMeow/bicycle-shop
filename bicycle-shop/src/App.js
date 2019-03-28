import React, { Component } from 'react';
import Header from './components/Header.js';
import Gallery from './containers/Gallery.js';
import About from './components/About.js';
import Home from './components/Home.js';
import Product from './containers/Product.js';
import Cart from './containers/Cart.js';
import PageIsNotFound from './components/PageIsNotFound.js';
import './App.css';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
   
    return (
        <div className="wrapper">
          <Header/>
          <div className="content">
            <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route exact path="/cart" component={Cart} />
                  
                  <Route exact path="/:category" component={Gallery}/>
                  <Route exact path="/:category/:id" component={Product}/>

                  <Route path="*" component={PageIsNotFound}/>
            </Switch>
          </div>
        </div>
    );
  }
};


export default App;

/*
<div id="headhome" className="container">
      <p>Стёр к чертям свои ноги?</p>
      <p>А денег на тачку нет?</p>
      <p>Тогда приходи к нам.</p>
      <p>ВЕЛОКОСМОС поможет тебе!</p>
</div>
*/
/*
<Route exact path="/bikes"
                       key="/bikes"
                       render={props => <Gallery {...props} extraProps={bikes} />}/>
                
                <Route exact path="/rent"
                       key="/rent"
                       render={props => <Gallery {...props} extraProps={girls} />}/>
*/

