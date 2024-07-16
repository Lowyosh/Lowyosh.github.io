import React from 'react'

interface BadgeLogoProps {
  source: string;
  alt: string;
}
function BadgeLogo ({source, alt }: BadgeLogoProps) {
  return (
    <div className='aspect-square p-1 w-[34px] bg-white rounded-md shadow-md hover:shadow-none transition-all'>
      <img src={source} alt={alt} className='w-[28px] rounded-sm'/>
    </div>
  )
}

export default BadgeLogo