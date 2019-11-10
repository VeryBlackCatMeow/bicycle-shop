import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setProductsAction, addToCartAction,
        removeFromCartAction, setAllProductsAction } from '../actions/index.js'
import ProductCard from '../components/ProductCard';
import { searchAllItems } from '../containers/Search';
import '../styles/productCard.css';

class Showcase extends Component {
    componentDidMount = () => {
        const { category, query } = this.props.match.params;
        const setProductsFunc = this.props.setProductsFunc;
        const links = ['/bicycles', '/rental', '/components', '/tools', '/apparel', '/accessories', '/backpacks', '/news', '/sale'];
        const requests = links.map( link => axios.get(`/database${link}.json`) );

        query || category === 'allItems'
        ?
        Promise.allSettled(requests)
            .then( responses => {
            let allItems = [];
            for(let response of responses) {
                if(response.status === "fulfilled") {
                    allItems = [...allItems, ...response.value.data]
                }
                if(response.status === "rejected") { 
                    console.log(response.reason)
                }
            }
            query
            ?
            setProductsFunc( searchAllItems(allItems, query) )
            :
            setProductsFunc(allItems)
            })
            .catch(error => console.log(error))
        :    
        axios.get(`/database/${category}.json`)
            .then(({ data }) => {    
                setProductsFunc(data);   
            })
            .catch(error => console.log(error));
    }

    render() { 
        const { items, cartItems, addToCartFunc, removeFromCartFunc} = this.props;

        return  !items.length
                ? 
                //<Loading/>
                <h5>No products found. Please change your search filters and try again.</h5>
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
//will be deleted
const searchItems = (items, searchBy) => {
    return items.filter( item =>
        item.product.toLowerCase().indexOf(searchBy.toLowerCase()) >= 0 ||
        item.type.toLowerCase().indexOf(searchBy.toLowerCase()) >= 0 ||
        item.brand.toLowerCase().indexOf(searchBy.toLowerCase()) >= 0 ||
        item.category.toLowerCase().indexOf(searchBy.toLowerCase()) >= 0   
    );
}

const filterItems = (items, filterBy) => {
    for ( let filter in filterBy) {
        if (filterBy[filter].length !== 0) { 
            items = items.filter(item => {
                for( let value in filterBy[filter]) {
                    if(item[filter].indexOf(filterBy[filter][value]) !== -1) return true;
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
    {productreducers, filtersreducers, cartreducers, searchreducers}) => ({
    items: finalFilter(productreducers.items, filtersreducers.searchBy,
                            filtersreducers.sortBy, filtersreducers.filterBy),
    cartItems: cartreducers.items,
    allItems: productreducers.allItems,
    //searchItems: searchAllItems(productreducers.allItems, searchreducers.searchQuery),

});

const mapDispatchToProps = (dispatch) => ({
    setProductsFunc: item => dispatch(setProductsAction(item)),
    addToCartFunc: obj => dispatch(addToCartAction(obj)),
    removeFromCartFunc: id => dispatch(removeFromCartAction(id)),
    setALLProductsFunc: allItems => dispatch(setAllProductsAction(allItems))
    
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Showcase));