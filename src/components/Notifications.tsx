import React, { FunctionComponent } from 'react';

type NotificationProps={
    message:string, show:boolean, color:any
}

const Notifications:FunctionComponent<NotificationProps> = ({ message, show , color}) => {
  return (
    <div
      className={` ${color} text-white p-4 fixed bottom-0 right-0 m-4 rounded-md shadow-md transform transition-transform ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {message}
    </div>
  );
};

export default Notifications;
