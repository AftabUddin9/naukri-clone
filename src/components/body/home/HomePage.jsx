import React from 'react'
import Intro from './intro/Intro'
import SearchBar from './searchbar/SearchBar'
import HomeBanner from './homebanner/HomeBanner'
import TrendingTags from './trendingtags/TrendingTags'
import TopCompanies from './topcompanies/TopCompanies'
import FeaturedCompanies from './featuredcompanies/FeaturedCompanies'
import ExploreBanner from './explorebanner/ExploreBanner'
import Branding from './branding/Branding'


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
                <FeaturedCompanies />
                <ExploreBanner />
                <Branding />
            </div>
        </div>
    )
}

export default HomePage