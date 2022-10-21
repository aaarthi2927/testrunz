import React from "react";
import {useNavigate} from 'react-router-dom';

function Settings(){
    const Navigate=useNavigate();
    const activity=()=>{
        Navigate("/SettingsNav/Activity");
    }
    const manageuser=()=>{
        Navigate("/SettingsNav/Manageuser");
    }
    return(
        <div>
         <div className="bg-amber-400 text-end text-black m-12 p-2 flex 
         flex-row gap-12 shadow-lg shadow-gray-400">
  <button onClick={manageuser} className="text-sm font-medium text-gray-900">MANAGE USER</button>
  <button onClick={activity} className="text-sm font-medium text-gray-900">ACTIVITY</button>
  </div>

        </div>
    )
}
export default Settings;

