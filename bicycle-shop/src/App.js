import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBikesAction, setSortAction, setFilterAction, setSearchAction } from './actions/index.js'

import { Container} from 'reactstrap';
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

const sortingBy = (items, sortBy) => {
  switch(sortBy) {
      case 'high':
          return items.concat().sort( (a , b) => {
                  if (a.price < b.price) return 1;
                  if (a.price > b.price) return -1;});
          
      case 'low':
          return items.concat().sort( (a , b) => {
                  if (a.price > b.price) return 1;
                  if (a.price < b.price) return -1;});
          
      case 'name':
          return items.concat().sort( (a , b) => {
                  if (a.title > b.title) return 1;
                  if (a.title < b.title) return -1;});
      default:
          return items;        
  }
}

const mapStateToProps = ( {bikesreducers, filtersreducers} ) => ({
  items: sortingBy(bikesreducers.items, filtersreducers.sortBy),
  isReady: bikesreducers.isReady,
  sortBy: filtersreducers.sortBy,
  filterBy: filtersreducers.filterBy,
  searchBy: filtersreducers.filterBy

              //items, isReady==props for Gallery 
              //sortBy==props for Sort
              //bikesreducers from allreducers.  
             //items from reducer bikes 
});

const mapDispatchToProps = (dispatch) => ({
  setBikesFunc: bike => dispatch(setBikesAction(bike)),
  setSortFunc: sort => dispatch(setSortAction(sort)),
  setFilterFunc: filter => dispatch(setFilterAction(filter)),
  setSearchFunc: query => dispatch(setSearchAction(query))
           //setBikesFunc==props for Gallery 
           //setSortFunc==props for Sort
           //bike==from Actions
           // setBikesAction(bike)== action from '../actions/index.js'
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
