import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from 'motion/react'

const Services = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}

    id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4
        initial={{y: -20,opacity: 0}}
        whileInView={{y: 0,opacity: 1}}
        transition={{delay: 0.3, duration: 1}}
        
        className='text-center mb-2 text-lg font-Ovo'>What I offer</motion.h4>
        <motion.h2
        initial={{y: -20,opacity: 0}}
        whileInView={{y: 0,opacity: 1}}
        transition={{delay: 0.5, duration: 0.5}}
        
        className='text-center text-5xl font-Ovo'>My Services</motion.h2>

        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5}}
        
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I am a full stack developer from Fenton, MO with 15 years of experienced
            in various technologies both in backend and frontend.
        </motion.p>

        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.9}}
        
        className='grid grid-cols-(--auto-grid-temp-cols) gap-6 my-10'>
            {serviceData.map(({icon, title, description, link}, i) => (
                <motion.div
                whileHover={{scale: 1.05}}
                key={i}
                className='border border-gray-400 rounded-lg px-8 py-12 hover:bg-light-hover
                hover:shadow-black cursor-pointer hover:-translate-y-1 duration-500
                dark:hover:bg-dark-hover dark:hover:shadow-white'>
                    <Image src={icon} alt='' className='w-10' />
                    <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                        {description}
                    </p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                        Read more <Image src={assets.right_arrow} alt='' className='w-4' />
                    </a>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Services