import React from 'react'
import Image from 'next/image'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Slider from './Slider'
import Github from '../Icons/Github'
  

export default function Project() {
    
    const projects =[
        {id:1,title:"Solids",desc:"An Ecommerce Website",stack:"Next js | Tailwind Css | Kinde Auth",image:"/solids.png",img1:"/s1.png",img2:"/s2.png",img3:"/s3.png",img4:"/s4.png",img5:"/s5.png",github:"https://github.com/ashish74624/Ecommerce",link:"https://solids.vercel.app/"},
        {id:2,title:"Poloroid",desc:"A Social media Website",stack:"Next js | Tailwind Css | Express Js | Mongo Db",image:"/poloroid.png",img1:"/poloroid.png",img2:"/p2.png",img3:"/p3.png",img4:"/p4.png",img5:"/p5.png",github:"https://github.com/ashish74624/MERNsocial",link:"https://poloroid.vercel.app/"},
        {id:3,title:"Image Drop",desc:"An Image drop and retrieve website",stack:"React | Tailwind Css |  Express js | Mongo Db",image:"/img.png",img1:"/img.png",img2:"/i2.png",img3:"/i3.png",img4:"/i4.png",img5:"/i5.png",github:"https://github.com/ashish74624/ImageUploader",link:"https://imagedrop.vercel.app/"},
        {id:4,title:"UpFront",desc:"A News website",stack:"Next js | Tailwind Css",image:"/upfront.png",img1:"/upfront.png",img2:"/u2.png",img3:"/u3.png",img4:"/u4.png",img5:"/u5.png",github:"https://github.com/ashish74624/UpFront",link:"https://upfront-fawn.vercel.app/"},
        {id:5,title:"Weather",desc:"A simple weather app",stack:"React Js | Tailwind Css",image:"/wether.png",img1:"/wether.png",img2:"/w2.png",img3:"/w3.png",img4:undefined,img5:undefined,github:"https://github.com/ashish74624/weather",link:"https://ashish74624.github.io/weather/"},
    ]

  return (
    <section className='w-screen h-max bg-white overflow-hidden flex flex-col items-center mb-10'>
        <h2 className=' my-8 text-4xl text-gray-800 font-semibold underline-offset-8 underline'>
            Projects
        </h2>
        <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {projects.map((item)=>(
                <div key={item.id} className=' w-80 md:w-96 h-64 relative group overflow-hidden'>
                <Image className=" w-80 md:w-96 h-64 group-hover:scale-125  transition-all duration-500" src={item.image} alt="" width={400} height={260} />
                <div className='absolute top-11 w-80 md:w-96 h-64 bg-white opacity-0 bg-opacity-0 group-hover:top-0 group-hover:bg-opacity-100 group-hover:opacity-100 group-hover:transition-all group-hover:duration-300 text-black flex flex-col justify-center items-center text-xl  border-[#E31B6D] border-2 '>
                    <p>{item.title}</p>
                    <Dialog>
                        <DialogTrigger className=' h-10 w-20 mt-4 text-sm bg-[#E31B6D] rounded-lg text-white hover:outline-[#0F172A] hover:outline transition-all active:bg-[#0F172A]'>View more</DialogTrigger>
                        <DialogContent>
                            <div className=' mt-2'>
                                <Slider img1={item.img1} img2={item.img2} img3={item.img3} img4={item.img4} img5={item.img5}/>
                            </div>
                            <div>
                                <h2 className=' text-4xl text-gray-800'>{item.title}</h2>
                                <h3 className='text-3xl text-gray-500'>{item.desc}</h3>
                                <h4 className=' text-lg text-black'>{item.stack}</h4>
                                <div className=' w-52 flex justify-between h-10 mt-4'>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <button className='h-10 text-white w-20 text-sm bg-[#E31B6D] rounded-lg hover:outline-[#0F172A] hover:outline transition-all active:bg-[#0F172A]'>
                                        Visit
                                    </button>
                                </a>
                                <a className=' rounded-lg' href={item.github} target='_blank'>
                                    <button className=" bg-[#181717] w-24 h-10 hover:bg-white hover:border hover:border-black hover:text-black transition py-1 text-white rounded-lg flex justify-center items-center text-sm">
                                        <span className=''><Github/></span>
                                        <span>GitHub</span>
                                    </button>
                                </a>
                            </div>
                            </div>
                        </DialogContent>
                    </Dialog>

                </div>
            </div> 
            ))}
        </div>
    </section>
  )
}
