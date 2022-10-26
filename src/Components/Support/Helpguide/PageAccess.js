import React from "react";
import { BsArrowUp } from 'react-icons/bs';

export function PageAccess() {
  return (
    <div>
      <div className="m-4 ">
        <div className="grow mt-5 h-14">
          <h2 className="text-lg font-bold text-gray-900">Access Control</h2>
        </div>
        <div className=" ml-18 rounded-md bg-white shadow-gray-200 w-4/4  ">
          <h3 className="text-sm font-medium text-gray-900 p-4">
            Page Access</h3>
          <table class="border-collapse border border-slate-400 p-10 m-10">
            <thead>
              <tr className="flex flex-row  ">
                <th className="border border-slate-300 flex flex-row p-2 cursor-pointer hover:text-slate-600 ">
                  Page
                  <BsArrowUp className="mt-1 text-white hover:text-slate-600" />
                </th>
                <th className="flex flex-row p-2 cursor-pointer border border-slate-300 hover:text-slate-600">
                  Super Admin
                  <BsArrowUp className="mt-1 text-white hover:text-slate-600" />
                </th>
                <th className="flex flex-row p-2 cursor-pointer border border-slate-300 hover:text-slate-600">
                  Admin
                  <BsArrowUp className="mt-1 text-white hover:text-slate-600" />
                </th>
                <th className="flex flex-row p-2 cursor-pointer border border-slate-300 hover:text-slate-600">
                  Teacher
                  <BsArrowUp className="mt-1 text-white hover:text-slate-600" />
                </th>

                <td className="flex flex-row p-2 cursor-pointer border border-slate-300 hover:text-slate-600">
                  Student
                  <BsArrowUp className="mt-1 text-white hover:text-slate-600" />
                </td>
              </tr>
            </thead>
          </table>
        </div>

      </div>
    </div>
  );
}
