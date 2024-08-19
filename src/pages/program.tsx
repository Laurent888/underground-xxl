import HeroImage from '@/components/HeroImage'
import TicketButtonNavigation from '@/components/TicketButtonNavigation'
import Image from 'next/image'

export default function Program() {
  return (
    <div className="bg-black">
      <HeroImage title="Program" />

      <section className="container mt-12 mx-auto flex flex-col items-center md:items-start mb-12">
        <h3 className="text-3xl font-bold italic mb-1 text-center mx-2">PROGRAM DETAILS</h3>
        <p className="mb-12 text-center mx-2 text-stone-500">
          This is a preliminary program. It will be subject to change
        </p>

        <div className="mb-12 px-2">
          <p className="mb-2 text-2xl font-bold italic">Friday</p>
          <div className="flex flex-row">
            <p className="font-bold mr-2">20:00 - 22:00</p>
            <p>Workshops</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold mr-2">22:00 - 04:00</p>
            <p>Social</p>
          </div>

          <p className="mb-2 text-2xl font-bold italic mt-4 ">Saturday</p>
          <div className="flex flex-row">
            <p className="font-bold mr-2">12:00 - 18:00</p>
            <p>Workshops</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold mr-2">21:00 - 22:00</p>
            <p>Pre-party workshop</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold mr-2">22:00 - 05:00</p>
            <p>Social</p>
          </div>

          <p className="mb-2 text-2xl font-bold italic mt-4 ">Sunday</p>
          <div className="flex flex-row">
            <p className="font-bold mr-2">13:00 - 19:00</p>
            <p>Workshops</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold mr-2">19:00 - 22:30</p>
            <p>Social</p>
          </div>

          <p className="mb-2 mt-8">• Please bring an ID for the registration.</p>
          <p className="mb-2">
            • If you are registered for the masterclass, please bring cash for the payment (20 EUR)
          </p>
          <p className="mb-2">• Single night party pass can be bought at the door. More info in the ticket page.</p>
          {/* <p className="mb-2">
            • There is lunch option for 9,5 EUR in the same building as the event on Saturday. Recommended!
          </p> */}
          <p className="mb-2">
            • ATTENTION! Sunday workshop and parties will be held in a different location. More info soon.
          </p>
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
