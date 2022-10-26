import React from "react";
import {useNavigate} from 'react-router-dom';

function Support(){
    const Navigate=useNavigate();
    const feedback=()=>{
        Navigate("/SupportNav/Feedback");
    }
    const Helpguide=()=>{
        Navigate("/SupportNav/Helpguide");
    }
    return(
        <div>
         <div className="bg-amber-400 text-end text-black m-12 p-2 flex 
         flex-row gap-12 shadow-lg shadow-gray-400">
  <button onClick={feedback} className="text-sm font-medium text-gray-900">FEEDBACK</button>
  <button onClick={Helpguide} className="text-sm font-medium text-gray-900">HELPGUIDE</button>
  </div>
        </div>
    )
}
export default Support;




