import React from 'react';

const Product = (props) => {
    const { name, img, price } = props.product;
    return (
        <div>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}৳</p>
        </div>
    );
};

export default Product;