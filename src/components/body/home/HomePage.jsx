import React from 'react'
import Intro from './intro/Intro'
import SearchBar from './searchbar/SearchBar'
import HomeBanner from './homebanner/HomeBanner'
import TrendingTags from './trendingtags/TrendingTags'


const HomePage = () => {
    return (
        <div>
            <Intro />
            <SearchBar />
            {/* home body */}
            <div className='flex flex-col items-center justify-center mt-16 mx-52'>
                <HomeBanner />
                <TrendingTags />
            </div>
        </div>
    )
}

export default HomePage