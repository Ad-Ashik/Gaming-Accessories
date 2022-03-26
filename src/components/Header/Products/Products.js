import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import Cart from '../Cart/Cart';
import './Products.css';

const Products = () => {
    const [products, setPorducts] = useState([]);
    const [cart, setCart] = useState([]);
    // const [select, setSelect] = useState([]);

    useEffect(() => {
        fetch('gaming-api.json')
            .then(res => res.json())
            .then(data => setPorducts(data))
    }, []);

    const addCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    const random = () => {
        const genaratNumber = Math.floor(Math.random() * cart.length);
        const getName = cart[genaratNumber].name;
        alert("Select Item Name: " + getName);
    }

    const remove = () => {
        setCart([])
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addCart={addCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <div>
                    <div>
                        <h2>Select Items</h2>
                        <div className='item-container'>
                            {
                                cart.map(item => <Cart
                                    key={item.id}
                                    item={item}
                                ></Cart>)
                            }
                            <button onClick={random} className="btn-cart btn-select">Choose 1 Selector</button>
                            <button onClick={remove} className="btn-cart btn-select">Choose Again</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;