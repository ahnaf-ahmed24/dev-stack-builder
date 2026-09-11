import React from 'react';
import bannerImg from "../assets/banner-stack.png"

const Hero = () => {
    return (
        <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center'>

                {/* Left side */}
                <div className='space-y-5 text-center md:text-left max-w-xl mx-auto md:mx-0'>
                    <h1 className='text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight'>
                        Build Your Ideal <br />
                        <span className='brand-gradient-text'>
                            Development Stack
                        </span>
                    </h1>
                    <p className='text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0'>
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>
                    <div className='flex items-center justify-center md:justify-start gap-3 sm:gap-4 pt-2'>
                        <button className='brand-gradient-bg px-5 sm:px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-md hover:opacity-95 transition-all flex-1 sm:flex-initial'>
                            Explore Technologies
                        </button>
                        <button className='border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 px-5 sm:px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all flex-1 sm:flex-initial'>
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Side  */}
                <div className=' md:flex justify-center'>
                    <img
                        src={bannerImg}
                        alt='Dev Stack Banner'
                        className='w-full max-w-md object-contain drop-shadow-xl'
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;