import React from 'react'
import Image from 'next/image'
import Logo from '../public/sob.png'
import Link from 'next/link'

import { SOB_FACEBOOK_URL, SOB_INSTAGRAM_URL } from '@/utils/constants'
import InstagramLogo from './InstagramLogo'
import FacebookLogo from './FacebookLogo'

function Footer() {
  return (
    <div className="bg-black border-t-2 border-t-gray-900 ">
      <div className="py-8 container mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 mb-4">
            <Image src={Logo} style={{ objectFit: 'contain' }} alt="sob logo" />
          </div>
          <h3 className="font-bold text-2xl">SOB Productions</h3>
        </div>

        <div className="flex flex-col md:flex-row items-center mt-8 md:mt-0">
          <Link href="/">
            <p className="hover:cursor-pointer hover:opacity-80 md:mr-4 py-2">Home</p>
          </Link>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/tickets">
            <p className="hover:cursor-pointer hover:opacity-80 md:mr-4 py-2">Tickets</p>
          </a>
          <Link href="/program">
            <p className="hover:cursor-pointer hover:opacity-80 md:mr-4 py-2">Program</p>
          </Link>
          <Link href="/contact">
            <p className="hover:cursor-pointer hover:opacity-80  py-2">Contact</p>
          </Link>
          <Link href="/admin">
            <p className="hover:cursor-pointer hover:opacity-80  py-2">Admin</p>
          </Link>

          <div className="flex flex-row items-center">
            <Link href={SOB_INSTAGRAM_URL} target="_blank" className="mt-4 md:mt-0 md:ml-8">
              <InstagramLogo />
            </Link>
            <Link href={SOB_FACEBOOK_URL} target="_blank" className="mt-4 md:mt-0 ml-2">
              <FacebookLogo />
            </Link>
          </div>
        </div>
      </div>

      <div className="font-medium text-sm text-center py-4 px-4 text-neutral-600">
        Website and visuals made with 🤍 by Laurent Tram
      </div>
    </div>
  )
}

export default Footer
