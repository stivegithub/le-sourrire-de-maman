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
      <div className=' mt-14 '>
      <section className="bg-blue-500 text-white p-8">
  <div className="max-w-screen-xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold mb-4">Bienvenue chez <span className="text-yellow-300">JOSH&CO</span></h2>
    <p className="text-lg mb-6">
      <span className="font-bold">JOSH&CO</span> est votre partenaire d'assistance à domicile et d'orientation scolaire depuis plus de <span className="font-bold">10 ans</span>. Nous guidons les élèves de l'enseignement de base, maternelle et primaire, ainsi que de l'enseignement secondaire.
    </p>
    <p className="text-lg">
      Notre mission est d'offrir un soutien <span className="font-bold">exceptionnel</span> et des conseils éducatifs pour aider chaque élève à atteindre <span className="font-bold">son plein potentiel</span>.
    </p>
  </div>
</section>

        </div>
      <AccueilAssistance/>
      
    </div>
  )
}

export default PageAssistanceDomicile
