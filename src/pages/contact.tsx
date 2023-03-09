import Link from 'next/link'
import Image from 'next/image'
import Body from '@/components/Body'
import { SOB_FACEBOOK_URL, SOB_INSTAGRAM_URL } from '@/utils/constants'
import HeroImage from '@/components/HeroImage'
import InstagramLogo from '@/components/InstagramLogo'
import FacebookLogo from '@/components/FacebookLogo'

export default function Contact() {
  return (
    <>
      <HeroImage title="CONTACT" />
      <div className="container mx-auto  md:h-[700px] flex flex-col md:flex-row py-12 md:py-24 px-4 md:px-0">
        <div className="md:w-1/2 md:pr-12">
          <h3 className="font-bold text-3xl text-white pb-4">Contact</h3>
          <Body
            mobileLeft
            text="Feel free to contact us if you have any questions about the event,
        we'll try to answer as fast as possible!"
          />

          <p className="text-neutral-400 pb-2">Organizer</p>
          <p className="mb-4 text-white">SOB Productions</p>

          <p className="text-neutral-400 pb-2">Email</p>
          <div className="mb-4">
            <a href="mailto:sob.helsinki@gmail.com" className="font-semibold">
              sob.helsinki@gmail.com
            </a>
          </div>

          <p className="text-neutral-400 pb-2">Instagram</p>
          <p className="mb-4">
            <Link href={SOB_INSTAGRAM_URL} target="_blank">
              <InstagramLogo />
            </Link>
          </p>

          <p className="text-neutral-400 pb-2">Facebook</p>
          <p>
            <Link href={SOB_FACEBOOK_URL} target="_blank">
              <FacebookLogo />
            </Link>
          </p>
        </div>

        <div className="pt-20 md:pt-0 md:w-1/2">
          <Image src={require('../public/ugcrowd.jpg')} alt="group of people" className="object-cover h-full w-full" />
        </div>
      </div>
    </>
  )
}
