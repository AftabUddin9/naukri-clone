import React from 'react'
import Intro from './intro/Intro'
import SearchBar from './searchbar/SearchBar'
import HomeBanner from './homebanner/HomeBanner'
import TrendingTags from './trendingtags/TrendingTags'
import TopCompanies from './topcompanies/TopCompanies'
import Top from './topcompanies/Top'


const HomePage = () => {
    return (
        <div>
            <Intro />
            <SearchBar />
            {/* home body */}
            <div className=' mt-16 mx-52'>
                <HomeBanner />
                <TrendingTags />
                <TopCompanies />
            </div>
        </div>
    )
}

export default HomePage