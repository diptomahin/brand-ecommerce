'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Link from 'next/link';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://brand-dummy-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    console.log(products)

    if(products)
        {
            return (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto my-5'>
                    {
                        products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </div>
            );
        }
    
    else{
        <div className='text-center mt-36'>
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
    </div>
    }
};

export default Products;