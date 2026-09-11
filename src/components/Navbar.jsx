import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';


const Navbar = () => {
    const [isOpen, SetIsOpen] = useState(false);

    return (
        <header className=''>
            <div className=''>
                {/* Left side [Hamburger Button + LOGO ]*/}
                {/* Hamburger Button */}
                <div className='flex items-center gap-3'>
                    <button
                        onClick={() => SetIsOpen(!isOpen)}
                        className='md:hidden  '
                    >
                        {isOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>

                    {/* LOGO  */}
                    <div className=''>
                        <div className=''>
                            DS
                        </div>

                        <span className=''>
                            Dev
                            <span className=''>Stack</span>
                        </span>
                    </div>
                </div>

                {/* Nav link for Desktop  */}
                <nav className=''>
                    <a href="#home" className=''>Home</a>
                    <a href="#technologies" className='hover:text-gray-900 transition-colors'>Technologies</a>
                    <a href="#projects" className='hover:text-gray-900 transition-colors'>Projects</a>
                    <a href="#about" className='hover:text-gray-900 transition-colors'>About</a>
                    <a href="#contact" className='hover:text-gray-900 transition-colors'>Contact</a>
                </nav>
                
                {/* Right Buttons  */}
                <div className=''>
                    <button className=''>Sign In</button>
                    <button className=''>Sign Up</button>
                </div>
            </div>

            {/* Nav link for Mobile  */}
            {isOpen &&(
                <nav className=''>
                    <a href="#home" className=''>Home</a>
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