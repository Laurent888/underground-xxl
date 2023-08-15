import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Logo from '../public/underground_logo.png'
import { isMobile } from 'react-device-detect'
import { AiOutlineMenu } from 'react-icons/ai'

function Navbar({ onMenuOpen }: { onMenuOpen: () => void }) {
  const [visibleClass, setVisibleClass] = useState<'hidden' | 'visible'>('hidden')

  useEffect(() => {
    if (isMobile) {
      setVisibleClass('visible')
    } else {
      setVisibleClass('hidden')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile])

  return (
    <nav className="fixed w-full bg-black/70 z-50 border-b-[1px] border-b-neutral-800 backdrop-blur-lg">
      <div className="md:container md:mx-auto px-2">
        <div className="flex flex-row items-center justify-center md:justify-between">
          <Link href="/" className="justify-center items-center">
            <div className="w-32 py-2 md:w-44">
              <Image
                src={Logo}
                alt="logo"
                style={{
                  objectFit: 'contain',
                  width: '100%',
                  height: '100%',
                }}
                loading="eager"
              />
            </div>
          </Link>

          <ul className="hidden md:flex flex-row items-center invisible md:visible">
            <Link href="/program">
              <li className="text-white font-semibold hover:cursor-pointer py-6 md:py-8 px-6 hover:bg-orange-600 transition duration-250">
                Program
              </li>
            </Link>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/tickets">
              <li className="text-white font-semibold hover:cursor-pointer py-6 md:py-8 px-6 hover:bg-orange-600 transition duration-250">
                Tickets
              </li>
            </a>

            <Link href="/venue">
              <li className="text-white font-semibold hover:cursor-pointer py-6 md:py-8 px-6 hover:bg-orange-600 transition duration-250">
                Venue
              </li>
            </Link>

            <Link href="/contact">
              <li className="text-white font-semibold hover:cursor-pointer py-6 md:py-8 px-6 hover:bg-orange-600 transition duration-250">
                Contacts
              </li>
            </Link>
          </ul>

          <button className={`absolute right-4 ${visibleClass}`} onClick={onMenuOpen}>
            <AiOutlineMenu size={25} color="white" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
