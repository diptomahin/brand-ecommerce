import Image from 'next/image';
import React from 'react';

//Logo
import logo from '../../assets/logo and brand.png'

//icons
import { CgProfile } from "react-icons/cg";
import { MdOutlineMessage } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-[#0D6EFD] rounded-box w-52">
            <li className='text-3xl'><a><CgProfile /> Profile</a></li>
            <li className='text-3xl'><a><MdOutlineMessage />Message</a></li>
            <li className='text-3xl'><Link href={`/MyCart`}><FaShoppingCart />Cart</Link></li>
          </ul>
        </div>
        <Link href={`/`} className="btn btn-ghost text-xl">
          <Image
            alt='logo'
            src={logo}
            style={{ width: "150px", height: "50px" }}
          /></Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className='text-3xl'><a><CgProfile /></a></li>
          <li className='text-3xl'><a><MdOutlineMessage /></a></li>
          <li className='text-3xl'><Link href={`/MyCart`}><FaShoppingCart /></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;