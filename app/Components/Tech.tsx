'use client'
import React from 'react'
import { Tilt } from 'react-tilt'
import Html from '../Icons/Html'
import Css from '../Icons/Css'
import Js from '../Icons/Js'
import Tailwind from '../Icons/Tailwind'
import ReactIcon from '../Icons/React'
import ReactRouter from '../Icons/ReactRouter'
import Next from '../Icons/Next'
import Node from '../Icons/Node'
import Express from '../Icons/Express'
import Mongo from '../Icons/Mongo'

export default function Tech() {

  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  


  const tech =[
    {id:1,title:"Html",icon:<Html/>},
    {id:2,title:"Css",icon:<Css/>},
    {id:3,title:"JavaScript",icon:<Js/>},
    {id:4,title:"Tailwind Css",icon:<Tailwind/>},
    {id:5,title:"React",icon:<ReactIcon/>},
    {id:7,title:"Next Js",icon:<Next/>},
    {id:8,title:"Node Js",icon:<Node/>},
    {id:9,title:"Express js",icon:<Express/>},
    {id:10,title:"Mongo Db",icon:<Mongo/>},
  ]
  return (
    <section  className=' w-screen h-max bg-white overflow-hidden flex flex-col items-center '>
      <h2 className=' my-8 text-4xl text-gray-800 font-semibold underline-offset-8 underline'>Tech Stack</h2>
      <div className=' w-screen overflow-y-hidden overflow-x-scroll md:w-max mx-auto flex md:grid md:grid-cols-3 gap-4 mb-8 md:p-8 px-2'>
        {tech.map((item)=>(
          <Tilt className="hover:shadow-2xl" key={item.id}  options={defaultOptions} >
        <div className=' bg-teal-600 text-white text-xl rounded-lg w-36 h-56 md:h-64 md:w-48 flex flex-col justify-center items-center '>
            {item.icon}
            {item.title}
        </div>
        </Tilt>
        ))}
        
      </div>
    </section>
  )
}
