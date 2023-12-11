import React, { FunctionComponent} from 'react';
import './App.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import PageAccueil from './pages/PageAccueil';
import PageAssistanceDomicile from './pages/PageAssistanceDomicile';


const App:FunctionComponent =()=>{


  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PageAccueil/>}/>
      <Route path='/assistance-a-domicile' element={<PageAssistanceDomicile/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
