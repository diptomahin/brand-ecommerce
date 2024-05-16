'use client'
import Description from '@/components/DetailsComponents/Description';
import MainDetails from '@/components/DetailsComponents/MainDetails';
import MayLike from '../../components/DetailsComponents/MayLike';
import SupplierInfo from '@/components/DetailsComponents/SupplierInfo';
import React, { useEffect, useState } from 'react';

const ProductDetails = ({ params }) => {
    const productId = params.ProductDetails
    const [product, setProduct] = useState();

    useEffect(() => {
        fetch('https://brand-dummy-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setProduct(data.find(product => product._id == productId)));
    }, [productId])

    if (product) {
        return (
            <div>
                <div className='w-11/12 mx-auto mt-10 flex gap-7'>
                    <MainDetails className="" product={product}></MainDetails>
                    <SupplierInfo className="" product={product}></SupplierInfo>
                </div>
                <div className='w-11/12 mx-auto my-10 flex gap-7'>
                    <Description  product={product}></Description>
                    <MayLike id={product._id}></MayLike>
                </div>
            </div>
        );
    }
    else {
        return (
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
        )
    }
};

export default ProductDetails;