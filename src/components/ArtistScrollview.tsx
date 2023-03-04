import React, { useEffect, useState, useRef } from 'react'
import { isMobile } from 'react-device-detect'
import { motion, useAnimation, useInView } from 'framer-motion'

import ArtistCard from './ArtistCard'
import Body from './Body'
import RoundButton from './RoundButton'
import SectionTitle from './SectionTitle'

import IgorRocio from '../public/igorRocio.jpg'
import CristianGabriella from '../public/cristianGabriella.jpeg'
import JordiNoora from '../public/jordiNoora.jpg'
import LaurentDJ from '../public/laurentTram.jpg'
import BabakDJ from '../public/djbabak.jpg'

const CARD_WIDTH = isMobile ? 368 : 480

export type ArtistCode = 'ig' | 'cg' | 'jn' | 'lt' | 'bm'

type ArtistScrollviewProps = {
  onClick: (artistsCode: ArtistCode) => void
}

const exampleVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const ArtistScrollview = ({ onClick }: ArtistScrollviewProps): JSX.Element => {
  const [scrollIndex, setScrollIndex] = useState(0)

  const control = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '0px 0px -350px 0px', once: true })

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  return (
    <motion.div ref={ref} variants={exampleVariant} initial="hidden" animate={control}>
      <section className="bg-inherit pb-16 mt-12 md:mt-24">
        <div className="container mx-auto flex flex-col items-center md:items-start md:pb-10 text-center ">
          <SectionTitle bottomSpacing={false} text="Artists at the Underground XXL" />
          <Body
            text="An awesome line-up is waiting for you! We are bringing some of the
        best talents from Spain here in Helsinki."
            className="mt-4 px-2"
          />
        </div>

        <div
          className={`grid grid-flow-col md:mt-4 mb-4 pl-4 md:pl-32`}
          style={{
            transform: `translate(-${scrollIndex * CARD_WIDTH}px)`,
            transition: `transform 300ms ease-in-out`,
          }}
        >
          <ArtistCard source={IgorRocio} alt="Igor and Rocio" name="Igor & Rocio" onClick={() => onClick('ig')} />
          <ArtistCard
            source={CristianGabriella}
            alt="Cristian and Gabriella"
            name="Cristian & Gabriella"
            onClick={() => onClick('cg')}
          />
          <ArtistCard source={JordiNoora} alt="Jordi & Noora" name="Jordi & Noora" onClick={() => onClick('jn')} />
          <ArtistCard source={LaurentDJ} alt="DJ Laurent" name="DJ Laurent" onClick={() => onClick('lt')} />
          <ArtistCard source={BabakDJ} alt="DJ Babak" name="DJ Babak" onClick={() => onClick('bm')} />
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
    </motion.div>
  )
}

export default ArtistScrollview
