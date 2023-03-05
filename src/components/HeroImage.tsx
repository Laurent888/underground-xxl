import Image, { StaticImageData } from 'next/image'
import React from 'react'

type HeroImageProps = {
  title: string
  src: StaticImageData
  alt: string
}

const HeroImage = ({ src, alt, title }: HeroImageProps) => {
  return (
    <div className="relative h-70 md:h-[400px] w-screen">
      {/* <div className="absolute h-full w-full bg-black opacity-50" /> */}
      {/* <Image
        src={src}
        alt={alt}
        className="object-cover object-center"
        loading="eager"
        style={{ width: '100%', height: '100%' }}
      /> */}
      <div className="md:absolute top-1/3 px-4 md:left-24 flex flex-row items-center justify-between w-screen">
        <h1 className="pr-8 heroTitle text-white">{title}</h1>
        <h1 className="pr-8 heroTitleOutline">{title}</h1>
        <h1 className="pr-8 heroTitleOutline">{title}</h1>
      </div>
    </div>
  )
}

export default HeroImage
