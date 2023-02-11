import React from "react";
import Image from "next/image";
import HeroImage from "../public/hero.jpg";

function Hero() {
  return (
    <div className="h-full w-full">
      <Image
        src={HeroImage}
        style={{ objectFit: "cover" }}
        className="h-full w-full"
      />
    </div>
  );
}

export default Hero;
