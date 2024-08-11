import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../assets/naukri-logo.png';

const Navbar = () => {
    const navItems = [
        { link: "Jobs", path: "/" },
        { link: "Companies", path: "/companies" },
        { link: "Services", path: "/services" },
    ];
    return (
        <div className='shadow-lg max-w-screen-2xl sticky py-2'>
            <nav className='mx-52 flex flex-row items-center justify-between'>
                {/* left-side items */}
                <div className='flex flex-row items-center gap-14 my-2'>
                    {/* naukri-logo */}
                    <a href='/' className=''>
                        <img src={logo} alt='Logo' className='w-[148px]' />
                    </a>
                    {/* showing navItems using map */}
                    <ul className='flex space-x-8 my-2'>
                        {
                            navItems.map(({ link, path }) => (
                                <Link key={link} to={path} className='cursor-pointer hover:border-b-[4px] rounded hover:border-b-[#f05537]'>
                                    {link}
                                </Link>
                            ))
                        }
                    </ul>
                </div>

                {/* right-side items */}
                <div className='flex flex-row items-center gap-4'>
                    {/* login-register buttons */}
                    <Link to='/login'>
                        <button className='bg-white text-[#275DF5] rounded-full border-[1px] border-[#275DF5] px-5 p-2 hover:text-black'>
                            <span className='font-bold'>Login</span>
                        </button>
                    </Link>
                    <Link to='/signup'>
                        <button className='bg-[#f05537] text-white rounded-full border-[1px] border-[#f05537] px-5 p-2 hover:bg-[#fc7358]'>
                            <span className='font-bold'>Register</span>
                        </button>
                    </Link>
                    {/* employer dropdown */}
                    <div className='flex flex-row space-x-0 items-center border-l border-l-gray-300 pl-3'>
                        <span className='border-b-3 hover:border-b-[#f05537]'>For employers</span>
                        <svg
                            className="w-6 h-6 ml-2 fill-current text-gray-500 pt-1"
                            viewBox="0 0 20 20">
                            <path
                                d="M6 8a.75.75 0 011.06 0L10 10.94l2.94-2.94a.75.75 0 111.06 1.06l-3.47 3.47a.75.75 0 01-1.06 0L6 9.06A.75.75 0 016 8z"
                            />
                        </svg>
                    </div>
                </div>


            </nav>
        </div>
    )
}

export default Navbar