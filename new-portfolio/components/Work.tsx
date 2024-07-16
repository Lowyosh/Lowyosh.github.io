import React from 'react'
import BadgeLogo from './ui/BadgeLogo'
import '../components/tittles.css'

function Work(){
  return (
    <section id='work' className='relative flex flex-col z-10 mx-auto justify-center lg:max-w-[680px] my-16'>
    <div className='flex text-xl font-bold mb-4 justify-start'>
      <h6 className=' bg-white px-4 py-1 hover:rotate-[3deg] transition-all dark:text-black text-2xl'>Work Experience</h6>
    </div>
      <div className='flex'>
        <div className=' flex flex-col basis-2/6'>
          <p className='font-bold'>Software Developer</p>
          <p className=''>Softtek, Spain <br /> 2023 - Current</p>
        </div>
        <div className=' flex flex-col basis-4/6 gap-6'>
          <p className=''>Development of <span className='bg-sub dark:bg-sub2'>IoT applications,</span>based on real-time data tracking. Design of components and views in Figma.<span className='bg-sub dark:bg-sub2 px-2'>React, TypeScript</span>and Lit. Agile methodology on Jira</p>
          <div className=' flex justify-center items-center gap-2 mb-12'>
            <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="typescript Logo"></BadgeLogo>
            <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="react Logo"></BadgeLogo>
            <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" alt="sass Logo"></BadgeLogo>
            <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="nodejs Logo"></BadgeLogo>
            <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg" alt="azuredevops Logo"></BadgeLogo>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div className=' flex flex-col basis-2/6'>
          <p className='font-bold'>Head Designer &
          Visual Manager</p>
          <p className=''>Morrison Clothing, Madrid <br /> 2020 - 2023</p>
        </div>
        <div className=' flex flex-col basis-4/6 gap-6'>
          <p className=''><span className='bg-sub dark:bg-sub2 px-2'>Team management:</span>Supervision, assignment, goals and support. Strategic planning: Collaborative objectives and strategies.
          <span className='bg-sub dark:bg-sub2 px-1'>Campaigns production</span>and project management: Supervision, deadlines and quality.
              Kanban Methodology.</p>
          <div className=' flex justify-center items-center gap-2 mb-12'>
            <BadgeLogo source="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/2101px-Adobe_Creative_Cloud_rainbow_icon.svg.png" alt="Adobe CC Logo"></BadgeLogo>
            <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original.svg" alt="trello Logo"></BadgeLogo>
            <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="figma Logo"></BadgeLogo>
            <BadgeLogo source="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/109_Elementor_logo_logos-512.png" alt="Elementor Logo"></BadgeLogo>
            <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="css3 Logo"></BadgeLogo>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div className=' flex flex-col basis-2/6'>
          <p className='font-bold'>Designer, photographer & editor.</p>
          <p className=''>Freelance, Spain <br /> 2016 - 2023</p>
        </div>
        <div className=' flex flex-col basis-4/6 gap-6'>
          <p className=''>Ideation and development of promotional materials.<span className='bg-sub px-1 dark:bg-sub2'>Creation of visual pieces.</span>Understanding the client's needs and make them real with coherence.</p>
          <div className=' flex justify-center items-center gap-2 mb-12'>
            <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" alt="Photoshop Logo"></BadgeLogo>
            <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg" alt="Premiere pro Logo"></BadgeLogo>
            <BadgeLogo source="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/788px-Adobe_Illustrator_CC_icon.svg.png" alt="illustrator Logo"></BadgeLogo>
            <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="figma Logo"></BadgeLogo>
            <BadgeLogo source="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/camera-with-flash.png" alt="Camera"></BadgeLogo>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work;