import React from 'react';
import arrow from '../../../../assets/arrow-right.svg';

const JobGrid = ({ data }) => {
    return (
        <div className='relative w-[474px] h-full'>
            <div className='pt-[61px] pl-6'>
                {
                    data.map((job, i) => {
                        return (
                            <div key={i} className='relative inline-flex items-center justify-center h-[74px] w-[207px] mr-3 mb-[22px]'>
                                <div className='cursor-pointer w-[202px] h-[74px] border rounded-2xl'>
                                    <div className='relative flex flex-col justify-center h-[74px] pl-5'>
                                        <a className='block max-w-40 overflow-hidden whitespace-nowrap text-ellipsis font-bold mb-[6px]'>{job.title}</a>
                                        <div className='flex items-center'>
                                            <p className='text-sm font-medium'>{job.stat} Jobs</p>
                                            <img src={arrow} className='w-auto h-[13px] ml-[10px]' alt="arrow" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }

            </div>
        </div>
    );
}

export default JobGrid;
