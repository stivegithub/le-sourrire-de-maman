/* eslint-disable jsx-a11y/alt-text */
// LoginForm.tsx

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import img2 from '../../../src/images/quiz.png';
import img3 from '../../../src/images/setting.png';



const LoginForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ajoutez ici la logique pour traiter le formulaire de connexion
    console.log('Formulaire soumis:', { firstName, email, password });
  };

  return (
   <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <div className="flex items-center justify-center mb-6">
        <div><img src={img2}/></div>
        </div>
        <h1 className="text-2xl font-bold mb-4">Creation de compte</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Prénom
            </label>
            <input
              type="text"
              id="firstName"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              <FontAwesomeIcon icon={faLock} className="mr-2" />
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            
            className="flex gap-1 bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 float-right"
          >
        <img src={img3} alt="" width={30} height={30}  className="rotate-infinite hover:rotate-0 transform origin-center transition-transform duration-500 ease-in-out" />    <div>Creer son compte</div>
          </div>
        </form>
      </div>
    </div>
   </>
  );
};

export default LoginForm;
