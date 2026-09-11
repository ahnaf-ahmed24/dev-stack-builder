import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';


const Navbar = () => {
    const [isOpen, SetIsOpen] = useState(false);

    return (
        <header className='sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-xs'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between'>

                {/* Left side [Hamburger Button + LOGO ]*/}
                {/* Hamburger Button */}
                <div className='flex items-center gap-3'>
                    <button
                        onClick={() => SetIsOpen(!isOpen)}
                        className='md:hidden text-2xl text-gray-700 p-1 rounded-md hover:bg-gray-100 focus:outline-none'
                        aria-label='Toggle menu'
                    >
                        {isOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>

                    {/* LOGO  */}
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <div className='w-8 h-8 rounded-lg brand-gradient-bg flex items-center justify-center text-white font-bold text-sm shadow-md'>
                            DS
                        </div>

                        <span className='font-semibold text-xl tracking-tight text-gray-900'>
                            Dev
                            <span className='brand-gradient-text'>Stack</span>
                        </span>
                    </div>
                </div>

                {/* Nav link for Desktop  */}
                <nav className='hidden md:flex items-center
                 gap-8 font-medium text-sm text-gray-600'>
                    <a href="#home" className='brand-gradient-text font-semibold'>Home</a>
                    <a href="#technologies" className='hover:text-gray-900 transition-colors'>Technologies</a>
                    <a href="#projects" className='hover:text-gray-900 transition-colors'>Projects</a>
                    <a href="#about" className='hover:text-gray-900 transition-colors'>About</a>
                    <a href="#contact" className='hover:text-gray-900 transition-colors'>Contact</a>
                </nav>
                
                {/* Right Buttons  */}
                <div className='flex items-center gap-2 sm:gap-3'>
                    <button className='flex items-center gap-2 font-semibold text-gray-700 hover:text-gray-900 px-2sm:px-3
                    py-2 transition-colors'>Sign In</button>
                    <button className='text-xs sm:text-sm font-semibold brand-gradient-bg px-4 sm:px-5 py-2 rounded-full shadow-md hover:opacity-95 transition-all'>Sign Up</button>
                </div>
            </div>

            {/* Nav link for Mobile  */}
            {isOpen &&(
                <nav className='md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-4 flex flex-col gap-3 font-medium text-gray-700'>
                    <a href="#home" className='brand-gradient-text font-semibold py-1'>Home</a>
                    <a href="#technologies" className='hover:text-gray-900 py-1'>Technologies</a>
                    <a href="#projects" className='hover:text-gray-900 py-1'>Projects</a>
                    <a href="#about" className='hover:text-gray-900 py-1'>About</a>
                    <a href="#contact" className='hover:text-gray-900 py-1'>Contact</a>
                </nav>
            )}
        </header>
    );
};

export default Navbar;