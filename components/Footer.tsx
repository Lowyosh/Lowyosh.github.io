import React from 'react'
import { FaDownload, FaSpotify } from 'react-icons/fa'


export const Footer = () => {
  return (
    <section id='footer' className='w-full flex flex-col bg-cream-100 dark:bg-slate-900 py-20'>
      <div className='max-w-screen-lg mx-auto flex gap-8 xs:flex-col md:flex-row items-center'>
        <div className='basis-4/6'>
          <p className='px-10'>in case you were wondering... <br /> <span className='font-bold'>I am Jose, </span><br /> I&apos;m a developer with a talent for crafting interfaces with character. My professional journey began in design eight years ago, and for the past three years, I have been deeply involved in software development. During this time, I have dedicated myself to mastering front-end development technologies and acquiring solid expertise in JavaScript and TypeScript.</p>
        </div>
        <div className='basis-2/6 flex flex-col gap-4 p-8'>
          <div>
            <a download={true} href={'/jose24eng.pdf'} className='bg-white flex rounded-md py-2 px-6 items-center justify-center gap-2 shadow-lg hover:shadow-none hover:font-semibold transition-all dark:text-black mx-auto'>Download my resume <FaDownload/></a>
          </div>
          <div>
            <p className='my-2'>Or contact me through:</p>
            <div className='flex gap-4 items-center'>
              <b>josealzdz@gmail.com</b>
              <img className='w-6 hover:blur-xs' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="" />
              <img className='w-6 dark:invert' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />
            </div>
            <a target="_blank" href="https://open.spotify.com/intl-es/album/1NjMj1u1EQxn8oESg40bPA?si=kwrp8CbtTdCPwqfp78cRoA" className='bg-white flex rounded-md py-2 px-6 items-center justify-center gap-2 mt-6 shadow-lg hover:shadow-none hover:font-semibold transition-all dark:text-black'>Currently listening... <FaSpotify className='fill-spotify text-xl'/></a>
          </div>
        </div>
      </div>
      <p className='text-center m-auto mt-20'>Made with lots of ❤️ by me. 2024.</p>
    </section>
  )
}
