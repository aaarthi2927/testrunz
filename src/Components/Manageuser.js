import React from "react";
import Settings from "./Settings";
import { MdOutlineNavigateNext,MdSkipPrevious} from 'react-icons/md';
import { BiSkipNext} from 'react-icons/bi';

import {GrFormPrevious} from 'react-icons/gr';
export function Manageuser() {
        return (
        <div>
            <Settings/>
            <div>
                <Manageuserdata/>
            </div>
                    </div>
    );
}

export function Manageuserdata() {
    return (
    <div className="m-5 p-5">
       <div className="text-sm shadow-lg shadow-gray-400 w-full h-full">
            <h3 className="p-5 text-base font-semibold text-black"> List Of User</h3>
                  </div>
                  <div className="bg-gray-100">
     <p className="p-5 text-xs font-thin"> Drag headers here to group by</p>
                                  </div>
 <table className="w-full h-full text-sm font-medium text-gray-900 text-center border border-solid border-current">
                                   <tr >
     <td>Id </td>
     <td>Name </td>
     <td>Email </td>
     <td>Role </td>
     <td>Country </td>
     <td>Institute Name</td>
                  </tr>    
                  
                  
                  <tr >
     <td className=""></td>
     <td></td>
     <td> </td>
     <td></td>
     <td> </td>
     <td></td>
                  </tr> 
             </table>
      <div className="bg-gray-100 w-full h-full  border border-solid border-current flex flex-row justify-end gap-10">
    <div className="p-3 text-xs font-thin float-right "> 
    <MdSkipPrevious className="ml-1"/>
              <div className="float-right flex flex-row gap-10 -mt-5 p-2">
<MdSkipPrevious/>
    <GrFormPrevious/>
        <MdOutlineNavigateNext/>
        <BiSkipNext/>
     </div>
     </div>
                                  </div>

                </div>
);
}
