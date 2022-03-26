import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
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
            <button onClick={() => props.addCart(props.product)} className='btn-cart'>ADD TO CART <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Product;