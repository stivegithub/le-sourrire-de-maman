// NewsletterSection.js
import axios from 'axios';
import React, { useState } from 'react';
import Notifications from './Notifications';


const Newsletter = () => {
  const [email, setEmail]=useState<string>('')
  const [err, setErr]=useState<string>('')
  const [valid, setValid]=useState<string>('')
  const [showNotification, setShowNotification] = useState(false);
  const [state, setState]=useState<boolean>(false)

  const sendSecond = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
 try{
  const  response= await axios.post('http://localhost:2003/newsletter', { email} );
  if(response.data.message){
    setValid(response.data.message)
    setEmail('')
    console.log(response.data.message)
    setState(false)
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
    



 } }
 catch(error:any){
   if(error.response && error.response.data ){
    if(error.response.data.err){
      setErr(error.response.data.err)
      setState(true)
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
  
    }
   }
 }
  }
  return (
    <div className="bg-blue-800 text-white py-16">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-extrabold mb-4 text-white">Abonnez-vous à notre newsletter</h2>
        <p className="text-lg mb-8 text-white">Recevez les dernières mises à jour directement dans votre boîte de réception.</p>
        <form className="flex flex-col sm:flex-row w-full max-w-md" onSubmit={(e)=>sendSecond(e)}>
          <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
            type="email"
            placeholder="Votre adresse e-mail"
            className="w-full sm:w-2/3 px-4 py-2 mb-4 sm:mb-0 border border-white rounded-l-md focus:outline-none focus:border-orange-500 text-black"
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-r-md transition duration-300 ease-in-out"
          >
            S'abonner
          </button>
          <Notifications
        message={`${state? `${err}`:"Succès ! Vous vous êtes abonné à la newsletter."}`}
        show={showNotification} color={`${state? ' bg-red-500':'bg-green-500'}`}
      />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
