import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import TicketButtonNavigation from './TicketButtonNavigation'

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
          <Link href="/" onClick={onClose}>
            <NavigationItem text="HOME" />
          </Link>
          <Link href="/program" onClick={onClose}>
            <NavigationItem text="Program" />
          </Link>
          <Link href="/contact" onClick={onClose}>
            <NavigationItem text="CONTACT" />
          </Link>

          <div className="pt-10">
            <TicketButtonNavigation />
          </div>
        </div>

        <div onClick={onClose} className="absolute top-4 right-16">
          <AiOutlineArrowRight color="white" size={35} />
        </div>
      </div>
    </>
  )
}

export default MobileMenuDrawer
