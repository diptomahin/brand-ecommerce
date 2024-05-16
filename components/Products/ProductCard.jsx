import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
//icons
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const { _id, name, description, imageUrl, price } = product
    const givenPrice = price + (price * 0.4);
    return (
        <div className="card card-compact w-80  shadow-xl">
            <Link href={`/${_id}`}>
              <div className="h-96">
             <div className='h-1/2'>
             <figure className=''><Image  src={imageUrl} width={120} height={50} alt="Shoes" /></figure>
             </div>
            <div className="card-body w-full ">
                <div className='grid grid-cols-2 gap-10'>
                    <div>
                    <h2 className="card-title text-black">${price}<span style={{"text-decoration": "line-through",}} className='text-sm text-gray-400'>${givenPrice.toFixed(2)}</span></h2>
                <div className="rating w-24">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                    </div>
                    <div className='ml-7'>
                    <FaRegHeart className='text-3xl text-[#0D6EFD]' />
                    </div>
                </div>
                <h2 className="card-title">{name}</h2>
                <p>{description.slice(0,55)}</p>
            </div>
              </div>
            </Link>
        </div>
    );
};

export default ProductCard;