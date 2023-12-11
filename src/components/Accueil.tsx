/* eslint-disable jsx-a11y/alt-text */
import React, { FunctionComponent } from 'react'
import img1 from '../../src/images/1.jpeg'
import Type from './Type'
const Accueil:FunctionComponent = () => {
    const img=img1
  return (
<>
<div className=' grid sm:grid-cols-10 w-screen font-semibold mt-16'>
        <div className=' col-span-4  px-4  sm:text-7xl  text-5xl' >
           <div  className=' sm:mt-32'> <span> Best </span> <span className=' text-blue-400'> Applied Education </span> <span>platform</span></div>
        </div>
        <div className=' col-span-6'>
            <img src={img}  className=''/>
        </div>
        
      
    </div>
    <Type/>
</>
  )
}

export default Accueil
