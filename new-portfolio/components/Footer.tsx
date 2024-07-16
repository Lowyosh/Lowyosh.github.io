import React from 'react'
import { FaDownload } from 'react-icons/fa'


export const Footer = () => {
  return (
    <section id='footer' className='w-full flex bg-cream-100 py-12'>
      <div className='max-w-screen-lg mx-auto flex gap-8 xs:flex-col md:flex-row'>
        <div className='basis-2/4'>
          <p>in case you were wondering... <br /> <span className='font-bold'>I am Jose,</span>I&apos;m a developer with a talent for crafting interfaces with character. My professional journey began in design eight years ago, and for the past three years, I have been deeply involved in software development. During this time, I have dedicated myself to mastering front-end development technologies and acquiring solid expertise in JavaScript and TypeScript.</p>
        </div>
        <div className='basis-2/4 flex flex-col'>
          <div>
            <button className='bg-white flex rounded-md py-2 px-6'>Download my resume <FaDownload/></button>
          </div>
          <div>
            <p>Or contact me through any of this:</p>
            <div className='flex gap-2 items-center'>
              <b>josealzdz@gmail.com</b>
              <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="" />
              <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
