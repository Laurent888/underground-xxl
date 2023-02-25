import React from "react";
import Image from "next/image";
import HeroImage from "../public/hero.png";

function Hero() {
  return (
    <div style={{ height: "700px" }} className=" w-full">
      <Image
        src={HeroImage}
        style={{ objectFit: "fill" }}
        className="h-full w-full"
      />
    </div>
  );
}

export default Hero;
