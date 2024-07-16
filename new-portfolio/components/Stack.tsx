import React from 'react'
import BadgeLogo from './ui/BadgeLogo'
const Stack = () => {
  return (
    <section id='stack' className='relative flex xs:flex-col md:flex-row z-10 justify-center mx-auto items-center lg:w-[680px]'>
      <div className='flex flex-col gap-1 m-4 justify-center mx-auto basis-2/6'>
        <h6 className='font-bold text-2xl'>My stack.</h6>
        <p>Adquired with tears, pain
        and lots of joy</p>
      </div>
      <div className='flex flex-col gap-2 justify-end items-center basis-4/6'>
        <div className='flex gap-2'>
          <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="Javascript Logo"></BadgeLogo>
          <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="html5 Logo"></BadgeLogo>
          <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="css3 Logo"></BadgeLogo>
          <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" alt="sass Logo"></BadgeLogo>
          <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="tailwindcss Logo"></BadgeLogo>
          <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="figma Logo"></BadgeLogo>
          <BadgeLogo source="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/2101px-Adobe_Creative_Cloud_rainbow_icon.svg.png" alt="Adobe CC Logo"></BadgeLogo>
        </div>
        <div className='flex gap-2'>
          <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="typescript Logo"></BadgeLogo>
          <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="react Logo"></BadgeLogo>
          <BadgeLogo source="https://seeklogo.com/images/A/angular-icon-logo-5FC0C40EAC-seeklogo.com.png" alt="angular Logo"></BadgeLogo>
          <BadgeLogo source="https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png" alt="ChatGpt Logo"></BadgeLogo>
          <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="nodejs Logo"></BadgeLogo>
          <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg" alt="azuredevops Logo"></BadgeLogo>
          <BadgeLogo source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original.svg" alt="trello Logo"></BadgeLogo>
        </div>
      </div>
    </section>
  )
}

export default Stack