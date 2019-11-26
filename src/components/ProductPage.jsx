import React from 'react';
import { Container } from 'reactstrap';

import ProductBody from '../components/ProductBody';
import ProductBar from '../components/ProductBar';

const ProductPage = ({cartItems, addToCartFunc, removeFromCartFunc, item}) => (
    <Container className="product">
        <h1>{item.product} {item.title}</h1>
        <ProductBody item={item}
                    cartItems={cartItems}
                    addToCartFunc={addToCartFunc}
                    removeFromCartFunc={removeFromCartFunc}/>
        <ProductBar {...item}/>
    </Container>
);

export default ProductPage;