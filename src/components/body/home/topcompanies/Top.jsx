import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import mnclogo1 from '../../../../assets/top-companies/mnc-logo-1.gif'
import mnclogo2 from '../../../../assets/top-companies/mnc-logo-2.gif'
import mnclogo3 from '../../../../assets/top-companies/mnc-logo-3.gif'
import mnclogo4 from '../../../../assets/top-companies/mnc-logo-4.gif'
import IndustryCard from './IndustryCard';

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
                        <div key={index}>
                            <IndustryCard data={data} />
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

            {/* Custom Navigation Buttons */}
            <div
                ref={prevRef}
                className="absolute top-1/2 left-[-24px] transform -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 border-[1px] bg-white rounded-full cursor-pointer"
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
                className="absolute top-1/2 right-[-24px] transform -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 border-[1px] bg-white rounded-full cursor-pointer"
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