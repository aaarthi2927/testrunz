import React from "react";
import { FaFilter } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { datadetails1 } from "./Mypage";

export function Item1() {
  return (
    <div>
      <table className="w-3/4 h-3/4 m-10 border-4  border-gray-200 border-collapse  ">
        <tr className="border border-solid text-sm font-medium text-gray-900 m-10 p-10 text-center">
          <td className="flex flex-row gap-1">Current Task <FaFilter className="w-10 mt-1" /> <AiOutlineSearch className="w-9 -ml-2 mt-1" /></td>
          <td className="">Assigned To Me </td>
          <td className="">All</td>
        </tr>
        {datadetails1.map(d1 => {
          return (
            <tr className="text-xs border  border-solid  ">
              <td className="text-left">{d1.currenttask}</td>
              <td className="text-red-500 tracking-tighter">{d1.assigned}</td>
              <td>
              <button className="text-white bg-blue-500 p-1 hover:bg-blue-600 hover:text-black">{d1.all}</button></td>
            </tr>
          );
        })}
      </table>

    </div>
  );
}
