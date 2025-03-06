'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, {useEffect, useRef, useState} from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuBarRef = useRef();

    const openSideMenu = () => {
        sideMenuBarRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeSideMenu = () => {
        sideMenuBarRef.current.style.transform = 'translateX(16rem)';
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
        
        window.addEventListener('scroll', (ev) => {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        });
    }, []);

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt="" className='w-full' />
    </div>
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] pt-2 pb-0.1
        flex items-center justify-between z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-xs dark:bg-dark-theme dark:shadow-white/20 " : ""}`}>
        <a href="" className='flex items-center ml-5 pl-5'>
            <div className='[writing-mode:vertical-lr]'>ᠪᠠᠲᠤᠲᠤᠷᠤ</div>
            <Image src={assets.my_profile_logo} alt="" className="w-28  ml-0.5" cursor-pointer="true" />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8
            rounded-full px-12 py-3 ${isScroll ? "" : "bg-white/50 shadow-sx dark:border dark:border-white/50 dark:bg-transparent"} `}>
            <li><a className="font-Ovo" href="#top">Home</a></li>
            <li><a className="font-Ovo" href="#about">About Me</a></li>
            <li><a className="font-Ovo" href="#services">Services</a></li>
            <li><a className="font-Ovo" href="#work">My Work</a></li>
            <li><a className="font-Ovo" href="#contact">Contact Me</a></li>
        </ul>

        <div className='flex items-center gap-4'>
            <button onClick={() => setIsDarkMode(prev => !prev)}>
                <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className='w-6' />
            </button>
            <a href="#contact" className='hidden lg:flex items-center gap-3
            px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
                Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className="w-3" /></a>

            <button className='block md:hidden ml-3' onClick={openSideMenu}>
                <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className='w-6' />
            </button>
        </div>

        {/* mobile menu */}
        <ul ref={sideMenuBarRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
        top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-dark-hover dark:text-white">

            <div className='absolute right-6 top-6' onClick={closeSideMenu}>
                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
            </div>

            <li><a className="font-Ovo" onClick={closeSideMenu} href="#top">Home</a></li>
                <li><a className="font-Ovo" onClick={closeSideMenu} href="#about">About Me</a></li>
                <li><a className="font-Ovo" onClick={closeSideMenu} href="#services">Services</a></li>
                <li><a className="font-Ovo" onClick={closeSideMenu} href="#work">My Work</a></li>
                <li><a className="font-Ovo" onClick={closeSideMenu} href="#contact">Contact Me</a></li>
            </ul>
    </nav>
    </>
  )
}

export default Navbar