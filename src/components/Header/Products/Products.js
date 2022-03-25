import React, { useEffect, useState } from 'react';

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
                products.map(product => console.log(product))
            }
        </div>
    );
};

export default Products;