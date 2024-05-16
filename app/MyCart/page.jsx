'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

const MyCart = () => {
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        fetch('https://brand-dummy-server.vercel.app/mycart')
            .then(res => res.json())
            .then(data => setCartItems(data));
    }, []);

    // calculations part
    let subTotal = 0;
    for (const cartItem of cartItems) {
        subTotal += cartItem.price;
    }
    const discount = (subTotal * 0.3).toFixed(2);
    const tax = (subTotal * 0.07).toFixed(2);
    const total = subTotal - discount + tax;

    //remove from cart   
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "We have 14 days money back guarantee ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        }).then((result) => {
            console.log(result)
            if (result.isConfirmed==true) {


                fetch(`https://brand-dummy-server.vercel.app/mycart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Product has been removed.',
                                'success'
                            )
                            const remaining = cartItems.filter(item=> item._id !== _id);
                            setCartItems(remaining);
                        }
                    })

            }
        })
    }
{/*

 */}

    if (cartItems) {
        return (
            <div className="w-11/12 mx-auto lg:flex gap-5">
                <div className=''>
                    {
                        cartItems.map(product =>
                            <div key={product.id} className="card card-side shadow-xl ">
                                <figure><Image width={70} height={70} src={product.imageUrl} alt="Product image" /></figure>
                                <div className="card-body">
                                    <div className="flex  w-full">
                                        <h2 className="card-title text-black text-sm">{product.name}</h2>
                                        <p className="text-end">${product.price}</p>
                                    </div>
                                    <p className='w-8/12 text-xm'>{product.description.slice(0, 70)}</p>
                                    <div className="card-actions my-2 hidden md:flex md:flex-row">
                                        <button onClick={()=>handleDelete(product._id)} className=" text-xm shadow-xl p-2 rounded-lg   bg-white text-red-600 hover:bg-red-600 hover:text-white ">Remove</button>
                                        <button className=" text-xm shadow-xl p-2 rounded-lg   text-[#0D6EFD] bg-white hover:text-white hover:bg-[#0D6EFD]">Save for later</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className=' md:w-8/12 lg:w-4/12 py-3 mt-5'>
                    <div className="card  shadow-xl ">
                        <div className='px-4 py-5'>
                        <h1 className="my-3 text-xl">Have a coupon ?</h1>
                        <div classNAme="flex w-11/12 mx-auto">
                            <input placeholder='Add a coupon' className='bg-white border-x-2 border-y-2 border-blue-500 hover:border-blue-500 p-2 rounded-l-lg' type='text'></input>
                            <button className="text-blue-500 bg-white hover:bg-blue-500 hover:text-white p-2 border-r-2 border-y-2 border-blue-500 rounded-r-lg">Apply</button>
                        </div>
                        </div>
                    </div>
                    <div className="card shadow-xl  mt-5 py-4">
                        <div className="card-body w-full">
                            <div className='flex '>
                            <p className='text-lg '>Subtotal:</p>
                            <p className='text-lg text-end'> ${subTotal}</p>
                            </div>
                            <div className='flex '>
                            <p className='text-lg '>Discount:</p>
                            <p className='text-lg text-red-500 text-end'>-${discount}</p>
                            </div>
                            <div className='flex '>
                            <p className='text-lg '>Tax:</p>
                            <p className='text-lg text-green-500 text-end'>+${tax}</p>
                            </div>
                            <hr />
                            <div className='flex '>
                            <p className='text-lg text-black font-bold'>Total:</p>
                            <p className='text-lg text-black font-bold text-end'>{parseInt(total).toFixed(2)}</p>
                            </div>
                            <div className="card-actions mt-2">
                                <button className=" text-lg font-bold btn bg-green-500 text-white hover:bg-white hover:text-green-500 w-full">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
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

export default MyCart;