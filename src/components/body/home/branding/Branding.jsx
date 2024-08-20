import React from 'react'
import brandImg from '../../../../assets/branding/branding.jpg'
import logo from '../../../../assets/branding/logo.gif'

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
                    <div className='mr-0 flex flex-col w-80 cursor-pointer'>
                        <div className='flex flex-col'>
                            <div>
                                <img src={logo} width={50} height={50} className='' />
                            </div>
                            <div>
                                <span className='font-medium text-sm text-white whitespace-nowrap overflow-hidden text-ellipsis max-w-[100%-45px] w-fit'>Persistent</span>
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                    </div>

                    {/* right section */}
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Branding