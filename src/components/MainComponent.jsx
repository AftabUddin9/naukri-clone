import React from 'react'
import HeaderComponent from './header/HeaderComponent'
import BodyComponent from './body/BodyComponent'
import FooterComponent from './footer/FooterComponent'
import BrandsSwiper from './footer/BrandsSwiper'

const MainComponent = () => {
    return (
        <div>
            <HeaderComponent />
            <BodyComponent />
            <FooterComponent />
        </div>
    )
}

export default MainComponent