'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const MayLike = ({id}) => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch('https://brand-dummy-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data.filter(product=>product._id !==id)));
    });

 if(products)
    {
        return (
            <div className="">
                {
                    products.map(product =>
                        <div key={product.id} className="card card-side shadow-xl">
                            <figure><Image width={50} height={50} src={product.imageUrl} alt="Product image" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-black text-sm">{product.name}</h2>
                                <p>${product.price}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
    else {
        <div className='text-center mt-10'>
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

export default MayLike;