import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import arrow from '../../../../assets/arrow-right.svg'
import mnclogo1 from '../../../../assets/top-companies/mnc-logo-1.gif'
import mnclogo2 from '../../../../assets/top-companies/mnc-logo-2.gif'
import mnclogo3 from '../../../../assets/top-companies/mnc-logo-3.gif'
import mnclogo4 from '../../../../assets/top-companies/mnc-logo-4.gif'

const Top = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const industryData1 = [
        { type: 'MNC1', subline: '1.9K+ are actively hiring', logos: [mnclogo1, mnclogo2, mnclogo3, mnclogo4] },
        { type: 'MNC2', subline: '1.9K+ are actively hiring', logos: [mnclogo1, mnclogo2, mnclogo3, mnclogo4] },
        { type: 'MNC3', subline: '1.9K+ are actively hiring', logos: [mnclogo1, mnclogo2, mnclogo3, mnclogo4] },
        { type: 'MNC4', subline: '1.9K+ are actively hiring', logos: [mnclogo1, mnclogo2, mnclogo3, mnclogo4] },
        { type: 'MNC5', subline: '1.9K+ are actively hiring', logos: [mnclogo1, mnclogo2, mnclogo3, mnclogo4] },
        { type: 'MNC6', subline: '1.9K+ are actively hiring', logos: [mnclogo1, mnclogo2, mnclogo3, mnclogo4] },
        { type: 'MNC7', subline: '1.9K+ are actively hiring', logos: [mnclogo1, mnclogo2, mnclogo3, mnclogo4] },
        { type: 'MNC8', subline: '1.9K+ are actively hiring', logos: [mnclogo1, mnclogo2, mnclogo3, mnclogo4] },
        { type: 'MNC9', subline: '1.9K+ are actively hiring', logos: [mnclogo1, mnclogo2, mnclogo3, mnclogo4] },
        { type: 'MNC10', subline: '1.9K+ are actively hiring', logos: [mnclogo1, mnclogo2, mnclogo3, mnclogo4] },
        { type: 'MNC11', subline: '1.9K+ are actively hiring', logos: [mnclogo1, mnclogo2, mnclogo3, mnclogo4] },
        { type: 'MNC12', subline: '1.9K+ are actively hiring', logos: [mnclogo1, mnclogo2, mnclogo3, mnclogo4] },
        { type: 'MNCs13', subline: '1.9K+ are actively hiring', logos: [mnclogo1, mnclogo2, mnclogo3, mnclogo4] },
        { type: 'MNC14', subline: '1.9K+ are actively hiring', logos: [mnclogo1, mnclogo2, mnclogo3, mnclogo4] },
    ];

    return (
        <div className="relative">
            <Swiper
                slidesPerView={4.5}
                spaceBetween={10}
                slidesPerGroup={4}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onSwiper={(swiper) => {
                    // Explicitly set the navigation buttons after swiper initialization
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.update();
                }}
                modules={[Navigation]}
                className="mySwiper"
            >

                {industryData1.map((data, index) => (
                    <SwiperSlide>
                        <div key={index} className='flex flex-col justify-center p-5 mr-4 border rounded-[10px] cursor-pointer'>
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
                    </SwiperSlide>
                ))}

            </Swiper>

            {/* Custom Navigation Buttons */}
            <div
                ref={prevRef}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 border-[1px] bg-white rounded-full cursor-pointer"
            >
                <svg
                    className={`w-4 h-4 fill-current`}
                    viewBox="0 0 20 20"
                >
                    <path d="M12.707 14.707a1 1 0 010-1.414L8.414 10l4.293-3.293a1 1 0 00-1.414-1.414l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414 0z" />
                </svg>
            </div>
            <div
                ref={nextRef}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 border-[1px] bg-white rounded-full cursor-pointer"
            >
                <svg
                    className={`w-4 h-4 fill-current`}
                    viewBox="0 0 20 20"
                >
                    <path d="M7.293 14.707a1 1 0 010-1.414L11.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                </svg>
            </div>
        </div>
    )
}

export default Top