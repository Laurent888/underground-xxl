import HeroImage from '@/components/HeroImage'
import TicketButtonNavigation from '@/components/TicketButtonNavigation'
import Image from 'next/image'
import friday from '../public/schedule-friday.jpg'
import saturday from '../public/schedule-sat.jpg'
import sunday from '../public/schedule-sun.jpg'

export default function Program() {
  return (
    <div className="bg-black">
      <HeroImage title="Program" />

      <section className="container mt-12 mx-auto flex flex-col items-center md:items-start mb-12">
        <h3 className="text-3xl font-bold italic text-center mx-2 mb-10">PROGRAM DETAILS</h3>

        <div className="mb-12 px-2">
          <div className="pb-8 px-4">
            <p className="mb-2 text-2xl font-bold italic">Friday</p>
            <p className="mb-2 text-sm text-zinc-400">Location: Balanssi Studio</p>
            <div className="flex flex-row ">
              <p className="font-bold mr-2">20:00 - 22:00</p>
              <p>Workshops</p>
            </div>
            <div className="flex flex-row">
              <p className="font-bold mr-2">22:00 - 04:00</p>
              <p>Social</p>
            </div>

            <p className="mb-2 text-2xl font-bold italic mt-4 ">Saturday</p>
            <p className="mb-2 text-sm text-zinc-400">Location: Balanssi Studio and Teatteri Toivo</p>
            <div className="flex flex-row">
              <p className="font-bold mr-2">11:00 - 17:00</p>
              <p>Regular workshops at Balanssi Studio</p>
            </div>
            <div className="flex flex-row">
              <p className="font-bold mr-2">14:00 - 17:00</p>
              <p>Advanced workshops at Balanssi Studio</p>
            </div>
            <div className="flex flex-row mb-4">
              <p className="font-bold mr-2">17:00 - 19:00</p>
              <p>Day social at Teatteri Toivo</p>
            </div>
            <div className="flex flex-row">
              <p className="font-bold mr-2">21:00 - 22:00</p>
              <p>Pre-party workshop</p>
            </div>
            <div className="flex flex-row">
              <p className="font-bold mr-2">22:00 - 05:00</p>
              <p>Social</p>
            </div>
            <div className="flex flex-row">
              <p className="font-bold mr-2">01:00 - 01:40</p>
              <p>Bachata Battle Final</p>
            </div>

            <p className="mb-2 text-2xl font-bold italic mt-4 ">Sunday</p>
            <p className="mb-2 text-sm text-zinc-400">Location: Balanssi Studio and Teatteri Toivo</p>
            <div className="flex flex-row">
              <p className="font-bold mr-2">13:00 - 18:30</p>
              <p>Workshops</p>
            </div>
            <div className="flex flex-row">
              <p className="font-bold mr-2">18:30 - 22:30</p>
              <p>Social</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full px-4 mb-6 md:w-1/2 md:mr-4 md:px-0">
              <Image src={friday} alt="friday schedule" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            </div>
            <div className="w-full px-4 mb-6 md:w-1/2 md:mr-4 md:px-0">
              <Image
                src={saturday}
                alt="saturday schedule"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>

            <div className="w-full px-4 mb-6 md:w-1/2 md:mr-4 md:px-0">
              <Image src={sunday} alt="sunday schedule" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            </div>
          </div>

          <p className="mb-2 mt-8">• Please bring an ID for the registration.</p>
          <p className="mb-2">• Single night party pass can be bought at the door. More info in the ticket page.</p>
          {/* <p className="mb-2">
            • There is lunch option for 9,5 EUR in the same building as the event on Saturday. Recommended!
          </p> */}
        </div>

        <div className="items-center md:w-1/2">{/* <Image src={Schedule} alt="program" className="w-full" /> */}</div>
      </section>

      <section className="container mx-auto px-4 py-8 hidden">
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
