import React, { FunctionComponent, useState, useEffect } from 'react';
import { AccountCircleRounded, DehazeRounded } from '@mui/icons-material';
import  { useWith } from '../tools/dimension';
import ClearIcon from '@mui/icons-material/Clear';

type NavbarProps={
  images:any
}

const Navbar: FunctionComponent<NavbarProps> = ({images}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const widt=useWith()
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const nav = ['Accueil', 'A propos', 'Divertissement', 'Contact'];

  useEffect(() => {
    // Fermer le sidebar lorsqu'on passe d'un grand écran à un petit écran
    if (widt > 768) {
      setSidebarOpen(false);
    }
  }, [widt]);

  return (
    <div className="fixed w-screen top-0 z-50 bg-gray-50">

      <div className="flex lg:flex-row flex-col justify-between sm:px-7 px-3 py-1 text-lg bg-gray-50">
        
        {widt <= 768 ? (
          // Afficher le menu déroulant sur les petits écrans
      <div className=' flex justify-between'>
          <div className="flex items-center">
          <img src={images} alt="" width="70px" height="30px" />
        </div>
          <div className=" flex items-center">
{       isSidebarOpen? <ClearIcon className="text-4xl cursor-pointer" onClick={toggleSidebar} />:     <DehazeRounded className="text-4xl cursor-pointer" onClick={toggleSidebar} />
}          </div>
      </div>
        ) : (
          // Afficher les liens de navigation sur les grands écrans
         <>
         <div className="flex items-center">
          <img src={images} alt="" width="70px" height="30px" />
        </div>
          <div className="flex gap-4">
            {nav.map((nave) => (
              <div
                key={nave}
                className="cursor-pointer hover:text-blue-700 hover:bg-white p-2 rounded-lg hover:border-blue-400 hover:border-b-2"
              >
                {nave}
              </div>
            ))}
          </div>
           <div className="text-black">
           <AccountCircleRounded className="text-7xl" />
         </div>
         </>
        )}
       
      </div>
      {/* Sidebar pour les petits écrans */}
      {widt <= 768 && isSidebarOpen && (
        <div className="bg-gray-50 p-4">
          
          <div className="flex flex-col gap-4">
            {nav.map((nave) => (
              <div key={nave} className="cursor-pointer hover:bg-white">
                {nave}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
