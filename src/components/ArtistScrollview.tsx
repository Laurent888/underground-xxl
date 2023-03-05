import React, { useEffect, useRef, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { motion, useAnimationControls, useInView } from 'framer-motion'

import ArtistCard from './ArtistCard'
import Body from './Body'
import RoundButton from './RoundButton'
import SectionTitle from './SectionTitle'

import { artistsData } from '@/data/artists'

const CARD_WIDTH = isMobile ? 348 : 480

export type ArtistCode = 'ig' | 'cg' | 'jn' | 'lt' | 'bm'

type ArtistScrollviewProps = {
  onClick: (artistsCode: ArtistCode) => void
}

const desktopVariant = {
  hidden: {
    x: 25,
    opacity: 0,
  },
  visible: ({ index }: { index: number; isMobile: boolean }) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, bounce: false, delay: 0.2 * index, ease: 'easeOut' },
  }),
}

const ArtistScrollview = ({ onClick }: ArtistScrollviewProps): JSX.Element => {
  const [scrollIndex, setScrollIndex] = useState(0)

  const control = useAnimationControls()
  const ref = useRef()
  // @ts-ignore
  const inView = useInView(ref, { amount: 0.4 })

  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

  return (
    <section className="bg-inherit pb-16 mt-12 md:mt-24">
      <div className="container mx-auto flex flex-col items-center md:items-start md:pb-10 text-center ">
        <SectionTitle bottomSpacing={false}>
          Artists at the Underground <span className="text-orange-600">XXL</span>
        </SectionTitle>
        <Body
          text="An awesome line-up is waiting for you! We are bringing some of the
        best talents from Spain here in Helsinki."
          className="mt-4 px-2 md:px-0"
        />
      </div>

      <div
        // @ts-ignore
        ref={ref}
        className={`grid grid-flow-col md:mt-4 mb-4 pl-4 md:pl-32`}
        style={{
          transform: `translate(-${scrollIndex * CARD_WIDTH}px)`,
          transition: `transform 300ms ease-in-out`,
        }}
      >
        {Object.values(artistsData).map((artist, index) => (
          <motion.div
            key={artist.name}
            custom={{ index, isMobile }}
            variants={desktopVariant}
            initial="hidden"
            animate={control}
            viewport={{ amount: 0.5, once: true }}
          >
            <ArtistCard
              source={artist.image}
              alt={artist.name}
              name={artist.name}
              onClick={() => onClick(artist.code)}
            />
          </motion.div>
        ))}
      </div>

      <div className="flex flex-row justify-center md:justify-end container">
        <RoundButton
          type="left"
          onClick={() => {
            if (scrollIndex > 0) setScrollIndex((prev) => prev - 1)
          }}
        />
        <div className="w-4" />
        <RoundButton
          type="right"
          onClick={() => {
            if (isMobile) {
              if (scrollIndex < 4) setScrollIndex((prev) => prev + 1)
            } else {
              if (scrollIndex < 1) setScrollIndex((prev) => prev + 1)
            }
          }}
        />
      </div>
    </section>
  )
}

export default ArtistScrollview
