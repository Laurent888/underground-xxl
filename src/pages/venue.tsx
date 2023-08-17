import HeroImage from '@/components/HeroImage'
import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'

import Kaapeli from '../public/kaapeli.jpeg'
import Map from '../public/map_balanssi.png'
import Entrance from '../public/entrance.jpg'
import GateD from '../public/door.jpg'
import Studio from '../public/balanssi-studio.jpeg'

export default function Venue() {
  return (
    <>
      <Head>
        <title>Underground XXL | Bachata weekend in Helsinki | Tickets</title>
      </Head>
      <HeroImage title="VENUE" />

      <div className="container mx-auto">
        <section className="mb-12 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold italic pb-8">Location</h1>
          <p className="pb-4">
            Located on the 4th floor of an old cable factory, our dance studio features a spacious 200m2 wooden floor.
            Conveniently situated just a 10-minute walk from both the Tram and Metro station, you can effortlessly reach
            the heart of Helsinki within a mere 15 minutes.
          </p>

          <ImageGallery image={Map} />

          <h3 className="font-bold mt-10 mb-2 text-2xl">Direction</h3>
          <p>Door D (as shown in the photo below)</p>
          <p>4th floor</p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4">
            <ImageGallery image={Kaapeli} />
            <ImageGallery image={Entrance} />
            <ImageGallery image={GateD} />
            <ImageGallery image={Studio} />
          </div>
        </section>
      </div>
    </>
  )
}

function ImageGallery({ image }: { image: StaticImageData }) {
  return (
    <div className="w-full h-[250px] md:w-[500px] md:h-[300px]">
      <Image src={image} alt="Kaappeli" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
    </div>
  )
}
