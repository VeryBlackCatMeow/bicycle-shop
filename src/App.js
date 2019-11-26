import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import About from './components/About';
import Home from './components/Home';
import Product from './containers/Product';
import Cart from './containers/Cart';
import Locations from './containers/Locations';
import PageIsNotFound from './components/PageIsNotFound';
import ScrollUpButton from './containers/ScrollUpButton';
import './App.scss';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
   
    return (
        <div className="wrapper">
          <ScrollUpButton/>
          <Header/>
          <main role="main" className="content">
            <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route exact path="/cart" component={Cart} />
                  <Route exact path="/search/:query" component={Gallery}/>
                  
                  <Route exact path="/gallery/:category" component={Gallery}/>
                  <Route exact path="/gallery/:category/:id" component={Product}/>

                  <Route path="/locations" component={Locations} />

                  <Route path="*" component={PageIsNotFound}/>
            </Switch>
          </main>
          <Footer/>
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

