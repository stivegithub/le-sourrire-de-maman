import React, { FunctionComponent, useEffect } from 'react'
import Navbar from '../components/Navbar'
import img2 from '../../src/images/joss.png';
import AccueilAssistance from '../components/AccueilAssistance';


const PageAssistanceDomicile:FunctionComponent = () => {
  useEffect(()=>{
    document.title='JOSH & CO'
  })
  return (
    <div>
      <Navbar images={img2}/>
      <div className=' mt-20 text-justify' style={{ fontSize:'20px' }}><span  className=' cursor-pointer text-2xl font-bold border-b-2 border-orange-500 bg-orange-200 rounded-sm px-1'>JOSH&CO</span> est un groupe d'assistance a domicile et d'orientation scolaire, qui encardre les eleve de l'enseignement de base: maternelle et primaire, puis de l'enseignement secondaire depuis plus de 10 ans deja.</div>
      <AccueilAssistance/>
      
    </div>
  )
}

export default PageAssistanceDomicile
