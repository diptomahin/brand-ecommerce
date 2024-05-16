'use client'
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

import Swal from 'sweetalert2'

const SupplierInfo = ({product}) => {
    const {supplierInfo, name, price, _id, description, imageUrl } = product;
    const handleAddToCart = () => {

        const productId = _id;
        const addedProduct = { name, price, productId, description , imageUrl}


        fetch('https://brand-dummy-server.vercel.app/mycart', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added to cart',
                        icon: 'success',
                        confirmButtonText: 'Done'
                      })
                }
            })


    }
    return (
        <div>
            <div className="card  shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-black"><span className='text-3xl'><RxAvatar/></span>{supplierInfo.supplierName}</h2>
                    <hr/>
                    <div className="flex md:flex-col">
                    <p className='text-lg flex gap-5 my-2 md:mt-5'><FaLocationDot />{supplierInfo.supplierLocation}</p>
                    <p className='text-xl flex gap-5 my-2 md:my-3 '><MdVerifiedUser />{supplierInfo.status}</p>
                    <p className='text-xl flex gap-5 my-2 md:mb-5'><FaShippingFast />{supplierInfo.shipping}</p>
                    </div>
                    <hr/>
                    <div className="card-actions justify-end">
                        <button onClick={handleAddToCart} className=" text-lg font-bold btn bg-[#0D6EFD] text-white hover:bg-white hover:text-[#0D6EFD] w-full">ADD To Cart</button>
                        <button className="text-lg font-bold btn hover:bg-[#0D6EFD] hover:text-white bg-white text-[#0D6EFD] w-full">Seller Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupplierInfo;