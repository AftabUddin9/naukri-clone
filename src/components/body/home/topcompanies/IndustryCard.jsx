import React from 'react'
import arrow from '../../../../assets/arrow-right.svg'


const IndustryCard = ({ data }) => {
    return (
        <div className='flex flex-col justify-center p-5 mr-4 border rounded-[10px] cursor-pointer'>
            <div className='flex items-center'>
                <a href='#' className='max-w-44 font-bold block overflow-hidden text-ellipsis'>{data.type}</a>
                <img src={arrow} className='ml-[6px] w-[14px] h-[14px]' />
            </div>
            <span className='font-medium text-xs mt-[6px]'>{data.subline}</span>
            {/* logos */}
            <div className='flex justify-between mt-5 cursor-pointer'>
                {data.logos.map((logoSrc, index) => (
                    <div key={index} className='flex justify-between border rounded-[7px] overflow-hidden'>
                        <img src={logoSrc} className='w-10 h-10' alt={`Company logo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default IndustryCard