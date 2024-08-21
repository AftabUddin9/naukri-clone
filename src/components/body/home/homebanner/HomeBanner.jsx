import React from 'react'
import homeBanner from '../../../../assets/home-banner.png'

const HomeBanner = () => {
    return (
        <div className='flex items-center justify-center mb-5'>
            <img src={homeBanner} className='w-[902px] h-[182px] cursor-pointer' />
        </div>
    )
}

export default HomeBanner