import Image from 'next/image';
import React from 'react';
import { MdOutlineMessage } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";


const MainDetails = ({ product }) => {
    const { name, description,reviews, imageUrl,stock, price, category, type, protection, warranty, sold } = product;
    const givenPrice = price + (price * 0.4);
    return (
        <div className="card lg:card-side md:w-8/12 shadow-xl">
            <figure><Image alt='Product Image' width={200} height={150} src={imageUrl}></Image></figure>
            <div className="card-body">
                <h2 className="card-title text-black">{name}</h2>
                <div className='flex gap-2'>
                <div className="rating w-24">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <h3 className='flex gap-1'><MdOutlineMessage className='text-xl mt-1' /><span>  {reviews} reviews</span><FaShoppingBasket className='text-xl ml-1'/><span> {sold} sold</span></h3>
                </div>
                <div className="bg-[#FFF0DF] text-black p-3">
                    <h1 className='text-xl font-bold'>
                        $ {price} <span style={{"text-decoration": "line-through",}} className='text-sm font-semibold text-red-500 ml-2'>${givenPrice.toFixed(2)}</span>
                    </h1>
                </div>
                <hr/>
                <div className="overflow-x-aut">
                    <table className="table">
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td className='font-semibold'>Category</td>
                                <td className='text-black'>{category}</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>Type</td>
                                <td className='text-black'>{type}</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td>Protection</td>
                                <td className='text-black'>{protection}t</td>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <td>Warranty</td>
                                <td className='text-black'>{warranty}</td>
                            </tr>
                            <hr/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MainDetails;