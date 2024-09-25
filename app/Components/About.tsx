import Image from 'next/image'
import React from 'react'
import Mail from '../Icons/Mail'
import Linkedin from '../Icons/Linkedin'
import Github from '../Icons/Github' 

export default function About() {
  return (
    <section id='me' className='w-screen h-max bg-white overflow-hidden flex flex-col items-center mb-10'>
      <h2 className=' my-8 text-4xl text-gray-800 font-semibold underline-offset-8 underline'>
        About
      </h2>
      <div className=' flex md:flex-row flex-col mx-0 md:mx-auto md:w-max'>
        <Image className='h-72 w-72 lg:h-72 lg:w-72 md:h-60 md:w-60 rounded-full md:mx-0 mx-auto' src={"/me.png"} alt='Me' height={160} width={160}/>
        <div className='text-xl w-[95vw] md:w-[72vw] lg:w-[600px] lg:text-2xl my-6 ml-3 lg:m-6 text-center md:text-left'>
        I&#39;m Ashish Kumar. <br /> I&#39;m a full-stack developer from Delhi. <br /> Currently pursuing my B.E in Bangalore, <br />Well-versed in developing efficient API&apos;s with Express Js and Mongo Db. Excels in HTML, CSS, JavaScript and React development
          <p className=' text-base flex w-80 justify-between items-center h-10 font-sans mt-4'>
          <Mail/> ashish74624@gmail.com | <a href="https://www.linkedin.com/in/ashish-kumar-05386722a" target="_blank" rel="noopener noreferrer"><Linkedin/></a> | <a href="https://github.com/ashish74624" target="_blank" rel="noopener noreferrer"><Github/></a> 
          </p> 
        </div>
       
      </div>
    </section>
  )
}
