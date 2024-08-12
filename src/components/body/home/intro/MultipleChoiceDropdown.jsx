import React, { useState } from 'react';

const MultipleChoiceDropdown = ({ header, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative w-full md:w-auto">
            <div
                className="md:w-full px-1 md:px-4 py-1 bg-white cursor-pointer flex items-center md:justify-between border md:border-none border-[#785fbe] rounded-full"
                onClick={toggleDropdown}>
                <span className='text-[#785fbe] font-semibold'>{header}</span>
                <svg
                    className={`w-4 h-4 ml-2 fill-current text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
            </div>
            <div className={`absolute w-full md:w-auto z-10 bg-white border border-[#785fbe] rounded-2xl shadow mt-1 p-2 ${isOpen ? '' : 'hidden'}`}>
                {items.map((type, index) => {
                    return (
                        <label key={index} className="flex items-center text-sm text-[#785fbe] px-4 py-2 cursor-pointer hover:bg-gray-100">
                            <input type="checkbox" className="mr-2" value={type.value} />
                            {type.label}
                        </label>
                    )
                })}
            </div>
        </div>
    );
};

export default MultipleChoiceDropdown;

