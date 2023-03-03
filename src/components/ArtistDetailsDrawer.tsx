import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import SectionTitle from './SectionTitle'
import { ArtistCode } from './ArtistScrollview'
import { artistsData } from '@/data/artists'
import { AiOutlineLeftCircle } from 'react-icons/ai'
import Body from './Body'
import InstagramLogo from '../public/Instagram-Logo.png'
import Link from 'next/link'

const ArtistDetailsDrawer = ({
  visible,
  code,
  onClose,
}: {
  visible: boolean
  code: ArtistCode
  onClose: () => void
}): JSX.Element => {
  const [artist, setArtist] = useState(artistsData.ig)

  useEffect(() => {
    setArtist(artistsData[code])
  }, [code])

  const visibleClass = visible ? 'translate-x-0' : '-translate-x-full'

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`z-50 fixed top-0 bg-black opacity-60 h-screen w-screen ${visible ? 'visible' : 'hidden'}`}
      />

      <div
        className={`z-50 w-[95%] h-[95%] bg-neutral-900 fixed top-6 md:px-14 overflow-y-auto ${visibleClass} transition-all ease-out duration-300`}
      >
        <div className="flex flex-col md:flex-row h-full">
          <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
            <Image src={artist.image} alt={artist.name} className="object-cover object-top w-full h-full" />
            <div className="h-[80px] md:h-[150px] w-full absolute top-0 bg-gradient-to-b from-neutral-800 to-transparent" />
          </div>

          <div className="w-full md:w-1/2 md:mx-0 pl-4 md:pl-10 md:py-12  mt-8 md:mt-0">
            <SectionTitle mobileLeft text={artist.name} />
            <Body bottomSpacing={false} mobileLeft text={artist.description} />

            {artist.classes && (
              <>
                <p className="font-bold pb-2">✨ Program ✨</p>
                <p className="pb-8">{artist.classes}</p>
              </>
            )}

            {artist.instagram != null && (
              <div className="w-12 h-12 mb-8">
                <Link href={artist.instagram} target="_blank">
                  <Image src={InstagramLogo} alt="instagram logo" className="h-full w-full object-cover" />
                </Link>
              </div>
            )}
          </div>
        </div>

        <button className="absolute top-4 left-4" onClick={onClose}>
          <AiOutlineLeftCircle color="white" className="w-6 h-6" />
        </button>
      </div>
    </>
  )
}

export default ArtistDetailsDrawer
