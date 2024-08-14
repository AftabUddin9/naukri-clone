import React from 'react';
import searchIcon from '../../../../assets/search-icon.svg'
import MultipleChoiceDropdown from './MultipleChoiceDropdown';

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
        <div className='flex justify-center items-center h-full'>
            <div className='border rounded-full inline-block'>
                <div className='flex items-center gap-5 py-4 px-5 font-medium text-lg'>
                    {/* search icon */}
                    <img className='w-6 h-6' src={searchIcon} alt='search icon' />
                    {/* text input */}
                    <div className=''>
                        <input type='text' placeholder='Enter skills / designation / companies' className='w-80 py-2 focus:outline-none' />
                    </div>
                    {/* pipe */}
                    <div className='border h-5'></div>
                    {/* job type dropdown */}
                    <MultipleChoiceDropdown header="Job Type" items={jobTypes} />
                    {/* pipe */}
                    <div className='border h-5'></div>
                    {/* location dropdown */}
                    <MultipleChoiceDropdown header="Enter location" items={locations} />
                    {/* search button */}
                    <div className='rounded-full py-[10px] px-9 text-base font-bold bg-[#275df5] text-white cursor-pointer'>
                        Search
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SearchBar;