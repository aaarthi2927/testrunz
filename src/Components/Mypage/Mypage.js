import React from "react";
import {FaFilter} from 'react-icons/fa';
import {AiOutlineSearch} from 'react-icons/ai';
export const datadetails1=[{
  currenttask:"Experiment design",
  assigned:"Due date 07/10/2019(overdue)",
  all:"In progress",
 },
 {
  currenttask:"Sampling biological material",
  assigned:"Due date 06/01/2019(overdue)",
  all:"In progress",
},
{
  currenttask:"RAN isolation",
  assigned:"Due date 08/15/2019(overdue)",
  all:"In progress",
},
{
  currenttask:"RAN quality & RAN quality BIOANALYSER",
  assigned:"Due date 06/29/2019(overdue)",
  all:"In progress",
},
];

export const datadetails2=[{
  work:"Bala's test run 1-lee's disc",
   task:"task",
  date:"01/03/2022 12:19",
  },{
   work:"Bala's test run 1-lee's disc",
   task:"task",
  date:"01/03/2022 12:19",
 },
 {
   work:"Bala's test run 1-lee's disc",
   task:"task",
  date:"01/03/2022 12:19",
 },
 {
   work:"Bala's test run 1-lee's disc",
   task:"task",
  date:"01/03/2022 12:19",
 },
 ];

export default function Mypage() {
     return(
        <div className="m-5 p-5">
         <h3 className=' text-base font-semibold text-black'>My Page</h3>
         <div>
    <Item1/>
  <Item2/>
  <Item3/>
                 </div>
        </div>
          )
}
export function Item1(){
  return(
<div>
<table className="w-3/4 h-3/4 text-sm font-medium text-gray-900 m-10 p-10 text-center border-4  border-gray-200 border-collapse  ">
                <tr className="border border-solid ">
                    <td className="flex flex-row gap-1">Current Task <FaFilter className="w-10 mt-1"/> <AiOutlineSearch className="w-9 -ml-2 mt-1"/></td>
                    <td className="">Assigned To Me </td>
                    <td className="">All</td>
                </tr>
                {datadetails1.map(d1 => {
                    return (
                        <tr className="text-xs border  border-solid  ">
                            <td className="text-left">{d1.currenttask}</td>
                            <td className="text-red-400 font-thin text-xs tracking-tighter">{d1.assigned}</td>
                            <td><button className="text-white bg-blue-600 p-1" >{d1.all}</button></td>
                      </tr>
                    );
                })}
                </table>

  </div>
  )
  }

  
export function Item2() {
  return (
<div >
<table className="w-3/4 h-3/4 text-sm font-medium text-gray-900 m-10 p-10 text-center border-8  border-gray-200 border-collapse ">
<tr className="border border-solid ">
 <td className="text-black text-sm"> Recent Work </td>
  <td className="text-gray-400 hover:text-black">All</td>
  <td className="text-gray-400  hover:text-black">Projects</td>
  <td className="text-gray-400  hover:text-black">Inventories</td>
  <td className="text-gray-400  hover:text-black">Protocols</td>
  <td className="text-gray-400  hover:text-black">Reports</td>
                </tr>

    {datadetails2.map(d2 => {
                    return (
                        <tr className="text-xs border  border-solid  ">
                            <td className="text-left ">{d2.work}</td>
                            <td></td>
                            <td></td>
                            <td className="text-gray-400 font-thin text-xs tracking-tighter">{d2.task}</td>
                            <td>{d2.date}</td>
                            <td></td>
                      </tr>
                    )})}
</table>

</div>
  );
}
export function Item3() {
  return (
<div className="w-3/4 h-3/4 m-10 max-h-full bg-stone-100 shadow-md shadow-neutral-300 text-sm font-medium text-gray-900 ">

<h3 className="p-2">Notifications</h3>
<div className="p-10">

</div>
</div>
  );
}