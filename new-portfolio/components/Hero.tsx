import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { BiLogoAngular, BiLogoReact, BiLogoTypescript } from 'react-icons/bi'
import { Button } from './ui/moving-border'

const Hero = () => {
  return (
    <section className='pb-20 pt-36 '>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
      </div>

      <div className="absolute top-0 left-0 h-screen w-full dark:bg-darkblue bg-cream dark:bg-grid-white/[0.05] bg-grid-black/[0.05] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex justify-center dark:bg-darkblue bg-cream [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>
      <div className='flex justify-center relative mt-20 mb-6 z-10 gap-8'>
        <div className='max-w-[80vw] md:max-w-2xl lg:max-w-w[60vw] flex flex-col'>
          <h3 className='text-xs tracking-wide max-w-80 text-lowblue'>All made with Typescript, Next.js and Tailwind.</h3>
          <TextGenerateEffect className="text-[40px] md:text-5xl lg:text-6xl" words="Creative Frontend Dev"></TextGenerateEffect>
          <p className='mb-3 sm:max-w-[320px] md:max-w-[350px] text-lowblue md:text-lg lg:text-2xl'>Hi, I&apos;m Jose. Also cyclist, photographer,
          hiker and gamer</p>
        </div>
        <div className='sm:w-[100px] md:w-[150px] lg:w-[200px] sm:h-[100px] md:h-[150px] lg:h-[200px] p-8 aspect-square rounded-md bg-lowblue'>

          {/* <img src="../images/perfil2.jpg" alt="Profile photo" className='w-[150px]'/> */}
        </div>

      </div>
      <div className='w-full flex gap-5 justify-center relative z-10'>
            <Button
              borderRadius="0.5rem"
              borderColor='bg-[radial-gradient(var(--blue-600)_40%,transparent_60%)]'
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-default gap-2">
                <BiLogoTypescript className='text-2xl'/> Typescript
            </Button>
            <Button
              borderRadius="0.5rem"
              borderColor='bg-[radial-gradient(var(--sky-400)_40%,transparent_60%)]'
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-default gap-2">
                <BiLogoReact className='text-2xl'/> React
            </Button>
            <Button
              borderRadius="0.5rem"
              borderColor='bg-[radial-gradient(var(--red-500)_40%,transparent_60%)]'
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-default gap-2">
                <BiLogoAngular className='text-2xl'/> Angular 
            </Button>

        </div>
    </section>
  )
}

export default Hero