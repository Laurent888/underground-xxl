import React from 'react'
import { motion } from 'framer-motion'

const AnimatedHeroText = ({ delay, text, classname }: { text: string; delay: number; classname?: string }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0, scale: 0.95 }}
      transition={{ delay, bounce: false, ease: 'easeOut', duration: 0.8 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
    >
      <h3 className={`font-extrabold text-4xl md:text-5xl lg:text-8xl mb-2 ${classname}`}>{text}</h3>
    </motion.div>
  )
}

function Hero() {
  return (
    <div className="h-128 md:h-200 w-full relative">
      <video autoPlay loop muted playsInline className="video opacity-40">
        <source src="/heroVideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-12 left-8 md:bottom-1/3 md:left-32">
        <h5 className="font-bold text-white text-left md:pl-1 mb-2">SEP 1 - SEP 3, HELSINKI</h5>
        <AnimatedHeroText text="BIGGER" delay={0.2} />
        <AnimatedHeroText text="BOLDER" delay={0.6} classname="text-orange-500" />
        <motion.h3
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          transition={{ delay: 1, bounce: false, ease: 'easeOut', duration: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className="text-4xl md:text-6xl lg:text-8xl font-extrabold"
        >
          UNDERGROUND <span className="text-orange-600">XXL</span>
        </motion.h3>

        <motion.p
          initial={{ x: -20, opacity: 0 }}
          transition={{ delay: 1.4, duration: 0.5, bounce: false, ease: 'easeOut' }}
          animate={{ x: 0, opacity: 1 }}
          className="text-lg font-semibold mt-8 pr-6"
        >
          Workshops with international teachers, two nights of dancings. It is time to bring the Underground to the next
          level!
        </motion.p>
      </div>
    </div>
  )
}

export default Hero
