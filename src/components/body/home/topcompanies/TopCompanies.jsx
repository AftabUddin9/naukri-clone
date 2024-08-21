import React from 'react'
import Top from './Top'

const TopCompanies = () => {

    return (
        <div className='my-8'>
            {/* headline */}
            <div className='flex justify-center'>
                <h2 className='font-black text-2xl text-[#121224]'>Top companies hiring now</h2>
            </div>
            {/* cards */}
            <div className='py-8'>
                <Top />
            </div>
        </div>
    )
}

export default TopCompanies