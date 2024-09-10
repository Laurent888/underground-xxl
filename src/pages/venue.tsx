import HeroImage from '@/components/HeroImage'
import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'

import Kaapeli from '../public/kaapeli.jpeg'
import Map from '../public/map_balanssi.png'
import Entrance from '../public/entrance.jpg'
import GateD from '../public/door.jpg'
import Studio from '../public/balanssi-studio.jpeg'
import slExt from '../public/seaside-lounge-exterior.jpg'
import slInt from '../public/seaside-lounge-interior.jpg'

export default function Venue() {
  return (
    <>
      <Head>
        <title>Underground XXL | Bachata weekend in Helsinki | Tickets</title>
      </Head>
      <HeroImage title="VENUE" />

      <div className="container mx-auto">
        {/* FRIDAY SATURDAY */}
        <section className="mb-12 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold italic pb-8">Location</h1>

          <h3 className="text-2xl font-bold pb-4">Friday and Saturday</h3>
          <p className="pb-8">
            Located on the 4th floor of an old cable factory, our dance studio features a spacious 200m2 wooden floor.
            Conveniently situated just a 10-minute walk from both the Tram and Metro station, you can effortlessly reach
            the heart of Helsinki within a mere 15 minutes.
          </p>

          <div>
            <h5 className="pb-2">Itinary from metro station to the venue (8min walk)</h5>
            <div className="w-full h-[250px] md:w-[600px] md:h-[400px]">
              <Image src={Map} alt="Kaappeli" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            </div>
          </div>

          <h3 className="font-bold mt-6 mb-2 text-2xl">In the courtyard</h3>
          <p>Door D (as shown in the photo below)</p>
          <p>4th floor</p>

          <h3 className="font-bold mt-6 mb-2 text-2xl text-red-500">IMPORTANT</h3>
          <p className="font-bold">This is a dance studio, so clean indoor shoes are mandatory!</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 mt-6">
            <ImageGallery image={Kaapeli} />
            <ImageGallery image={Entrance} />
            <ImageGallery image={GateD} />
            <ImageGallery image={Studio} />
          </div>
        </section>

        {/* SUNDAY */}
        <section>
          <h3 className="text-2xl font-bold pb-4">Sunday</h3>
          <p className="pb-2">
            Sunday workshops from 13 to 16 will be held at the dance studio Bongos only 5 min walk from the metro
            station Sörnäinen. Clean shoes are required in this venue as well.
          </p>
          <p className="font-semibold text-gray-200 pb-8">Address: Sörnäisten rantatie 31A, 00500 Helsinki</p>
          <p className="pb-2">
            The next venue will be Seaside Lounge, a beautiful club located 5 min walk from the metro station Hakaniemi.
            There will be classes from 16:30 to 18:30 followed by the social until 22:30.
          </p>
          <p className="font-semibold text-gray-200">Address: Eläintarhantie 12, 00530 Helsinki</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 mt-6">
            <ImageGallery image={slExt} />
            <ImageGallery image={slInt} />
          </div>
        </section>

        <div className="pb-10">
          <h3 className="font-bold mt-10 mb-2 text-2xl">Recommended hotel</h3>
          <p>Noli Studios (10% off with the code SOBHELSINKI). Needs to be booked from a laptop, not on a mobile</p>
          <p>Holiday Inn West Ruoholahti (450m from the event venue)</p>
        </div>
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
