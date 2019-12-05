import React, { Component } from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ScrollUpButton from './containers/ScrollUpButton';
import './App.scss';

class App extends Component {
  render() {
   
    return (
        <div className="wrapper">
          <Header/>
          <MainContent/>
          <Footer/>
          <ScrollUpButton/>
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

