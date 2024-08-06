import React from 'react'
import { CardBentofinal } from './ui/CardBentofinal'
import { CardVue } from './ui/CardVue'
import { CardGuestify } from './ui/CardGuestify'

export const Projects = () => {
  return (
    <section id='projects' className='relative flex flex-col z-10 mx-auto justify-center lg:max-w-[680px] my-12 max-h-full'>
      <div className='flex text-xl font-bold mb-4 justify-start'>
        <h6 className=' bg-white px-4 py-1 hover:rotate-[3deg] transition-all dark:text-black text-2xl'>Projects</h6>
      </div>
      <div className='flex flex-col gap-4 max-w-680px max-h-[760px]'>
      <div className='flex gap-4 md:flex-row xs:flex-col'>
        <div className='basis-4/6 '>
         <CardBentofinal/> 
        </div>
        <div className='basis-2/6'>
        <CardVue/>
        </div>
      </div>
        <CardGuestify/>
      </div>
    </section>
  )
}
