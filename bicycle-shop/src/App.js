import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBikesAction, setSortAction, setFilterAction } from './actions/index.js'

import { Container, Row, Col, Button } from 'reactstrap';
import Menu from './components/Menu.js';
import Gallery from './containers/Gallery.js';
import './App.css';

class App extends Component {
  
  render() {
    const { isReady, items, setBikesFunc, setSortFunc, sortBy, setFilterFunc, filterBy } = this.props;
    return (
        <Container>
            <Menu/>
            <Gallery isReady={isReady} items={items} setBikesFunc={setBikesFunc} 
            setSortFunc={setSortFunc} sortBy={sortBy} setFilterFunc={setFilterFunc} filterBy={filterBy} />
        </Container>
    );
  }
}



const mapStateToProps = ({bikesreducers}) => ({
  items: bikesreducers.items,
  isReady: bikesreducers.isReady,
  sortBy: bikesreducers.sortBy,
  filterBy: bikesreducers.filterBy

              //items, isReady==props for Gallery 
              //sortBy==props for Sort
              //bikesreducers from allreducers.  
             //items from reducer bikes 
});

const mapDispatchToProps = (dispatch) => ({
  setBikesFunc: bike => dispatch(setBikesAction(bike)),
  setSortFunc: sort => dispatch(setSortAction(sort)),
  setFilterFunc: x => dispatch(setFilterAction(x))
           //setBikesFunc==props for Gallery 
           //setSortFunc==props for Sort
           //bike==from Actions
           // setBikesAction(bike)== action from '../actions/index.js'
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
