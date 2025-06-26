import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { SlMagnifierAdd } from 'react-icons/sl'

type ArtistCardProsp = {
  source: StaticImageData
  alt: string
  name: string
  onClick: () => void
}

function ArtistCard({ source, alt, name, onClick }: ArtistCardProsp) {
  return (
    <div className="relative artistCardContainer mr-2 md:mr-[32px]" onClick={onClick}>
      <div className="artistCard ">
        <Image
          src={source}
          alt={alt}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          loading="eager"
        />
      </div>
      <p className="absolute bottom-4 left-4 font-bold text-gray-50 text-xl uppercase">{name}</p>
      <div className="w-6 h-6 absolute top-3 right-4">
        <SlMagnifierAdd color="white" className="w-full h-full" />
      </div>
    </div>
  )
}

export default ArtistCard
