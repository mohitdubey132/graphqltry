import React from 'react'

const NavigationArea = () => {
  return (
    <nav className=' w-full hidden md:flex'>
        <ul className='flex justify-between items-center w-full border-2  border-l-black'>
            <li className='font-poppins font-normal text-[1.25rem]'>
             Home                
            </li>
            <li className='font-poppins font-normal text-[1.25rem]'>
             Massage   
            </li>
            <li className='font-poppins font-normal text-[1.25rem]'>
            Gift Services        
            </li>
            <li className='font-poppins font-normal text-[1.25rem]'>
             Corporatation
            </li>
            <li className='font-poppins font-normal text-[1.25rem]'>
             About us   
            </li>
        </ul>
    </nav>
  )
}

export default NavigationArea