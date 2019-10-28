import React, { Component } from 'react';

import axios from 'axios';
import { connect } from 'react-redux';
import { setProductsAction, addToCartAction, removeFromCartAction } from '../actions/index.js'
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import { withRouter } from 'react-router-dom';
import '../styles/showcase.css'

class Showcase extends Component {

    componentDidMount = () => {
        axios.get(`/database/${this.props.match.params.category}.json`)
            .then(({ data }) => {    
                this.props.setProductsFunc(data);   
            })
            .catch(error => console.log(error));

    }

    /*componentDidUpdate(prevProps) {
        if (this.props.extraProps !== prevProps.extraProps) {
            axios.get(`/database/${this.props.match.params.category}.json`).then(({ data }) => {    
            this.props.setProductsFunc(data);   
            });
        }
    }*/

    render() { 
        const { items, cartItems, addToCartFunc, removeFromCartFunc} = this.props;

        return  !items.length
                ? 
                <Loading/>
                : 
                items.map( item => (<ProductCard key={item.id}
                            {...item} 
                            cartItems={cartItems}
                            addToCartFunc={addToCartFunc} 
                            removeFromCartFunc={removeFromCartFunc }/>))
    }
}

const sortItems = (items, sortBy) => {
    switch(sortBy) {
        case 'high':   //slice or concat()
            return items.slice().sort( (a , b) => b.price - a.price);
        case 'low':
            return items.slice().sort( (a , b) => a.price - b.price);
        case 'name':
            return items.slice().sort( (a , b) => {
                if (a.title >= b.title) return 1;
                else return -1;
            });
        default:
            return items;        
    }
};

const searchItems = (items, searchBy) => {
    return items.filter( item=>
        item.product.toLowerCase().indexOf(searchBy.toLowerCase()) >= 0 ||
        item.type.toLowerCase().indexOf(searchBy.toLowerCase()) >= 0 ||
        item.brand.toLowerCase().indexOf(searchBy.toLowerCase()) >= 0 ||
        item.category.toLowerCase().indexOf(searchBy.toLowerCase()) >= 0   
    );
}


const filterItems = (items, filterBy) => {
    for ( let key in filterBy) {
        if (filterBy[key].length !== 0) { 
            items = items.filter(item => {
                for( let i = 0; i < filterBy[key].length; i++) {
                    if(item[key].indexOf(filterBy[key][i]) >= 0) return true;
                } 
                return false;
            });
        }
    }
    return items;
}

const finalFilter = (items, searchBy, sortBy, filterBy) =>  {
    return sortItems(filterItems(searchItems(items, searchBy), filterBy), sortBy)
};


const mapStateToProps = ( 
    {productreducers, filtersreducers, cartreducers}) => ({
    items: finalFilter(productreducers.items, filtersreducers.searchBy,
                            filtersreducers.sortBy, filtersreducers.filterBy),
    cartItems: cartreducers.items,

});

const mapDispatchToProps = (dispatch) => ({
    setProductsFunc: item => dispatch(setProductsAction(item)),
    addToCartFunc: obj => dispatch(addToCartAction(obj)),
    removeFromCartFunc: id => dispatch(removeFromCartAction(id)),
});
                        //necessarily withRouter
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Showcase));