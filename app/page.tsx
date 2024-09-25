'use client'
import React from "react"
import Button from "./Components/Button"
import Tech from "./Components/Tech"
import About from "./Components/About"
import Project from "./Components/Project"
import Footer from "./Components/Footer"
import ResumeBtn from "./Components/ResumeBtn"


export default function Home() {

  return (
    <>
    <main>
      <section className='bg-[#0F172A] h-screen w-screen overflow-hidden relative flex justify-center items-center'>
          <div className='bg-[#6a8bd7] absolute  w-80 h-80 rounded-full blur-lg bottom-[75vh] right-[85vw] animate-pulse hover:w-96 hover:h-96 transition-all'></div>
          <div className={` w-[2px] h-[500px] bg-white absolute top-0 right-0 rotate-45 origin-top `}></div>
          <div className=" w-[2px] h-[500px] bg-white absolute top-[50vh] rotate-45 left-[351px] origin-top"></div>
          <div className='bg-[#E31B6D] absolute  w-20 h-20 rounded-full blur-md animate-bounce bottom-1 right-4'></div>
          <div className='z-10 flex flex-col justify-center max-w-[99vw] w-[360px] md:w-[610px] bg-[#0F172A] h-52 border-white border rounded-lg py-8 relative mb-16 '>
              <span className=' w-4 h-4 rounded-full bg-white absolute bottom-[200px] left-[351px] md:left-[601px] animate-ping'></span>
              <p className='text-white text-base xs:text-2xl md:text-4xl w-max mx-auto'>
                  Hello There, <span className='text-[#E31B6D]'>I&#39;m Ashish Kumar</span>. <br />
                  I am a full stack web Developer.
              </p>
              <div className="w-max mx-auto space-x-8  ">
                <ResumeBtn/>
                <Button/>
              </div>
          </div>  
      </section>
      <About/>
      <Tech/>
      <Project/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}
