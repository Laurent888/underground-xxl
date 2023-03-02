import Image, { StaticImageData } from "next/image";
import React from "react";

type HeroImageProps = {
  title: string;
  src: StaticImageData;
  alt: string;
};

const HeroImage = ({ src, alt, title }: HeroImageProps) => {
  return (
    <div className="relative md:h-[500px] w-screen">
      <div className="absolute h-full w-full bg-black opacity-50" />
      <Image
        src={src}
        alt={alt}
        className="object-cover object-center"
        style={{ width: "100%", height: "100%" }}
      />
      <h1 className="absolute top-1/3 md:left-28 font-bold text-8xl text-white">
        {title}
      </h1>
    </div>
  );
};

export default HeroImage;
