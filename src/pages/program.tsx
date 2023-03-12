import HeroImage from '@/components/HeroImage'
import SectionTitle from '@/components/SectionTitle'
import TicketButtonNavigation from '@/components/TicketButtonNavigation'
import Image from 'next/image'

export default function Program() {
  return (
    <div className="bg-black">
      <HeroImage title="Program" />

      <section className="container mt-12 mx-auto flex flex-col items-center">
        <p className="mb-12 text-center mx-2">Here is an overview of the program. More details will come later.</p>

        <div className="mb-8 flex flex-col items-center">
          <SectionTitle bottomSpacing={false} text="Friday" />
          <p className="mt-4">Party from 9 pm to 2am</p>
        </div>

        <div className="mb-8 flex flex-col items-center">
          <SectionTitle bottomSpacing={false} text="Saturday" />
          <p className="mt-4">Workshop from 11am to 5pm</p>
          <p>Party from 9pm to 3am!</p>
        </div>

        <div className="mb-8 flex flex-col items-center">
          <SectionTitle bottomSpacing={false} text="Sunday" />
          <p className="mt-4">Workshop from 1pm to 4pm</p>
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
