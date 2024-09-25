'use client'
import React,{useState} from 'react'
import Carousel from "nuka-carousel"
import {
  renderCenterLeftControls,
  renderCenterRightControls,
} from '@/app/Components/control'
import Image from 'next/image'

export default function Slider({img1,img2,img3,img4,img5}:any) {

  return (
    <Carousel className=' w-full h-80 group' autoplay={true} autoplayInterval={5000}
    slideIndex={0}
    renderCenterLeftControls={renderCenterLeftControls}
    renderCenterRightControls={renderCenterRightControls}
    enableKeyboardControls={false}
    wrapAround={true}
    pauseOnHover={false} 
    defaultControlsConfig={
      {
        pagingDotsContainerClassName:'pg'      
      } 
    }
    >

      <div>
        <Image className='w-full h-80' src={img1} alt='img1' width={1024} height={600} />
      </div>
      <div>
        <Image className='w-full h-80' src={img2} alt='img2' width={1024} height={600}  />
      </div>
      <div>
        <Image className='w-full h-80' src={img3} alt='img3' width={1024} height={600}  />
      </div>
      {img4 &&
        <div>
        <Image className='w-full h-80' src={img4} alt='img4' width={1024} height={600}  />
      </div>
      }
      {img5 &&
        <div>
        <Image className='w-full h-80' src={img5} alt='img5' width={1024} height={600}  />
      </div>
      }
    </Carousel>
  )
}
