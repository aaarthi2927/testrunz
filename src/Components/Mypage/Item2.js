import React from "react";
import { datadetails2 } from "./Mypage";



export function Item2() {
  return (
    <div>
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
          );
        })}
      </table>

    </div>
  );
}
