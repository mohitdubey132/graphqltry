import React, { useState } from 'react'

const LoginArea = () => {
const [language,setLanguage]=useState('uk')
const [languageSelectorIsOpen,setlanguageSelectorIsOpen]=useState(false)
const handleLanguageSelector =()=>{
  setlanguageSelectorIsOpen((prev)=>(!prev))
}
  return (
    <div className='hidden md:flex justify-between items-center'>
      <div className='p-4 items-center '><div>
        { language==='uk'?<img src='' alt='' />:null}
        { language==='chinese'?<img src='' alt='' />:null}
        { language==='thai'?<img src='' alt='' />:null}
        </div>
        <button onClick={handleLanguageSelector} className='px-2'>
          { languageSelectorIsOpen?'open':'close'}
          open
        </button>
        </div>
    </div>
  )
}

export default LoginArea