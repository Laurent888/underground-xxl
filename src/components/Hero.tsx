import React from 'react'

function Hero() {
  return (
    <div className="h-128 md:h-200 w-full relative">
      <video autoPlay loop muted playsInline className="video opacity-40">
        <source src="/heroVideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-12 left-8 md:bottom-1/3 md:left-32">
        <h5 className="font-bold text-white text-left md:pl-1 mb-2">SEP 1 - SEP 3, HELSINKI</h5>
        <h3 className="font-extrabold text-4xl md:text-5xl lg:text-8xl mb-2 ">BIGGER</h3>
        <h3 className="font-extrabold text-4xl md:text-5xl lg:text-8xl mb-2 text-orange-500">BOLDER</h3>
        <h3 className="text-4xl md:text-6xl lg:text-8xl font-extrabold">
          UNDERGROUND <span className="text-orange-600">XXL</span>
        </h3>

        <p className="text-lg font-semibold mt-8 pr-6">
          Workshops with international teachers, two nights of dancings. It is time to bring the Underground to the next
          level!
        </p>
      </div>
    </div>
  )
}

export default Hero
