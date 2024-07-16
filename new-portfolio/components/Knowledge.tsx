import React from 'react'
import BadgeLogo from './ui/BadgeLogo'

const Knowledge = () => {
  return (
    <section id='courses' className='relative flex flex-col z-10 mx-auto justify-center lg:max-w-[680px] my-12 py-12'>
    <div className='flex text-xl font-bold mb-4 justify-start'>
      <h6 className=' bg-white px-4 py-1 hover:rotate-[3deg] transition-all dark:text-black text-2xl'>Courses</h6>
    </div>
    
    <div className='flex flex-col mb-8'>
      <div className='flex gap-8'>
        <div className='flex flex-col mb-2'>
          <p><b> Angular 17 Pro Course</b> May, June 2024</p>
          <p>Traingin IT. Alberto Basalo.</p>
        </div>
        <div className='flex justify-center items-center'>
          <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" alt="angular Logo"></BadgeLogo>
        </div>
      </div>
      <div className='flex'>
        <p className=''>Standalone,<span className='bg-sub dark:bg-sub2'> Signal Components,</span>  Lazy loading. State management, RxJs Interop, Redux. Ux Optimization, PWA, Defer. Testing with Jest, Storybook, Cypress.</p>
      </div>
    </div>


    <div className='flex flex-col mb-8'>
      <div className='flex gap-8'>
        <div className='flex flex-col mb-2'>
          <p><b>Web Design & UX/UI Master</b> 2022 - 2023</p>
          <p>Trazos School</p>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="figma Logo"></BadgeLogo>
          <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="typescript Logo"></BadgeLogo>
          <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="nodejs Logo"></BadgeLogo>
        </div>
      </div>
      <div className='flex'>
        <p className=''>Design Thinking and Lean UX. Atomic Design and components.<span className='bg-sub dark:bg-sub2'> Asynchrony</span> in JavaScript, React Hooks <span className='bg-sub dark:bg-sub2 px-1'>and state management.</span> API consumption. Deploying web applications. </p>
      </div>
    </div>


    <div className='flex flex-col mb-8'>
      <div className='flex gap-8'>
        <div className='flex flex-col mb-2'>
          <p><b>Frontend Libraries Certification</b> 2022</p>
          <p>FreeCodeCamp.org</p>
        </div>
        <div className='flex justify-center items-center gap-2'>
        <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="react Logo"></BadgeLogo>
        <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" alt="sass Logo"></BadgeLogo>
        </div>
      </div>
      <div className='flex'>
        <p className=''>Building and deploying SPAs with React, Redux, Sass and Bootstrap.</p>
      </div>
    </div>


    <div className='flex flex-col mb-8'>
      <div className='flex gap-8'>
        <div className='flex flex-col mb-2'>
          <p><b>Javascript Algorithms and Data structure</b> 2021</p>
          <p>FreeCodeCamp.org</p>
        </div>
        <div className='flex justify-center items-center gap-2'>
        <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="Javascript Logo"></BadgeLogo>
        </div>
      </div>
      <div className='flex'>
        <p className=''>ES6, Regular Expressions, Basic Data Structures, Algorithm Scripting and OOP.</p>
      </div>
    </div>
  </section>
  )
}

export default Knowledge