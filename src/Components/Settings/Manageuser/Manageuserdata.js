import React, { useContext, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { MdOutlineNavigateNext, MdSkipPrevious } from 'react-icons/md';
import { BiSkipNext } from 'react-icons/bi';
import { GrFormPrevious } from 'react-icons/gr';
import { IoIosAdd } from 'react-icons/io';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { datauser } from "./datauser";
import { AppContext } from "../../../App";
export const row=['5','10','15'];
export function Manageuserdata() {
     const {data}=useContext(AppContext);
               const Navigate = useNavigate();
    const user = () => {
        Navigate(`/SettingsNav/Manageuser/{index}`);
    };
    const useradd = () => {
        Navigate("/SettingsNav/Manageuser/adduser");
    };
    const tableData = data.map((d1,index) => {
        return(
            <tr className="text-xs text-gray-500 hover:bg-gray-200 " onClick={user} key={d1.index}>
       <td className="border-r-2 border-solid border-current">{index+1}</td>
          <td className="border-r-2 border-solid border-current">{d1.email}</td>
        <td className="border-r-2 border-solid border-current ">{d1.role}</td>
       <td className="border-r-2 border-solid border-current  ">{d1.country}</td>
       <td className="border-r-2 border-solid border-current ">{d1.institutename}</td>  
                      </tr>
        )
       });


      return (
        <div className="m-5 p-5">
            <div className="text-sm shadow-sm shadow-gray-400 w-full h-full">
                <h3 className="p-5 
                text-sm font-medium text-gray-900
                "> List of User</h3>
                <div className="flex flex-row justify-end p-1 -mt-10">
                    <div className="flex flex-col ">
                    <div className="flex flex-row gap-0.5 " >
                    <AiOutlineSearch />
                    <input className="focus:outline-none " placeholder="Search"/>
                  <AiOutlineClose className="text-gray-400"/> 
                  </div>
                 <div className="w-48 h-0.5 text-gray-800 border"></div>
                 </div>
                  <button onClick={useradd} className="text-black ml-5 -mt-2 p-2 hover:bg-gray-100 rounded-md">Assign </button>
                            </div>
            </div>
                        <table className="w-full h-full  text-center border border-solid border-current border-collapse ">
             <thead>
              <tr className="border  border-solid border-current text-sm font-medium text-gray-900">
              <th className="border border-solid border-current">Id </th>
               <th className="border border-solid border-current">Name </th>
                    <th className="border border-solid border-current">Email </th>
                    <th className="border border-solid border-current">Role </th>
                    <th className="border border-solid border-current">Country </th>
                    <th className="border border-solid border-current">Institute Name</th>
                </tr>
                </thead>
                <tbody>
                {tableData}
                </tbody>
             
            </table>

            <div className="bg-gray-100 w-full h-full
                border border-gray-200 
                           flex flex-row justify-end gap-10">
                <div className="p-4 text-xs font-thin float-right ">
               <select className="-m-14 border border-gray-200 bg-gray-50">
                    <option value="10" className=" text-sm hover:bg-gray-100">10 rows</option>
                    <option value="15" className="text-sm hover:bg-gray-100">15 rows</option>
                    <option value="20" className=" text-sm hover:bg-gray-100">20 rows</option>
                </select>
                 
              
              <div className=" flex flex-row gap-5 ml-2 -mt-5 p-2">
                        <MdSkipPrevious />
                        <GrFormPrevious />
                        <p>1-1 of 1</p>
                        <MdOutlineNavigateNext />
                        <BiSkipNext />
                    </div>
                </div>
            </div>

        </div>
    );
}
