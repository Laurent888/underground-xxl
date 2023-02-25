import Image, { StaticImageData } from "next/image";
import React from "react";

type ArtistCardProsp = {
  source: StaticImageData;
  alt: string;
  name: string;
};

function ArtistCard({ source, alt, name }: ArtistCardProsp) {
  return (
    <div className="relative artistCardContainer mr-8">
      <div className="artistCard ">
        <Image
          src={source}
          alt={alt}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <p className="absolute bottom-4 left-4 font-bold text-gray-50 text-xl uppercase">
        {name}
      </p>
    </div>
  );
}

export default ArtistCard;
