import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-5 mb-10'>
        <div className='text-center'>
            <Image src={assets.my_profile_logo} alt='' className='w-36 mx-auto mb-2' />

            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
                tbattur22@yahoo.com
            </div>
        </div>

        <div>
            <p>@ 2025 Battur Tugsgerel. All rights reserved.</p>

        </div>
    </div>
  )
}

export default Footer