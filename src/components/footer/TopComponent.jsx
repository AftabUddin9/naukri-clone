import React from 'react'
import logo from '../../assets/naukri-logo.png'
import fblogo from '../../assets/facebook-logo.svg'
import iglogo from '../../assets/instagram-logo.svg'
import xlogo from '../../assets/twitter-logo.svg'
import lilogo from '../../assets/linkedin-logo.svg'
import androidStore from '../../assets/android-app-logo.png'
import iosStore from '../../assets/ios-app-logo.png'

const TopComponent = () => {
    return (
        <div>
            <section className='flex justify-between'>
                <div className=''>
                    <a href='/' alt='Naukri logo'>
                        <img src={logo} className='w-[148px]' />
                    </a>
                    <div className='flex-col'>
                        <div className='text-[14px] font-bold pt-10 pb-2'>Connect with us</div>
                        <div className='flex flex-row gap-4'>
                            <a href='https://www.facebook.com'><img src={fblogo} height={18} width={18} /></a>
                            <a href='https://www.instagram.com'><img src={iglogo} height={18} width={18} /></a>
                            <a href='https://www.twitter.com'><img src={xlogo} height={18} width={18} /></a>
                            <a href='https://www.linkedin.com'><img src={lilogo} height={18} width={18} /></a>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className='text-[14px] font-medium text-[#1B2437] space-y-3'>
                        <li><a href='#' >About us</a></li>
                        <li><a href='#' >Careers</a></li>
                        <li><a href='#' >Employer home</a></li>
                        <li><a href='#' >Sitemap</a></li>
                        <li><a href='#' >Credits</a></li>
                    </ul>
                </div>
                <div>
                    <ul className='text-[14px] font-medium text-[#1B2437] space-y-3'>
                        <li><a href='#' >Help center</a></li>
                        <li><a href='#' >Summons/Notice</a></li>
                        <li><a href='#' >Grievances</a></li>
                        <li><a href='#' >Report issue</a></li>
                    </ul>
                </div>
                <div>
                    <ul className='text-[14px] font-medium text-[#1B2437] space-y-3'>
                        <li><a href='#' >Privacy policy</a></li>
                        <li><a href='#' >Terms & conditions</a></li>
                        <li><a href='#' >Fraud alert</a></li>
                        <li><a href='#' >Trust & safety</a></li>
                    </ul>
                </div>
                <div className='p-6 border rounded-2xl'>
                    <div className='font-bold'>Apply on the go</div>
                    <div className='text-xs font-medium mt-1.5'>Get real-time job updates on our App</div>
                    <div className='flex flex-row pt-5 gap-3'>
                        <a href='https://play.google.com/store/apps'><img src={androidStore} height={44} width={149} /></a>
                        <a href='https://itunes.apple.com'><img src={iosStore} height={44} width={149} /></a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TopComponent