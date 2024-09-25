"use client"
import React from 'react'
import { motion } from "framer-motion"


export default function Button() {
  return (
    <a className='inline h-10 w-28 xs:h-12 xs:w-36 rounded-lg mx-auto' href="#me">
      <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.85}} className=' text-base h-10 w-28 xs:h-[49px] xs:w-36 rounded-lg xs:text-lg text-white  border-white border mt-4 bg-[#E31B6D] transition-all duration-200 my-auto'>
        View more
      </motion.button>
    </a>
  )
}
