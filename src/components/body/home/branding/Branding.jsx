import React from 'react'
import brandImg from '../../../../assets/branding.jpg'

const Branding = () => {
    return (
        <div>
            <div className='inline-block my-[35px] border-0 rounded-[20px] min-w-[50px] min-h-[50px] w-full pt-6 px-6 pb-7 cursor-pointer bg-center'>
                <div
                    className='bg-no-repeat bg-cover bg-center  flex border rounded-[20px] border-[#eaf1f5]'
                    style={{
                        backgroundImage: `linear-gradient(86.3deg, rgba(0, 0, 0, 0.8) 18.79%, rgba(0, 0, 0, 0.52) 31.17%, rgba(0, 0, 0, 0.04) 98.42%), url("${brandImg}")`
                    }}
                >
                    {/* left section */}
                    <div></div>
                    {/* right section */}
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Branding