import React from "react";
import { Item2 } from "./Item2";
import { Item3 } from "./Item3";
import { Item1 } from "./Item1";
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

