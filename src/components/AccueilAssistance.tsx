/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { FunctionComponent } from 'react'
import Form from './Form';
import Localisation from './LocalisationAssistance';
import CarouselAssistance from './CarouselAssistance';
import Newsletter from './Newsletter';
import Footer from './Footer';


const AccueilAssistance:FunctionComponent = () => {
  return (
    <>
     <Form/>
      <Localisation/>
      <CarouselAssistance/>
      <Newsletter/>
      <Footer/>
    </> 
  )
}

export default AccueilAssistance
