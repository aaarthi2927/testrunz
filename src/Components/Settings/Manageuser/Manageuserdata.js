import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { MdOutlineNavigateNext, MdSkipPrevious } from 'react-icons/md';
import { BiSkipNext } from 'react-icons/bi';
import { GrFormPrevious } from 'react-icons/gr';
import { IoIosAdd } from 'react-icons/io';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { datauser } from "./Manageuser";
export const row=['5','10','15'];
export function Manageuserdata() {
    const [data, setData] = useState(datauser);
    const [clearmes, setClearmes] = useState('');
    const Navigate = useNavigate();
    const user = () => {
        Navigate("/SettingsNav/Manageuser/:id");
    };
    const useradd = () => {
        Navigate("/SettingsNav/Manageuser/adduser");
    };
   
    return (
        <div className="m-5 p-5">
            <div className="text-sm shadow-sm shadow-gray-400 w-full h-full">
                <h3 className="p-5 text-base font-semibold text-black"> List Of User</h3>
                <div className="flex flex-row justify-end p-1 -mt-10">
                    <div className="flex flex-col ">
                    <div className="flex flex-row gap-0.5 " >
                    <AiOutlineSearch />
                    <input className="focus:outline-none " placeholder="Search"/>
                  <AiOutlineClose className="text-gray-400" /> 
                  </div>
                 <div className="w-48 h-0.5 text-gray-800 border"></div>
                 </div>
                  <button onClick={useradd} className="text-black ml-5 -mt-2 p-2 hover:bg-gray-100 rounded-md">Assign </button>
                            </div>
            </div>
            
            <table className="w-full h-full text-sm font-medium text-gray-900 text-center border border-solid border-current border-collapse ">
              <tr className="border  border-solid border-current">
              <td className="border border-solid border-current">Id </td>
               <td className="border border-solid border-current">Name </td>
                    <td className="border border-solid border-current">Email </td>
                    <td className="border border-solid border-current">Role </td>
                    <td className="border border-solid border-current">Country </td>
                    <td className="border border-solid border-current">Institute Name</td>
                </tr>
                {data.map(d1 => {
                    return (
                        <tr className="text-sm  hover:bg-gray-200 " onClick={user}>
                            <td className="border-r-2 border-solid border-current">{d1.id}</td>
                            <td className="border-r-2 border-solid border-current">{d1.name}</td>
                            <td className="border-r-2 border-solid border-current">{d1.email}</td>
                            <td className="border-r-2 border-solid border-current ">{d1.role}</td>
                            <td className="border-r-2 border-solid border-current  ">{d1.country}</td>
                            <td className="border-r-2 border-solid border-current ">{d1.institutename}</td>
                        </tr>
                    );
                })}
            </table>

            <div className="bg-gray-100 w-full h-full  border border-solid border-current flex flex-row justify-end gap-10">
                <div className="p-4 text-xs font-thin float-right ">
               <select className="-m-14">
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