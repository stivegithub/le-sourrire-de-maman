import React, { useState } from 'react';
import m1 from '../../src/images/m1.png'
import InstagramIcon from '@mui/icons-material/Instagram';import FacebookIcon from '@mui/icons-material/Facebook';import WhatsAppIcon from '@mui/icons-material/WhatsApp'; import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import axios from 'axios';
import Notifications from './Notifications';


const Contact = () => {
    const [username, setUsername]=useState<string>('')
  const [email, setEmail]=useState<string>('')
  const [message, setMessage]=useState<string>('')
  const [err, setErr]=useState<string>('')
  const [valid, setValid]=useState<string>('')
  const [showNotification, setShowNotification] = useState(false);
  const [state, setState]=useState<boolean>(false)


   const sendOne = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
 try{
  const  response= await axios.post('http://localhost:2003/Contact', {username, email, message} );
  if(response.data.message){
      setValid(response.data.message)

      console.log(response.data.message)
      setEmail(''); setMessage('') ; setUsername('')
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
    <div className="flex flex-col lg:flex-row justify-center items-center sm:p-8">
      {/* Formulaire à gauche */}
      <div className="lg:w-1/2 p-4 flex">
       <div>
       <h2 className="text-2xl font-bold mb-4 flex-grow">Contactez-nous</h2>
        <form onSubmit={(e)=>sendOne(e)}>
          <div className="mb-4">
            <label htmlFor="prenom" className="block text-sm font-semibold text-gray-400 mb-1">Prénom</label>
            <input type="text" id="prenom" name="prenom" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-400" value={username} onChange={(e)=>setUsername(e.target.value)}/>
          </div>
          <div className="mb-4">
            <label htmlFor="pays" className="block text-sm font-semibold text-gray-400 mb-1">Email</label>
            <input type="text" id="pays" name="pays" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-400" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-400 mb-1">Laisser un message</label>
            <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-400" onChange={(e)=>setMessage(e.target.value)}>{message}</textarea>
          </div>
          <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md">Envoyer</button>
          <Notifications
        message={`${state? `${err}`:"Succès ! Votre message a ete bien recu."}`}
        show={showNotification} color={`${state? ' bg-red-500':'bg-green-500'}`}
      />
        </form>
       </div>
      <div className=' flex-grow-0'>
      <div className=' flex flex-col'>
        <div className=' bg-white rounded-full p-2 cursor-pointer'><PhoneAndroidIcon/></div>
        <div className=' bg-white rounded-full p-2 cursor-pointer'><FacebookIcon className=' text-blue-500'/></div>
        <div className=' bg-white rounded-full p-2 cursor-pointer'><WhatsAppIcon className=' text-green-500'/></div>
        <div className=' rounded-full p-2 cursor-pointer text-3xl'><InstagramIcon className='  text-red-400'/></div>
        
       </div>
      </div>
      </div>

      {/* Carte à droite */}
      <div className="lg:w-1/2 sm:p-4 sm:mt-8 lg:mt-0">
        <img src={m1} alt="Localisation"  />
      </div>
    </div>
  );
};

export default Contact;
