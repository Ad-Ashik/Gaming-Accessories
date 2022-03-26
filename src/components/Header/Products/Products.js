import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setPorducts] = useState([]);

    useEffect(() => {
        fetch('gaming-api.json')
            .then(res => res.json())
            .then(data => setPorducts(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Select Items</h2>
            </div>
        </div>
    );
};

export default Products;