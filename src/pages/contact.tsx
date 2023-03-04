import MainTitle from '@/components/MainTitle'
import Link from 'next/link'
import Image from 'next/image'
import InstagramLogo from '../public/Instagram-Logo.png'
import Body from '@/components/Body'
import { SOB_INSTAGRAM_URL } from '@/utils/constants'
import HeroImage from '@/components/HeroImage'

export default function Contact() {
  return (
    <>
      <HeroImage title="CONTACT" src={require('../public/sob_banner.jpeg')} alt="sob banner" />
      <div className="container mx-auto py-24 px-4 md:px-0">
        <Body
          mobileLeft
          text="Feel free to contact us if you have any questions about the events,
        we'll try to answer as fast as possible!"
        />

        <p className="mb-4">
          <span className="font-bold">Email</span>: sob.helsinki@gmail.com
        </p>
        <p>
          <Link href={SOB_INSTAGRAM_URL} target="_blank">
            <div className="w-12 h-12">
              <Image src={InstagramLogo} className="object-cover w-full h-full" alt="Instagram logo" />
            </div>
          </Link>
        </p>
      </div>
    </>
  )
}
