import React from 'react';
import MultipleChoiceDropdown from './MultipleChoiceDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    const jobTypes = [
        { value: "full-time", label: "Full-time" },
        { value: "part-time", label: "Part-time" },
        { value: "contract", label: "Contract" },
        { value: "internship", label: "Internship" },
        { value: "freelance", label: "Freelance" },
    ];

    const locations = [
        { value: "Dhaka", label: "Dhaka" },
        { value: "Chittagong", label: "Chittagong" },
        { value: "Sylhet", label: "Sylhet" },
        { value: "Rajshahi", label: "Rajshahi" },
        { value: "Remote", label: "Remote" },
    ];

    return (
        <div className="shadow-violet text-xs md:text-lg rounded-full p-1 md:p-3 flex items-center space-x-1 md:space-x-4 mx-52">
            {/* Keyword Input */}
            <div className="flex-grow">
                <input
                    type="text"
                    placeholder="Titles/Companies/Skills"
                    className="w-full px-1 md:px-4 md:py-2 text-[#785fbe] placeholder-[#785fbe] rounded focus:outline-none "
                />
            </div>
            <div className='hidden md:block'>|</div>

            {/* Job Type Dropdown */}
            <MultipleChoiceDropdown header="Job Type" items={jobTypes} />

            <div className='hidden md:block'>|</div>

            {/* Location Dropdown */}
            <MultipleChoiceDropdown header="Location" items={locations} />

            {/* Search Button */}
            <div>
                <button className="md:font-bold bg-[#785fbe] text-white md:px-8 md:py-2 p-2 rounded-full focus:outline-none hover:bg-indigo-600">
                    <span className="hidden md:inline">Find Job</span>
                    <span className="inline md:hidden px-0.5">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;