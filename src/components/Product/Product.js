import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, price } = props.product;
    return (
        <div className="product">
            <div className='product-info'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>Price: {price}৳</p>
            </div>
            <button className='btn-cart'>ADD TO CART</button>
        </div>
    );
};

export default Product;