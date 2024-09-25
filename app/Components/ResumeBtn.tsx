'use client'
import React from 'react'
import { motion } from "framer-motion"


export default function ResumeBtn() {
  return (
    <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.85}}>
        <a className=' text-base h-10 w-28 xs:h-12 xs:w-36 rounded-lg xs:text-lg text-white  border-white border mt-4 bg-lime-400 py-[10px] px-5 xs:py-[13.5px] xs:px-8 transition-all duration-200 my-auto' target="_blank" href="/resume.pdf">
            Resume
        </a>
    </motion.button>
  )
}
