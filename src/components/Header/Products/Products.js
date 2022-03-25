import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';

const Products = () => {
    const [products, setPorducts] = useState([]);

    useEffect(() => {
        fetch('gaming-api.json')
            .then(res => res.json())
            .then(data => setPorducts(data))
    }, [])

    return (
        <div>
            <h3>My product added: {products.length}</h3>
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default Products;