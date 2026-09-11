import React from 'react';
import { FaStar } from 'react-icons/fa';

const TechCard = ({tech, onAdd, isAdded}) => {
    return (
        <div className={`bg-white rounded-2xl p-5 transition-all flex flex-col justify-between h-full border ${
        isAdded
          ? 'brand-card-border-disabled'
          : 'border-gray-200 shadow-xs hover:shadow-md'
      }`}>
            <div>
                {/* Icon  */}
                <div className='flex justify-between items-start mb-4'>
                    <div className='w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center p-2.5'>
                        <img src={tech.icon} alt={tech.name} 
                        className='w-full h-full object-contain'/>
                    </div>
                    <span className='text-xs font-medium text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full'>
                        {tech.badge}
                    </span>
                </div>

                {/* Title & Description  */}
                <h3 className='font-bold text-lg text-gray-900 mb-1.5'>
                    {tech.name}
                </h3>
                <p className='text-gray-500 text-xs line-clamp-3 leading-relaxed mb-4'>
                    {tech.Description}
                </p>
            </div>

            {/* category , difficulty, rating */}
            <div className='flex flex-wrap items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100 mb-4 gap-2'>
                <span className='bg-gray-100 px-2.5 py-1 rounded-md text-gray-700 font-medium'>
                    {tech.category}
                </span>
                <span className='font-medium'>{tech.difficulty}</span>
                <span className='flex items-center gap-1 font-bold text-gray-800'>
                    <FaStar className='text-amber-400'/>
                    {tech.rating}
                </span>
            </div>

                {/* Button */}
                <button
                    onClick={()=> onAdd(tech)}
                    disabled = {isAdded}
                    className={`w-full py-3 rounded-xl text-sm font-semibold transition-all ${
                        isAdded ? `'bg-gray-200 cursor-not-allowed border border-gray-300`
                        : `bg-[#0f172a] text-white hover:bg-black active:scale-[0.98]`
                    }`}
                >
                    {isAdded ? (
                        <span className='brand-gradient-text font-bold'>
                            Added to Stack
                        </span>
                    ): (
                        "Add to Stack"
                    )}
                </button>
        </div>
    );
};

export default TechCard;