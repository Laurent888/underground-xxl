import HeroImage from '@/components/HeroImage'
import SectionTitle from '@/components/SectionTitle'
import TicketButtonNavigation from '@/components/TicketButtonNavigation'
import Image from 'next/image'
import Schedule from '../public/Schedule.jpg'

export default function Program() {
  return (
    <div className="bg-black">
      <HeroImage title="Program" />

      <section className="container mt-12 mx-auto flex flex-col items-center">
        <p className="mb-2 text-center mx-2">Here is an details of the program.</p>
        <p className="mb-12 text-center mx-2">Program can be subject to change</p>

        <div>
          <Image src={Schedule} alt="program" className="w-full" />
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
