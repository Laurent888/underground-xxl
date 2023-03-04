import React from 'react'
import { motion } from 'framer-motion'
import { fadeinVariant } from '@/utils/motion'

const AnimatedContainer = ({
  children,
  className = '',
  delay = 0,
  viewportAmount = 0.5,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  viewportAmount?: number
}) => {
  return (
    <motion.div
      variants={fadeinVariant}
      initial="hidden"
      whileInView="visible"
      transition={{ delay }}
      className={className}
      viewport={{
        amount: viewportAmount,
        once: true,
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedContainer
