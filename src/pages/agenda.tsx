import HeroImage from '@/components/HeroImage'
import SectionTitle from '@/components/SectionTitle'
import TicketButtonNavigation from '@/components/TicketButtonNavigation'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

export default function Agenda() {
  const [showMobileImage, setShowMobileImage] = useState(true)

  useEffect(() => {
    if (isMobile) {
      setShowMobileImage(true)
    } else {
      setShowMobileImage(false)
    }
  }, [])

  return (
    <div className="bg-black">
      <HeroImage src={require('../public/gradientBg.jpg')} title="AGENDA" alt="gradient" />

      <section className="container mt-12 mx-auto flex flex-col items-center">
        <p className="mb-12 text-center mx-2">Here is an overview of the agenda. It will be subject to changes</p>

        <div className="mb-8">
          <SectionTitle bottomSpacing={false} text="Friday" />
          <p className="mt-4">Party until 2am</p>
        </div>

        <div className="mb-8 flex flex-col items-center">
          <SectionTitle bottomSpacing={false} text="Saturday" />
          <p className="mt-4">Workshop from 11 to 17</p>
          <p>Party from 21 to 3!</p>
        </div>

        <div className="mb-8 flex flex-col items-center">
          <SectionTitle bottomSpacing={false} text="Sunday" />
          <p className="mt-4">Workshop from 13 to 16</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <h3 className="font-extrabold italic uppercase pb-10 text-white text-4xl md:text-6xl">
          No ticket yet? We are waiting for <span className="text-orange-600">you</span>!
        </h3>
        <div className="flex items-center">
          <TicketButtonNavigation />
        </div>
        <div className="w-full h-64 md:h-[500px] mt-12">
          <Image src={require('../public/workshop_kc.jpeg')} alt="class" className="object-cover h-full w-full" />
        </div>
      </section>
    </div>
  )
}
