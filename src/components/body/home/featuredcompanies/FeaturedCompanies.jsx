import React from 'react'
import CompanySlider from './CompanySlider'


const FeaturedCompanies = () => {
    return (
        <div className=''>
            <h2 className='text-center font-black text-2xl text-[#121124]'>Featured companies actively hiring</h2>
            <CompanySlider />
            <div className='flex items-center justify-center py-8'>
                <a href='' className='border rounded-full border-[#3c6cf6] font-bold text-[#3c6cf6] py-[10px] px-5 hover:bg-[#f9f8ff]'>View all companies</a>
            </div>

        </div>
    )
}

export default FeaturedCompanies