import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-sky-800 py-4 flex w-full'>
            <ul className='text-white flex ml-7'>
                <h2 className='text-3xl font-bold'>INNOVEX</h2>
            </ul>
            <ul className="text-white flex ml-auto gap-10 items-center mr-7 font-medium">
                <a href=""><li className="hover:text-yellow-200">Products</li></a>
                <a href=""><li className="hover:text-yellow-200">Contact Us</li></a>
                <a href=""><li className="hover:text-yellow-200">Services</li></a>
                <a href=""><li className="hover:text-yellow-200">Pricing</li></a>
            </ul>
            <button className="font-bold bg-sky-400 px-3 py-2 rounded-lg hover:bg-sky-500 mr-7 text-white">Sign Up</button>
        </div>
    );
}

export default Navbar
