import React, { useRef } from 'react'
import bannerImg from '../../../../assets/jobRolesChr.png'
import NavBtn from '../../../shared/NavBtn';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../../shared/PaginationCustomize.css'
import JobGrid from './JobGrid';

const JobRoles = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const Jobs1 = [
        { title: 'Full Stack Developer', stat: "15.1K+" },
        { title: 'Mobile/App Developer', stat: "2.1K+" },
        { title: 'Front End Developer', stat: "3.2K+" },
        { title: 'DevOps Engineer', stat: "2.1K+" },
        { title: 'Engineering Manager', stat: "1.1K+" },
        { title: 'Technical Lead', stat: "9.2K+" },
    ];
    const Jobs2 = [
        { title: 'Automation Test Engineer', stat: "15.1K+" },
        { title: 'Cyber Security', stat: "2.1K+" },
        { title: 'Technical Architect', stat: "3.2K+" },
        { title: 'Business Analyst', stat: "2.1K+" },
        { title: 'Data Scientist', stat: "1.1K+" },
        { title: 'Program Manager - Technology/IT', stat: "9.2K+" },
    ];
    const Jobs3 = [
        { title: 'Product Manager', stat: "15.1K+" },
        { title: 'UI / UX Designer', stat: "2.1K+" },
        { title: 'Research Analyst', stat: "3.2K+" },
        { title: 'Branch Manager', stat: "2.1K+" },
        { title: 'Functional Consultant', stat: "1.1K+" },
        { title: 'Chartered Accountant', stat: "9.2K+" },
    ];
    return (
        <div>
            <div className='my-[35px] inline-block bg-white min-w-[50px] min-h-[50px] w-full overflow-x-auto overflow-y-hidden text-[#121224]'>
                <div className='relative w-[1120px] mt-10 mb-[50px] h-[335px] border rounded-[20px] border-[#ffe9d6]' style={{ background: 'linear-gradient(180deg, rgba(255,240,226,0) 0%, #FFF0E2 100%)' }}>
                    {/* left section */}
                    <div className='absolute w-[420px] pl-[60px] py-[25px]'>
                        <img src={bannerImg} height={175} width={389} className='' />
                        <p className='w-[275px] mt-[6px] font-black text-2xl'>Discover jobs across popular roles</p>
                        <p className='mt-3 w-[360px] text-sm font-medium'>Select role and we'll show you relevant jobs for it!</p>
                    </div>
                    {/* right section */}
                    <div className='relative top-[-38px] left-[584px] h-[411px] w-[476px] border rounded-[20px] bg-white'>
                        {/* swhiper component */}
                        <div className='static mx-auto overflow-hidden p-0'>
                            {/* swiper */}
                            <div>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={8}
                                    slidesPerGroup={1}
                                    navigation={{
                                        prevEl: prevRef.current,
                                        nextEl: nextRef.current,
                                    }}
                                    pagination={true}
                                    onSwiper={(swiper) => {
                                        // Explicitly set the navigation buttons after swiper initialization
                                        swiper.params.navigation.prevEl = prevRef.current;
                                        swiper.params.navigation.nextEl = nextRef.current;
                                        swiper.navigation.update();
                                    }}
                                    modules={[Navigation, Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <JobGrid data={Jobs1} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <JobGrid data={Jobs2} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <JobGrid data={Jobs3} />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            {/* custom button */}
                            <div>
                                <NavBtn prevRef={prevRef} nextRef={nextRef} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobRoles