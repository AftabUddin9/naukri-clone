import React from 'react'
import logo2 from '../../../../assets/naukri-logo2.svg'
import arrow from '../../../../assets/arrow-right.svg'

const ExploreBanner = () => {
    const campus = [
        { id: 1, tag: 'Expert speak' },
        { id: 1, tag: 'Contests' },
        { id: 1, tag: 'NCAT' },
        { id: 1, tag: 'Pathfinder' },
        { id: 1, tag: 'Jobs & Internships' },
    ];
    return (
        <div className='my-9'>
            <div className='border rounded-2xl border-[#e7e7f1] bg-white min-w-[50px] min-h-[50px] w-full'>
                <div className='relative flex flex-row items-center max-w-[1120px] mx-auto pr-[42px] pl-2'>
                    <img src={logo2} className='w-[177px] h-[166px]' />
                    <div className='flex flex-col'>
                        <p className='text-[#121224] font-bold text-xl'>Introduce a career platform for college students & fresh grads</p>
                        <p className='mt-[6px] max-w-md text-[#717b9e] font-medium text-sm'>Explore contests, webinars, take aptitude, prepare for your dream career & find jobs & internships</p>
                        <div className='flex flex-row gap-[10px] mt-5'>
                            {
                                campus.map((data, index) => {
                                    return (
                                        <a key={index} href=''>
                                            <div className='flex flex-row items-center justify-center border rounded-full py-2 px-3'>
                                                <span className='text-[#474d6a] font-bold text-xs'>{data.tag}</span>
                                                <img src={arrow} height={12} width={12} />
                                            </div>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <a href='' className='inline-block py-[10px] px-[14px] border rounded-full bg-[#275df5] text-white font-bold ml-auto w-[200px] text-center'>Explore now</a>
                    <div className='absolute top-0 right-[42px] bg-[#efedff] border rounded-br-xl rounded-bl-xl py-[5px] px-[10px] text-[#474d6a] text-[11px] font-bold'>Just launched</div>
                </div>
            </div>
        </div>
    )
}

export default ExploreBanner