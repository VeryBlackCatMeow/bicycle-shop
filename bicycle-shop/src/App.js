import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBikesAction, setSortAction, setFilterAction, setSearchAction,
            addToCartAction, removeFromCartAction } from './actions/index.js'

import { Container} from 'reactstrap';
import Menu from './components/Menu.js';
import Gallery from './containers/Gallery.js';
import './App.css';

class App extends Component {
  
  render() {
    const { items, setBikesFunc, setSortFunc, 
        sortBy, setFilterFunc, filterBy, setSearchFunc, searchBy,
        totalPrice, totalCount, addToCartFunc, removeFromCartFunc } = this.props;
    return (
        <Container>
            <Menu totalPrice={totalPrice} totalCount={totalCount}  removeFromCartFunc={removeFromCartFunc} />
            <Gallery 
                items={items} setBikesFunc={setBikesFunc} 
                setSortFunc={setSortFunc} sortBy={sortBy} setFilterFunc={setFilterFunc} filterBy={filterBy}
                setSearchFunc={setSearchFunc} searchBy={searchBy}
                addToCartFunc={addToCartFunc} 
                />
        </Container>
    );
  }
};

const sortingBy = (items, sortBy) => {
  switch(sortBy) {
      case 'high':
          return items.slice().sort( (a , b) => {      //or concat()
                  if (a.price < b.price) return 1;
                  else /*(a.price > b.price)*/ return -1;});
          
      case 'low':
          return items.slice().sort( (a , b) => {
                  //if (a.price > b.price) return 1;
                  if (a.price < b.price) return -1;});
          
      case 'name':
          return items.slice().sort( (a , b) => {
                  //if (a.title > b.title) return 1;
                  if (a.title < b.title) return -1;});
      default:
          return items;        
  }
};

const searchingBy = (items, searchBy) => {
    return items.filter( s=>
        s.product.toLowerCase().indexOf(searchBy.toLowerCase()) >= 0 ||
        s.type.toLowerCase().indexOf(searchBy.toLowerCase()) >= 0 ||
        s.brand.toLowerCase().indexOf(searchBy.toLowerCase()) >= 0    
        );
}

const finalFiltration = (items, searchBy, sortBy) =>  {
    return sortingBy(searchingBy(items, searchBy), sortBy)
};

const mapStateToProps = ( {bikesreducers, filtersreducers, cartreducers} ) => ({
  items: finalFiltration(bikesreducers.items, filtersreducers.searchBy, filtersreducers.sortBy),
  
  sortBy: filtersreducers.sortBy,
  filterBy: filtersreducers.filterBy,
  searchBy: filtersreducers.searchBy,

  totalPrice: cartreducers.items.reduce((total, item) => ((total*100+item.price*100)/100).toFixed(2), 0),
  totalCount: cartreducers.items.length
});

const mapDispatchToProps = (dispatch) => ({
  setBikesFunc: bike => dispatch(setBikesAction(bike)),
  setSortFunc: sort => dispatch(setSortAction(sort)),
  setFilterFunc: filter => dispatch(setFilterAction(filter)),
  setSearchFunc: query => dispatch(setSearchAction(query)),
  addToCartFunc: obj => dispatch(addToCartAction(obj)),
  removeFromCartFunc: id => dispatch(removeFromCartAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
