import React from 'react'
import arrow from '../../../../assets/arrow-right.svg'


const IndustryCard = ({ industryData }) => {
    return (
        <div className='flex'>
            {industryData.map((data, index) => {
                return (
                    <div key={index} className='flex flex-col justify-center w-[233px] p-5 mr-4 border rounded-[10px] cursor-pointer'>
                        <div className='flex items-center'>
                            <a href='#' className='max-w-44 font-bold block overflow-hidden text-ellipsis'>{data.type}</a>
                            <img src={arrow} className='ml-[6px] w-[14px] h-[14px]' />
                        </div>
                        <span className='font-medium text-xs mt-[6px]'>{data.subline}</span>
                        {/* logos */}
                        <div className='mt-5 cursor-pointer inline-flex'>
                            {data.logos.map((logoSrc, index) => (
                                <div key={index} className='mr-[10px] justify-center border rounded-[7px] overflow-hidden'>
                                    <img src={logoSrc} className='w-10 h-10' alt={`Company logo ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default IndustryCard