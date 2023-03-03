import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'

const NavigationItem = ({ text }: { text: string }) => {
  return <h4 className="font-bold text-white text-2xl mb-8">{text}</h4>
}

const MobileMenuDrawer = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const visibilityClass = visible ? 'translate-x-10' : 'translate-x-full'
  const backdropClass = visible ? 'visible' : 'hidden'
  return (
    <>
      {/* BACKDROP */}
      <div className={`z-40 bg-black opacity-70 fixed w-full h-full ${backdropClass}`} />

      <div className={`z-50 w-screen h-screen fixed bg-black ${visibilityClass} transition duration-200`}>
        <div className="flex flex-col items-end justify-center h-full px-20">
          <Link href="/">
            <NavigationItem text="HOME" />
          </Link>
          <Link href="/tickets">
            <NavigationItem text="TICKETS" />
          </Link>
          <Link href="/agenda">
            <NavigationItem text="AGENDA" />
          </Link>
          <Link href="/contact">
            <NavigationItem text="CONTACT" />
          </Link>
        </div>

        <div onClick={onClose} className="absolute top-4 right-16">
          <AiOutlineArrowRight color="white" size={35} />
        </div>
      </div>
    </>
  )
}

export default MobileMenuDrawer
