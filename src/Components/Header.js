import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='bg-black header  custom-shadow shadow-lg  w-full text-gray-400 font-semibold p-3 fixed z-50'>
            <div className='flex justify-end  '>
                <nav className='flex px-20 items-center '>
                    <li className='mx-3 u_underline  list-none '>
                        <Link to="/" className='p-3 rounded-lg active-link bg-red-800'>Home</Link>
                    </li>
                    <li className='mx-3 u_underline  list-none '>
                        <Link to="/about" className='hover:bg-red-800  p-3 rounded-lg '>About</Link>
                    </li>
                    <li className='mx-3 u_underline  list-none '>
                        <Link to="/services" className='hover:bg-red-800 p-3 rounded-lg '>Services</Link>
                    </li>
                    <li className='mx-3 u_underline  list-none '>
                        <Link to="/portpolie" className='hover:bg-red-800 p-3 rounded-lg '>Portpolie</Link>
                    </li>
                    <li className='mx-3 u_underline  list-none '>
                        <Link to="/contact" className='hover:bg-red-800 p-3 rounded-lg '>Contact</Link>
                    </li>
                    <li className='list-none mx-3 '><button className='rounded-3xl px-4  text-white border-2  border-white py-2  transition-colors duration-1000 ease-in-out hover:bg-red-500'><Link to='/about'>HIRE ME</Link></button></li>
                </nav>
            </div>
        </div>
    )
}

export default Header