import Image from 'next/image'
import Hero from '@/components/Hero'
import { useEffect, useState } from 'react'
import SectionTitle from '@/components/SectionTitle'
import MainButton from '@/components/MainButton'

/** IMAGES */
import Collage from '../public/Collage.png'
import Body from '@/components/Body'
import ArtistScrollview, { ArtistCode } from '@/components/ArtistScrollview'
import ArtistDetailsDrawer from '@/components/ArtistDetailsDrawer'
import TicketButtonNavigation from '@/components/TicketButtonNavigation'
import AnimatedContainer from '@/components/motion/AnimatedContainer'
import Head from 'next/head'

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

        {/* For SEO */}
        <h1 className="absolute opacity-0">Underground XXL, the best bachata festival in Helsinki, Finland</h1>

        {/* SECTION INFO */}
        <div className="container mx-auto md:h-200 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 lg:w-[45%] bg-inherit">
            <Image src={Collage} className="h-full w-full bg-black object-cover" alt="collage" />
          </div>
          <div className="w-full md:w-1/2 lg:w-[55%] bg-black p-10 md:py-24 md:px-24">
            <h2 className="text-gray-50 text-lg md:text-2xl pb-4 font-bold">HELSINKI, FINLAND</h2>
            <h3 className="text-gray-50 text-3xl md:text-6xl font-bold">1 - 3 SEPTEMBER 2023</h3>

            <ul className="py-8 md:py-14">
              <li className="text-gray-300 font-semibold text-xl md:text-2xl pb-4">International teachers</li>
              <li className="text-gray-300 font-semibold text-xl md:text-2xl pb-4">8 hours workshops</li>
              <li className="text-gray-300 font-semibold text-xl md:text-2xl pb-4">1 masterclass</li>
              <li className="text-gray-300 font-semibold text-xl md:text-2xl pb-4">2 parties</li>
              {/* <li className="text-gray-300 font-semibold text-xl md:text-2xl pb-4">Taxi dancers</li> */}
            </ul>
            <MainButton text="Program" href="/program" />
          </div>
        </div>

        {/* ARTISTS */}
        <ArtistScrollview
          onClick={(code) => {
            setArtistCode(code)
            setShowDrawer(true)
          }}
        />

        {/* CALL TO ACTION */}
        <section className="pb-24">
          <AnimatedContainer>
            <div className="container mx-auto flex flex-col px-4 md:px-0 items-center md:items-start">
              <SectionTitle>
                Are you <span className="text-orange-600">ready</span> to join us?
              </SectionTitle>
              <Body
                text="Get ready for the event of the year in Helsinki with our
              incredible line-up. For dancers coming from abroad, we know that a trip to Finland is an extra cost, so send us a
              message by email or Instagram DM to get your discount code!"
              />
              <div className="mb-4 md:mb-0" />

              <TicketButtonNavigation />
            </div>
          </AnimatedContainer>
        </section>

        {/* ABOUT SOB */}
        <section className="bg-inherit">
          <div className="container md:mx-auto flex flex-col md:flex-row pb-12">
            <div className="md:w-1/2 h-full">
              <Image
                src={require('../public/sob_banner.jpeg')}
                alt="sob banner"
                className="object-cover h-full w-full"
              />
            </div>

            <AnimatedContainer className="md:w-1/2 md:pl-12 pt-8 md:pt-0 px-4 md:px-0">
              <SectionTitle>
                Summer Outdoor Bachata aka <span className="text-orange-600">SOB</span>
              </SectionTitle>
              <Body
                bottomSpacing={false}
                text="Summer Outdoor Bachata is a dancers’ community group from Helsinki. It was initially created by a group of bachata enthusiasts to organize dancing picnics at parks and beaches in May 2016. Since then the members have encreased from 10 to 1.3k!  Nowadays we also arrange indoor events year-round and occasionally bigger events with international artists."
              />

              <p className="text-center md:text-start">
                Follow us on Instagram at{' '}
                <a
                  href="https://www.instagram.com/sobproductionshki/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold"
                >
                  @sobproductionshki
                </a>
              </p>
            </AnimatedContainer>
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
