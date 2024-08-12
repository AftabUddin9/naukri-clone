import React from 'react'
import infoedge from '../../assets/infoedge-logo.svg'
import BrandsSwiper from './BrandsSwiper'

const BottomComponent = () => {
    return (
        <div>
            <section className='flex'>
                <div className='w-5/12 flex items-center gap-5'>
                    <a href='http://infoedge.in'><img src={infoedge} height={25} width={91} alt='naukri social logo' /></a>
                    <div className='text-xs font-normal'>
                        <div>All trademarks are the property of their respective owners</div>
                        <div>All rights reserved © 2024 Info Edge (India) Ltd.</div>
                    </div>
                </div>
                <div className='w-7/12 flex items-center'>
                    <div className='w-3/12 text-sm font-medium'><span className='items-center mx-12'>Our businesses</span></div>
                    {/* brands slide */}
                    <div className='w-9/12'>
                        <BrandsSwiper />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BottomComponent