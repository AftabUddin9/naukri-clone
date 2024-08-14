import React from 'react'
import arrow from '../../../../assets/arrow-right.svg'

const Tag = ({ data }) => {
    return (
        <div className='flex items-center'>
            <a href='#' title={data.title} className='flex w-full items-center border rounded-[10px] p-4 mr-4'>
                <img src={data.img} className='min-w-[38px] mr-3 overflow-hidden' />
                <span className='max-w-[95px] font-bold text-base mr-[6px] text-ellipsis whitespace-nowrap overflow-hidden cursor-pointer'>{data.title}</span>
                <img src={arrow} />
            </a>
        </div>
    )
}

export default Tag