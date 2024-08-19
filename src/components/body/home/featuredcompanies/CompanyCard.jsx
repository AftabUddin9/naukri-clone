import React from 'react'
import star from '../../../../assets/featured-companies/star.svg'
import 'swiper/css';
import 'swiper/css/navigation';

const CompanyCard = ({ data }) => {
    return (
        <div className='max-w-[300px] w-[233.33px] min-h-[294px] py-5 px-[18px] my-3 border rounded-2xl hover:shadow-lg cursor-pointer'>
            <div className='flex justify-center text-center h-[50px]'>
                <img src={data.logo} className='w-auto' />
            </div>
            <div className={`flex flex-col justify-center text-center border rounded-[10px] border-none h-[92px] px-4 mt-3 ${data.theme}`}>
                <h3 className='text-ellipsis overflow-hidden font-bold text-[17px] text-[#121224]'>
                    <a href='#'>{data.name}</a>
                </h3>
                <div className='relative flex items-center mx-auto mt-3'>
                    <span className='absolute max-w-3 text-[11px]'><img src={star} className='w-3 h-3' /></span>
                    <span className='font-bold text-xs border-r mr-[6px] ml-[18px] pr-[6px]'>{data.rating}</span>
                    <span className='font-medium text-xs'>{data.review} reviews</span>
                </div>
            </div>
            <div className='flex flex-col justify-center font-medium text-sm h-10 mt-3'>
                <p style={{
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    color: '#474d6a',
                    textAlign: 'center',
                }}>{data.slogan}</p>
            </div>
            <div className='flex text-center justify-center mt-6'>
                <a href='#' className='bg-[#EDF4FF] text-[#275df5] border rounded-full border-none font-bold py-[11px] px-5'>View jobs</a>
            </div>
        </div>
    )
}

export default CompanyCard