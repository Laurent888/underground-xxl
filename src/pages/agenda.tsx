import HeroImage from '@/components/HeroImage'
import SectionTitle from '@/components/SectionTitle'
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
      {showMobileImage ? (
        <HeroImage src={require('../public/event_poster.jpg')} title="AGENDA" alt="workshop" />
      ) : (
        <HeroImage src={require('../public/underground_facebookbanner.png')} title="AGENDA" alt="workshop" />
      )}

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
    </div>
  )
}
