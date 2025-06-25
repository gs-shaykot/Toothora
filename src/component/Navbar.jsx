// fixed the navbar to top
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const NavItems = () => (
    <>
        <li> 
            <NavLink to='/' className='hover:text-primary bg-none font-semibold !text-base'>Home</NavLink>
        </li> 
        <li> 
            <NavLink to='/blog' className='hover:text-primary bg-none font-semibold !text-base'>Blog</NavLink>
        </li>
        <li> 
            <NavLink to='/contact' className='hover:text-primary bg-none font-semibold !text-base'>Contact Us</NavLink>
        </li>
    </>
);

const Navbar = () => {
    return ( 
        <div className='border-b-2 border-gray-200 w-full z-50 bg-base-100 '>
            <div className="container mx-auto navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavItems />
                        </ul>
                    </div>
                    <div className="flex items-center justify-center" >
                        <img
                            src="https://i.ibb.co/3yDkTx6Y/Animation-1750845973834.gif"
                            alt="Toothora Logo"
                            className="w-10 h-10 rounded-full" />
                        <a className="text-2xl text-blue-500  font-bold">Toothora</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu !no_bg menu-horizontal px-1">
                        <NavItems />
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/contact' className="btn bg-primary hover:bg-secondary text-white">Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;