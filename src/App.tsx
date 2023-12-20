import React, { FunctionComponent} from 'react';
import './App.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import PageAccueil from './pages/PageAccueil';
import PageAssistanceDomicile from './pages/PageAssistanceDomicile';
import PageQuizz from './pages/PageQuizz';


const App:FunctionComponent =()=>{


  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PageAccueil/>}/>
      <Route path='/assistance-a-domicile' element={<PageAssistanceDomicile/>}/>
      <Route path='/quizz' element={<PageQuizz/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
