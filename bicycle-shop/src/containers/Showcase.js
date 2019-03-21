import React, { Component } from 'react';

import axios from 'axios';
import { connect } from 'react-redux';
import { setProductsAction, addToCartAction, removeFromCartAction, resetFiltersAction  } from '../actions/index.js'
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import { withRouter } from 'react-router-dom';
import '../styles/showcase.css'

class Showcase extends Component {

    componentDidMount = () => {
        const { setProductsFunc, resetFiltersFunc, extraProps} = this.props;
        const reset = {
            searchBy: '',
            sortBy: 'all',
            filterBy: extraProps.filters.reduce((o, key) => ( {...o, [key]:[]} ), {})
        } // все фильтры из массива в extraProps устанавливаем как свойства объекта в filterBy, со значением []
        axios.get(`/database/${this.props.match.params.category}.json`).then(({ data }) => {    
            setProductsFunc(data);   
            resetFiltersFunc(reset);
        });
    }

    render() { 
        const { items, cartItems, addToCartFunc, removeFromCartFunc, itemCount } = this.props;

        return !items.length
                ? <Loading/>
                : items.map( (item) => (<ProductCard key={item.id/*.toString()*/} {...item} 
                            cartItems={cartItems}
                            addToCartFunc={addToCartFunc} removeFromCartFunc={removeFromCartFunc }
                            itemCount={itemCount}/>))
    }
}


const sortingBy = (items, sortBy) => {
    switch(sortBy) {
        case 'high':
            return items.slice().sort( (a , b) => {      //slice or concat()
                    if (a.price <= b.price) return 1;
                    else return -1;
            });
        case 'low':
            return items.slice().sort( (a , b) => {
                    if (a.price >= b.price) return 1;
                    else return -1;
            });
        case 'name':
            return items.slice().sort( (a , b) => {
                    if (a.title >= b.title) return 1;
                    else return -1;
            });
        default:
            return items;        
    }
};

const searchingBy = (items, searchBy) => {
    return items.filter( item=>
        item.product.toLowerCase().indexOf(searchBy.toLowerCase()) >= 0 ||
        item.type.toLowerCase().indexOf(searchBy.toLowerCase()) >= 0 ||
        item.brand.toLowerCase().indexOf(searchBy.toLowerCase()) >= 0 ||
        item.category.toLowerCase().indexOf(searchBy.toLowerCase()) >= 0   
    );
}


const filteringBy = (items, filterBy) => {
    for ( let key in filterBy) {
        if (filterBy[key].length !== 0){ 
            items = items.filter(item => {
                for( let i = 0; i < filterBy[key].length; i++) {
                    if(item[key].indexOf(filterBy[key][i]) >= 0) return true;
                }
            });
        }
    }
    return items;
}

const finalFiltration = (items, searchBy, sortBy, filterBy) =>  {
    return sortingBy(filteringBy(searchingBy(items, searchBy), filterBy), sortBy)
};

const mapStateToProps = ( 
    {productreducers, filtersreducers, cartreducers}) => ({
    items: finalFiltration(productreducers.items, filtersreducers.searchBy,
                            filtersreducers.sortBy, filtersreducers.filterBy),
    cartItems: cartreducers.items,

});

const mapDispatchToProps = (dispatch) => ({
    setProductsFunc: item => dispatch(setProductsAction(item)),
    addToCartFunc: obj => dispatch(addToCartAction(obj)),
    removeFromCartFunc: id => dispatch(removeFromCartAction(id)),
    resetFiltersFunc: obj => dispatch(resetFiltersAction (obj)),
});
                        //necessarily withRouter
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Showcase));
