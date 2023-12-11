import React, { FunctionComponent} from 'react';
import Navbar from '../components/Navbar';
import Accueil from '../components/Accueil';
import Service from '../components/Service';
import Contact from '../components/Contact';
import Temoignage from '../components/Temoignage';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import img2 from '../../src/images/2.png';


const PageAccueil:FunctionComponent =()=>{

  return(
 <>
 <Navbar images={img2}/>
 <Accueil/>
 <Service/>
 <Contact/>
 <Temoignage/>
 <Newsletter/>
 <Footer/>

 </>
  )
}

export default PageAccueil;
