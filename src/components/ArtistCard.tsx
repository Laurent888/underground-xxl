import Image, { StaticImageData } from 'next/image'
import React from 'react'

type ArtistCardProsp = {
  source: StaticImageData
  alt: string
  name: string
  onClick: () => void
}

function ArtistCard({ source, alt, name, onClick }: ArtistCardProsp) {
  return (
    <div className="relative artistCardContainer mr-8" onClick={onClick}>
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
    </div>
  )
}

export default ArtistCard
