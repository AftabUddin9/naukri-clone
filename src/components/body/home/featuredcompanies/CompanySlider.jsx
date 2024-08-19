import React, { useRef, useState } from 'react'
import company1 from '../../../../assets/featured-companies/ftcompanylogo1.gif'
import company2 from '../../../../assets/featured-companies/ftcompanylogo2.gif'
import company3 from '../../../../assets/featured-companies/ftcompanylogo3.gif'
import company4 from '../../../../assets/featured-companies/ftcompanylogo4.gif'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CompanyCard from './CompanyCard'
import NavBtn from '../../../shared/NavBtn'
import FilterBtns from './FilterBtns'; // Import the FilterBtns component

const CompanySlider = () => {
    const [filter, setFilter] = useState(1);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const CompanyDetails = {
        1: [
            { name: 'Actalent Services', rating: 3.5, review: '264', slogan: "We are a global leader in engineering & science service.", logo: company1, theme: 'bg-[#fdfef9]' },
            { name: 'SBI', rating: 4.0, review: '14.4K+', slogan: "Indian multinational public sector bank.", logo: company3, theme: 'bg-[#fff7f8]' },
            { name: 'Axis Bank', rating: 3.9, review: '15.8K+', slogan: "Private sector bank in India.", logo: company4, theme: 'bg-[#f7fafd]' },
            { name: 'Reliance Industries (RIL)', rating: 4.1, review: '14.1K+', slogan: "Indian multinational conglomerate company.", logo: company2, theme: 'bg-[#fdfef9]' },
            { name: 'TCS', rating: 4.1, review: '12.1K+', slogan: "Global IT services, consulting and business solutions.", logo: company2, theme: 'bg-[#fdfef9]' },
            { name: 'Wipro', rating: 4.0, review: '8.4K+', slogan: "Leading global information technology company.", logo: company3, theme: 'bg-[#fff7f8]' },
            { name: 'HCL', rating: 3.9, review: '9.8K+', slogan: "Global IT services and consulting company.", logo: company4, theme: 'bg-[#f7fafd]' },
            { name: 'Airtel', rating: 4.0, review: '12.4K+', slogan: "Leading global telecom company.", logo: company3, theme: 'bg-[#fff7f8]' },
            { name: 'Jio', rating: 3.9, review: '20.8K+', slogan: "True 5G is here to unlock the limitless era.", logo: company4, theme: 'bg-[#f7fafd]' },
            { name: 'Actalent Services', rating: 3.5, review: '264', slogan: "We are a global leader in engineering & science service.", logo: company1, theme: 'bg-[#fdfef9]' },
            { name: 'Reliance Industries (RIL)', rating: 4.1, review: '14.1K+', slogan: "Indian multinational conglomerate company.", logo: company2, theme: 'bg-[#fdfef9]' },
        ],
        2: [
            { name: 'Infosys', rating: 4.2, review: '10.4K+', slogan: "Global leader in next-generation digital services.", logo: company1, theme: 'bg-[#fdfef9]' },
            { name: 'TCS', rating: 4.1, review: '12.1K+', slogan: "Global IT services, consulting and business solutions.", logo: company2, theme: 'bg-[#fdfef9]' },
            { name: 'Actalent Services', rating: 3.5, review: '264', slogan: "We are a global leader in engineering & science service.", logo: company1, theme: 'bg-[#fdfef9]' },
            { name: 'Wipro', rating: 4.0, review: '8.4K+', slogan: "Leading global information technology company.", logo: company3, theme: 'bg-[#fff7f8]' },
            { name: 'HCL', rating: 3.9, review: '9.8K+', slogan: "Global IT services and consulting company.", logo: company4, theme: 'bg-[#f7fafd]' },
        ],
        3: [
            { name: 'HDFC Bank', rating: 4.2, review: '11.4K+', slogan: "Leading banking and financial services provider.", logo: company1, theme: 'bg-[#fdfef9]' },
            { name: 'ICICI Bank', rating: 4.1, review: '13.1K+', slogan: "Indian multinational bank.", logo: company2, theme: 'bg-[#fdfef9]' },
            { name: 'Airtel', rating: 4.0, review: '12.4K+', slogan: "Leading global telecom company.", logo: company3, theme: 'bg-[#fff7f8]' },
            { name: 'SBI', rating: 4.0, review: '14.4K+', slogan: "Indian multinational public sector bank.", logo: company3, theme: 'bg-[#fff7f8]' },
            { name: 'Axis Bank', rating: 3.9, review: '15.8K+', slogan: "Private sector bank in India.", logo: company4, theme: 'bg-[#f7fafd]' },
            { name: 'Reliance Industries (RIL)', rating: 4.1, review: '14.1K+', slogan: "Indian multinational conglomerate company.", logo: company2, theme: 'bg-[#fdfef9]' },
        ]
    };

    const filteredDetails = CompanyDetails[filter];

    return (
        <div className="relative">
            <FilterBtns setFilter={setFilter} />
            <Swiper
                slidesPerView={4.5}
                spaceBetween={10}
                slidesPerGroup={4}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onSwiper={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.update();
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                {filteredDetails.map((data, index) => (
                    <SwiperSlide key={index}>
                        <CompanyCard data={data} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Custom Navigation Buttons */}
            <NavBtn prevRef={prevRef} nextRef={nextRef} />
        </div>
    )
}

export default CompanySlider;
