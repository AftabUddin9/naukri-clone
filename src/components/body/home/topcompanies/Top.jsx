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
import NavBtn from '../../../shared/NavBtn';

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
        { type: 'MNC13', subline: '1.9K+ are actively hiring', logos: [mnclogo1, mnclogo2, mnclogo3, mnclogo4] },
        { type: 'MNC14', subline: '1.9K+ are actively hiring', logos: [mnclogo1, mnclogo2, mnclogo3, mnclogo4] },
    ];

    return (
        <div className="relative">
            <Swiper
                slidesPerView={4.5}
                spaceBetween={8}
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
            <NavBtn />
        </div>
    )
}

export default Top