import { motion } from 'framer-motion'
import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'

const InstagramLogo = () => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="w-12 h-12">
      <AiOutlineInstagram className="h-full w-full" />
    </motion.div>
  )
}

export default InstagramLogo
