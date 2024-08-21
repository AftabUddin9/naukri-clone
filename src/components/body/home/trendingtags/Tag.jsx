import React from 'react'
import arrow from '../../../../assets/arrow-right.svg'

const Tag = ({ data }) => {
    return (
        <div className='flex items-center justify-center gap-4'>
            {
                data.map((data, index) => (
                    <a href='#' title={data.title} key={index} className='flex w-full items-center border rounded-[10px] p-4'>
                        <img src={data.img} className='min-w-[38px] mr-3 overflow-hidden rounded-full' />
                        <span className='max-w-[95px] font-bold text-base mr-[6px] text-ellipsis whitespace-nowrap overflow-hidden cursor-pointer'>{data.title}</span>
                        <img src={arrow} />
                    </a>
                ))
            }

        </div>
    )
}

export default Tag