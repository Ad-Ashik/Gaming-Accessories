import React from 'react';
import './Cart.css'

const Cart = ({ item }) => {
    const { img, name } = item;
    console.log(name)
    return (
        <div className='cart'>
            <div className='item-img'>
                <img src={img} alt="" />
            </div>
            <div className='item-details'>
                <p>{name}</p>
            </div>
        </div>
    );
};

export default Cart;