import React from 'react'
import brandImg from '../../../../assets/branding/branding.jpg'
import logo from '../../../../assets/branding/logo.gif'
import star from '../../../../assets/star.svg'
import vidIcon from '../../../../assets/branding/video-icon.svg'
import thumbnail from '../../../../assets/branding/thumbnail.jpg'

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
                            <div className='rounded-lg w-[50px] h-[50px] overflow-hidden'>
                                <img src={logo} width={50} height={50} className='' />
                            </div>
                            <div className='flex w-[250px] mt-[10px]'>
                                <span className='font-medium text-sm text-white whitespace-nowrap overflow-hidden text-ellipsis max-w-[100%-45px] w-fit'>Persistent</span>
                                <div className='ml-[7px] w-[42px] '>
                                    <img src={star} alt='rating-star' className='relative top-[2px]' />
                                    <span className='font-bold text-xs text-white ml-1'>3.7</span>
                                </div>
                            </div>
                        </div>
                        <div className='mt-6 w-[320px] font-black text-2xl text-white overflow-hidden'>Let's unleash your full potential.</div>
                        <div className='mt-[6px]'>
                            <a href='' className='text-[#4777fe]'>Learn more</a>
                        </div>
                    </div>

                    {/* right section */}
                    <div className='ml-auto min-w-0'>
                        <div>
                            <div className='w-[335px] h-[188px]' >
                                <img src={thumbnail} loading='lazy' alt='thumbnail' className='object-cover relative inline-block w-full h-full' />
                                <div className='opacity-[0.1] absolute w-full h-full top-0 left-0 bg-black'></div>
                                <div className='absolute w-[100%-32px] top-0 left-0 text-white my-3 mx-4 text-lg font-medium opacity-[0.9] whitespace-nowrap overflow-hidden text-ellipsis'></div>
                                <button type='text' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                    <img src={vidIcon} width={64} height={64} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Branding