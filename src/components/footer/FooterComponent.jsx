import React from 'react'
import TopComponent from './TopComponent'
import BottomComponent from './BottomComponent'

const FooterComponent = () => {

    return (
        <div className='mx-52'>
            {/* footer top container */}
            <TopComponent />

            {/* footer separator */}
            <div className='my-10 border-b'></div>

            {/* footer bottom container */}
            <BottomComponent />
        </div>
    )
}

export default FooterComponent