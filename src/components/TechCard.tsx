import React from 'react';
import { FaStar } from 'react-icons/fa';

const TechCard = ({tech, onAdd, isAdded}) => {
    return (
        <div className=''>
            <div>
                {/* Icon  */}
                <div className=''>
                    <div className=''>
                        <img src={tech.icon} alt={tech.name} 
                        className=''/>
                    </div>
                    <span className=''>
                        {tech.badge}
                    </span>
                </div>

                {/* Title & Description  */}
                <h3 className=''>
                    {tech.name}
                </h3>
                <p className=''>
                    {tech.Description}
                </p>
            </div>

            {/* category , difficulty, rating */}
            <div className=''>
                <span className=''>
                    {tech.category}
                </span>
                <span className=''>{tech.difficulty}</span>
                <span className=''>
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
                        <span className=''>
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