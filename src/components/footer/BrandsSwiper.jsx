import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import brand1 from '../../assets/brand1.png'
import brand2 from '../../assets/brand2.png'
import brand3 from '../../assets/brand3.png'
import brand4 from '../../assets/brand4.png'
import brand5 from '../../assets/brand5.png'
import brand6 from '../../assets/brand6.png'
import brand7 from '../../assets/brand7.png'

const BrandsSwiper = () => {
    const brands = [
        brand1,
        brand2,
        brand3,
        brand4,
        brand5,
        brand6,
        brand7,
    ];
    return (
        <div className="">
            <Swiper
                slidesPerView={3.5}                 // Show 3 images at a time
                spaceBetween={0}                    // Space between images
                autoplay={{
                    delay: 1000,                    // Time delay for auto sliding
                    disableOnInteraction: false,
                    reverseDirection: false,        // Initially set to reverse for the effect
                }}
                speed={450}     // Speed of sliding
                loop={false}    // Loop through images
                modules={[Autoplay]}

            >
                {brands.map((brand, index) => (
                    <SwiperSlide key={index}>
                        <img src={brand} alt={`brand-${index}`} height={40} width={150} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default BrandsSwiper