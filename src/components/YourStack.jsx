import React from 'react';
import { HiTrash, HiX } from 'react-icons/hi';

const YourStack = ({ selectedStack, onRemove, onRemoveAll }) => {
    return (
        <div className='bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-sm lg:sticky lg:top-20'>
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-gray-100 mb-4">
                <div>
                    <h2 className="font-bold text-gray-900 text-base sm:text-lg">
                        Your Stack
                    </h2>
                    <p className="text-xs text-gray-500">
                        {selectedStack.length} {selectedStack.length === 1 ? "Technology" : "Technologies"} Selected
                    </p>
                </div>

                {selectedStack.length > 0 && (
                    <button
                        onClick={onRemoveAll}
                        className="text-xs font-semibold text-rose-500 hover:text-rose-700 flex items-center gap-1 hover:underline"
                    >
                        <HiTrash /> Clear All
                    </button>
                )}
            </div>

            {selectedStack.length === 0 ? (
                <div className="text-center py-8 sm:py-10 px-4 border border-dashed border-gray-200 rounded-xl bg-gray-50/50">
                    <p className="text-sm font-medium text-gray-500">Your stack is empty.</p>
                    <p className="text-xs text-gray-400 mt-1">Select technologies from the grid to build your custom stack.</p>
                </div>) : (
                <div className="space-y-3 overflow-y-auto pr-1">
                    {selectedStack.map((tech) => (
                        <div
                            key={tech.id}
                            className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white transition-all"
                        >
                            <div className="flex items-center gap-3">
                                <img src={tech.icon} alt={tech.name} className="w-7 h-7 object-contain" />
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 leading-tight">{tech.name}</h4>
                                    <span className="text-[10px] text-gray-500 font-medium">{tech.category}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => onRemove(tech.id)}
                                className="text-gray-400 hover:text-rose-500 p-1.5 rounded-md hover:bg-rose-50 transition-colors"
                                title="Remove item"
                            >
                                <HiX className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
};

export default YourStack;