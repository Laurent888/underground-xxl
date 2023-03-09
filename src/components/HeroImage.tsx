import React from 'react'
import { motion } from 'framer-motion'
import { isMobile } from 'react-device-detect'

type HeroImageProps = {
  title: string
}

const HeroImage = ({ title }: HeroImageProps) => {
  return (
    <div className="relative h-44 md:h-[400px] w-screen">
      {/* <div className="absolute h-full w-full bg-black opacity-50" /> */}
      {/* <Image
        src={src}
        alt={alt}
        className="object-cover object-center"
        loading="eager"
        style={{ width: '100%', height: '100%' }}
      /> */}
      <motion.div
        initial={{ translateX: '0px' }}
        animate={{
          translateX: isMobile ? '-50%' : '-600px',
          transition: { duration: 15, repeat: Infinity, ease: 'linear', repeatType: 'mirror' },
        }}
        className="absolute top-1/3 px-4 md:left-24 flex flex-row items-center justify-between w-full md:w-[2300px]"
      >
        <h1 className="pr-8 heroTitle text-white">{title}</h1>
        <h1 className="pr-8 heroTitleOutline">{title}</h1>
        <h1 className="pr-8 heroTitle">{title}</h1>
        <h1 className="pr-8 heroTitleOutline">{title}</h1>
      </motion.div>
    </div>
  )
}

export default HeroImage
