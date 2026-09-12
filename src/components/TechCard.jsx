import React from 'react';
import { FaStar } from 'react-icons/fa';

const TechCard = ({ tech, onAdd, isAdded }) => {

    const getBadgeStyle = (badge) => {
        switch (badge?.toLowerCase()) {
            case 'popular':
            case 'containers':
            case 'fullstack':
                return 'text-blue-600 bg-blue-50'; 
            case 'trending':
            case 'fast':
                return 'text-orange-600 bg-orange-50'; 
            case 'essential':
            case 'flexible':
                return 'text-emerald-600 bg-emerald-50';
            case 'enterprise':
            case 'classic':
                return 'text-red-600 bg-red-50'; 
            default:
                return 'text-blue-600 bg-blue-50';
        }
    };

    return (
        <div className={`bg-white rounded-2xl p-5 transition-all flex flex-col justify-between h-full border ${
            isAdded
              ? 'brand-card-border-disabled'
              : 'border-slate-200 shadow-sm hover:shadow-md'
          }`}>
            <div>
                <div className='flex justify-between items-start mb-4'>
                    <div className='w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2.5'>
                        <img 
                            src={tech.icon} 
                            alt={tech.name} 
                            className='w-full h-full object-contain'
                        />
                    </div>
                    {tech.badge && (
                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${getBadgeStyle(tech.badge)}`}>
                            {tech.badge}
                        </span>
                    )}
                </div>

                <h3 className='font-bold text-lg text-slate-900 mb-1.5'>
                    {tech.name}
                </h3>
                <p className='text-slate-500 text-xs line-clamp-3 leading-relaxed mb-4'>
                    {tech.description || tech.Description}
                </p>
            </div>

            <div className='flex flex-wrap items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100 mb-4 gap-2'>
                <span className='bg-slate-100 px-2.5 py-1 rounded-md text-slate-700 font-medium'>
                    {tech.category}
                </span>
                <span className='font-medium'>{tech.difficulty}</span>
                <span className='flex items-center gap-1 font-bold text-slate-800'>
                    <FaStar className='text-amber-400'/>
                    {tech.rating}
                </span>
            </div>

            <button
                onClick={() => onAdd(tech)}
                disabled={isAdded}
                className={`w-full py-3 rounded-xl text-sm font-semibold transition-all ${
                    isAdded 
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-300' 
                        : 'bg-[#0f172a] text-white hover:bg-black active:scale-[0.98]'
                }`}
            >
                {isAdded ? (
                    <span className='brand-gradient-text font-bold'>
                        Added to Stack
                    </span>
                ) : (
                    "Add to Stack"
                )}
            </button>
        </div>
    );
};

export default TechCard;