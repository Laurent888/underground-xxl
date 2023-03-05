import { motion } from 'framer-motion'
import React from 'react'
import { AiOutlineFacebook } from 'react-icons/ai'

const FacebookLogo = () => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="w-12 h-12">
      <AiOutlineFacebook className="h-full w-full" color="white" />
    </motion.div>
  )
}

export default FacebookLogo
