import Image from 'next/image'
import Hero from '@/components/Hero'
import { useEffect, useState } from 'react'
import SectionTitle from '@/components/SectionTitle'
import MainButton from '@/components/MainButton'

/** IMAGES */
import SobBanner from '../public/sob_banner.jpeg'
import EventFlyer from '../public/event_poster.jpg'
import Body from '@/components/Body'
import ArtistScrollview, { ArtistCode } from '@/components/ArtistScrollview'
import ArtistDetailsDrawer from '@/components/ArtistDetailsDrawer'
import TicketButtonNavigation from '@/components/TicketButtonNavigation'

export default function Home() {
  const [artistCode, setArtistCode] = useState<ArtistCode>('ig')
  const [showDrawer, setShowDrawer] = useState(false)

  useEffect(() => {
    if (showDrawer) {
      window.document.querySelector('html')?.classList.add('noscroll')
    } else {
      window.document.querySelector('html')?.classList.remove('noscroll')
    }
  }, [showDrawer])

  return (
    <>
      <div className={`bg-black w-screen`}>
        {/* HERO */}
        <Hero />

        {/* SECTION INFO */}
        <div className="container mt-12 mx-auto md:h-200 flex flex-col-reverse md:flex-row">
          <div className="w-full px-8 md:px-0 md:w-1/2 lg:w-[40%] bg-inherit">
            <Image src={EventFlyer} className="h-full w-full bg-black object-cover" alt="festival flyer" />
          </div>
          <div className="w-full md:w-1/2 lg:w-[60%] bg-black p-10 md:py-24 md:px-24">
            <h5 className="text-gray-50 text-lg md:text-2xl pb-4 font-bold">HELSINKI, FINLAND</h5>
            <h3 className="text-gray-50 text-3xl md:text-6xl font-bold">1 - 3 SEPTEMBER 2023</h3>

            <ul className="py-8 md:py-14">
              <li className="text-gray-300 font-semibold text-xl md:text-2xl pb-4">7 hours workshops</li>
              <ul className="text-gray-300 font-semibold text-xl md:text-2xl pb-4">1 masterclass</ul>
              <li className="text-gray-300 font-semibold text-xl md:text-2xl pb-4">2 parties</li>
              <li className="text-gray-300 font-semibold text-xl md:text-2xl pb-4">Taxi dancers</li>
            </ul>
            <MainButton text="Agenda" href="/agenda" />
          </div>
        </div>

        {/* HEADLINE */}
        {/* <div className="h-96 flex flex-col justify-center items-center bg-inherit px-4">
          <SectionTitle text="What is the Underground XXL" />
          <p className="text-gray-50 text-lg md:text-2xl text-center md:text-left pb-8">
            We are a commmunity driven bachata dancers who want to organize an
            awesome and affordable event with international artists{" "}
          </p>
          <MainButton text="Tickets" onClick={() => null} />
        </div> */}

        {/* ARTISTS */}
        <ArtistScrollview
          onClick={(code) => {
            setArtistCode(code)
            setShowDrawer(true)
          }}
        />

        {/* CALL TO ACTION */}
        <section className="pb-24">
          <div className="container mx-auto flex flex-col items-center md:items-start">
            <SectionTitle text="Are you ready to join us?" />
            <Body
              bottomSpacing
              text="Get ready for the event of the year in Helsinki with our
              incredible line-up. If you are coming from abroad, send us a
              message by email to get your discount code!"
            />
            <TicketButtonNavigation />
          </div>
        </section>

        {/* ABOUT SOB */}
        <section className="bg-inherit">
          <div className="container md:mx-auto md:h-96 flex flex-col md:flex-row pb-12">
            <div className="md:w-1/2 h-full">
              <Image src={SobBanner} alt="crowd" style={{ objectFit: 'cover' }} className="h-full" />
            </div>
            <div className="md:w-1/2 md:pl-12 pt-8 md:pt-0 px-2 md:px-0">
              <SectionTitle text="Summer Outdoor Bachata aka SOB" />
              <Body
                text="We organize monthly bachata events in Helsinki since 2019 that
                gather all the dancers from Helsinki area. The group name is coming from the fact that we organized outdoor events during the summer! 
                If you want to learn more about us, checkout out Instagram account to get a feeling of our events."
              />
            </div>
          </div>
        </section>
      </div>

      <ArtistDetailsDrawer
        visible={showDrawer}
        code={artistCode}
        onClose={() => {
          setShowDrawer(false)
        }}
      />
    </>
  )
}
