import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:flex-row bg-black py-5 items-center'>
        <Image src={assets.logo_light} alt='' width={120} />
        <p className='text-sm text-white'>All Rights Reserved, @Bloggers</p>
        <div className='flex'>
            <Image src={assets.facebook_icon} alt='' width={40} className='cursor-pointer' />
            <Image src={assets.twitter_icon} alt='' width={40} className='cursor-pointer' />
            <Image src={assets.googleplus_icon} alt='' width={40} className='cursor-pointer' />
        </div>
    </div>
  )
}

export default Footer