import React, { useRef } from 'react'
import star from '../../../../assets/featured-companies/star.svg'
import company1 from '../../../../assets/featured-companies/ftcompanylogo1.gif'
import company2 from '../../../../assets/featured-companies/ftcompanylogo2.gif'
import company3 from '../../../../assets/featured-companies/ftcompanylogo3.gif'
import company4 from '../../../../assets/featured-companies/ftcompanylogo4.gif'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CompanyCard from './CompanyCard'

const CompanySlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const CompanyDetails = [
        { name: 'Actalent Services', rating: 3.5, review: '264', slogan: "We are a global leader in engineering & science service.", logo: company1, theme: 'bg-[#fdfef9]' },
        { name: 'Reliance Industries (RIL)', rating: 4.1, review: '14.1K+', slogan: "Indian multinational conglomerate company.", logo: company2, theme: 'bg-[#fdfef9]' },
        { name: 'Airtel', rating: 4.0, review: '12.4K+', slogan: "Leading global telecom company.", logo: company3, theme: 'bg-[#fff7f8]' },
        { name: 'Jio', rating: 3.9, review: '20.8K+', slogan: "True 5G is here to unlock the limitless era.", logo: company4, theme: 'bg-[#f7fafd]' },
        { name: 'Actalent Services', rating: 3.5, review: '264', slogan: "We are a global leader in engineering & science service.", logo: company1, theme: 'bg-[#fdfef9]' },
        { name: 'Reliance Industries (RIL)', rating: 4.1, review: '14.1K+', slogan: "Indian multinational conglomerate company.", logo: company2, theme: 'bg-[#fdfef9]' },
        { name: 'Airtel', rating: 4.0, review: '12.4K+', slogan: "Leading global telecom company.", logo: company3, theme: 'bg-[#fff7f8]' },
        { name: 'Jio', rating: 3.9, review: '20.8K+', slogan: "True 5G is here to unlock the limitless era.", logo: company4, theme: 'bg-[#f7fafd]' },
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

                <div className='flex gap-5 pt-[18px] pb-9'>
                    {
                        CompanyDetails.map((data, index) => (
                            <SwiperSlide>
                                <div key={index} className=''>
                                    <CompanyCard data={data} />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </div>
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

export default CompanySlider