import HeroImage from '@/components/HeroImage'
import Head from 'next/head'
import Image from 'next/image'

import Kaapeli from '../public/kaapeli.jpeg'
import Entrance from '../public/Entrance_to_Kaapeli.jpg'
import GateD from '../public/gateD.jpeg'
import Studio from '../public/balanssi-studio.jpeg'

export default function Venue() {
  return (
    <>
      <Head>
        <title>Underground XXL | Bachata weekend in Helsinki | Tickets</title>
      </Head>
      <HeroImage title="VENUE" />

      <div className="container mx-auto">
        <section className="mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold italic pb-8">Location</h1>
          <p>
            Located on the 4th floor of an old cable factory, our dance studio features a spacious 200m2 wooden floor.
            Conveniently situated just a 10-minute walk from both the Tram and Metro station, you can effortlessly reach
            the heart of Helsinki within a mere 15 minutes.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:w-[500px] ">
              <Image src={Kaapeli} alt="Kaappeli" />
            </div>
            <div className="md:w-[500px]">
              <Image src={Entrance} alt="Entrance" />
            </div>
            <div className="md:w-[500px]">
              <Image src={GateD} alt="Door" style={{ objectFit: 'cover', width: '100%' }} />
            </div>
            <div className="md:w-[500px]">
              <Image src={Studio} alt="Studio" style={{ objectFit: 'cover', width: '100%' }} />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
