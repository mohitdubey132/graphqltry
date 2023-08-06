import React from 'react'
import NavigationArea from './NavigationArea';
import LoginArea from './LoginArea';
const NavigationBar
 = ({background,dark,color}) => {
  return (
    <div className='flex mx-[4.5rem] items-center justify-between  delay-[2s] text-black bg-transparent'  style={{}}>
      {/* <LogoOFTheClam/> */}
      <NavigationArea/>
      <LoginArea/>
      {/* <Menu/> */}
    </div>
  )
}

export default NavigationBar
