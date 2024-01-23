import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import SectionTitle from './SectionTitle'
import { ArtistCode } from './ArtistScrollview'
import { artistsData } from '@/data/artists'
import { AiOutlineLeftCircle } from 'react-icons/ai'
import Body from './Body'
import Link from 'next/link'
import InstagramLogo from './InstagramLogo'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import { useWindowSize } from '@/utils/useWindowDimention'

const initials = { x: 0, transition: { bounce: false, duration: 0.3, ease: 'easeOut' } }

const ArtistDetailsDrawer = ({
  visible,
  code,
  onClose,
}: {
  visible: boolean
  code: ArtistCode
  onClose: () => void
}): JSX.Element => {
  const [artist, setArtist] = useState(artistsData.sa)
  const x = useMotionValue(-2000)
  const controls = useAnimation()

  const { width } = useWindowSize()

  useEffect(() => {
    setArtist(artistsData[code])
  }, [code])

  useEffect(() => {
    if (visible) {
      controls.start(initials)
    } else {
      controls.start({ x: -(width ?? 500), transition: { bounce: false, duration: 0.2, ease: 'easeOut' } })
    }
  }, [controls, visible, width])

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`z-50 fixed top-0 bg-black opacity-60 h-screen w-screen ${visible ? 'visible' : 'hidden'}`}
      />

      <motion.div
        drag="x"
        style={{ x }}
        animate={controls}
        dragConstraints={{ right: 0 }}
        onDragEnd={() => {
          if (x.get() < -30) {
            // Close the modal
            onClose()
          } else {
            controls.start(initials)
          }
        }}
        dragElastic={0}
        className={`z-50 w-[95%] h-[95%] bg-neutral-900 fixed top-6 md:px-14 overflow-y-auto hideScrollbar`}
      >
        <div className="h-[80px] md:h-[150px] w-full absolute top-0 bg-gradient-to-b from-neutral-800 to-transparent" />

        <div className="flex flex-col md:flex-row h-full">
          <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
            <Image
              src={artist.imageAlternative ?? artist.image}
              alt={artist.name}
              className="object-cover object-top w-full h-full"
            />
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
              <div className="mb-8">
                <p className="text-neutral-400 pb-2">Instagram</p>
                <Link href={artist.instagram} target="_blank">
                  <InstagramLogo />
                </Link>
              </div>
            )}
          </div>
        </div>

        <button className="absolute top-4 left-4" onClick={onClose}>
          <AiOutlineLeftCircle color="white" className="w-6 h-6" />
        </button>
      </motion.div>
    </>
  )
}

export default ArtistDetailsDrawer
