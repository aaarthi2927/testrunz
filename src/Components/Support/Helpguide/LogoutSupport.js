import React from "react";
import figlo from '../../../images/figlo.png';
export function LogoutSupport({ name }) {
  const logoutdata = [
    { logoutuseritem: 'Click on the LOGOUT button in the top right corner.' },
  ];
  return (
    <div>
      <div className="grow h-14">
        <h2 className="text-lg font-bold text-gray-900">{name}</h2>
      </div>
      <h2 className="-mt-8 text-xs text-gray-400">You can log out of the system as follows </h2>
      <ol>
        {logoutdata.map(a1 => {
          return (
            <div>
              <li className="p-2
      list-decimal text-xs text-gray-400 ">{a1.logoutuseritem}</li>
            </div>
          );
        })}
      </ol>
      <div className="m-20">
   <img src={figlo}/>
   </div>
  
    </div>
  );
}
