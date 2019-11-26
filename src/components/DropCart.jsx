import React from 'react';

import DropCartDown from './DropCartDown';

const DropCart = ({totalPrice, totalCount, cartItems, removeFromCartFunc}) => (
    <> 
        <div id="PopoverLegacy">
            {
                totalPrice=== 0
                ? 
                <> 
                    <i className='fas fa-shopping-cart'></i>&nbsp;
                    <span>Cart</span>
                </>
                : 
                <>  
                    <i className='fas fa-shopping-cart'></i>&nbsp;
                    <div id="head-cart-count">{totalCount}</div>
                    <span> {totalPrice}$</span>
                </> 
            }
        </div>

        <DropCartDown
            totalPrice={totalPrice}
            totalCount={totalCount}
            cartItems={cartItems}
            removeFromCartFunc={removeFromCartFunc}
        />
    </>
);

export default DropCart;