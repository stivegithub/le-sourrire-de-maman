import React, { FunctionComponent } from 'react'
import c1 from '../../src/images/c1.jpeg'
import c2 from '../../src/images/c2.jpeg'
import c3 from '../../src/images/c3.jpeg'
import Card from '../tools/Card'



const Service:FunctionComponent = () => {
  return (
    <div className=' bg-gray-700 p-5 sm:mt-7  '>
        <div className=' text-center font-bold text-white text-3xl'>Nos offres dans le domaine de l'education de vos enfants</div>
        <div className=' text-center'>Adapté au programmes des cours de  de la maternelle en terminale.</div>

        <div className='sm:flex sm:justify-between gap-7 mt-4 '>
            <Card photo={c1} redirection='/assistance-a-domicile' description='un suivi personnalisé avec des enseignants hautement qualifiés dans leur domaine. ' bouton='En savoir plus' submit={()=>{}}  titre='Assistance a domicile'/>
            <Card photo={c2} redirection='/papa' description='Des questionnaires pour enrichir votre culture generale et revisions' bouton='En savoir plus' submit={()=>{}}  titre='Quizz et challenge'/>
            <Card photo={c3} redirection='/maman' description='Des activités extra-scolaires qui contribue a faire de vous des personnes integres et complete dans la societé' bouton='En savoir plus' submit={()=>{}}  titre='Divertissement & Loisirs'/>


        </div>

      
    </div>
  )
}

export default Service
