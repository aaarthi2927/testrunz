import React from "react";
import Support from "./Support";
import {BsArrowUp} from 'react-icons/bs';

export function HelpGuide() {
    return (
        <div>
        <Support/>
        <div className="m-14  bg-gray-100 w-11/12 h-full rounded-md">
        <div className="flex ">
  <div className="w-5/6 border border-solid h-full">
  <div>
       <div className="p-5" >
       <h2 className="text-3xl font-light ont-sans
       text-gray-500" >
        Welcome to the TestRunz Documentation</h2>
        <h5 className="p-2 font-normal text-xl mt-5 text-gray-500">Find the guides, sample images, and references
             you need to use, calculate data,
             and study experiment on the testrunz platform.</h5>
       <div className="m-20"><img src="data:image/png;base64,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"/>
       </div>
       </div>
       <div>
        <div className="m-4 ">
        <div className="grow mt-5 h-14">
            <h2 className="text-lg font-bold text-gray-900">Access Control</h2>
          </div>
        <div className=" ml-18 rounded-md bg-white shadow-gray-200 w-4/4  ">
        <h3  className="text-sm font-medium text-gray-900 p-4">
            Page Access</h3>
            <table class="border-collapse border border-slate-400 p-10 m-10">
<thead>
<tr className="flex flex-row  " >
  <th className="border border-slate-300 flex flex-row p-2 cursor-pointer hover:text-slate-600 ">
        Page
    <BsArrowUp className="mt-1 text-white hover:text-slate-600"/>
    </th>
    <th className="flex flex-row p-2 cursor-pointer border border-slate-300 hover:text-slate-600">
    Super Admin
    <BsArrowUp className="mt-1 text-white hover:text-slate-600"/>
    </th>
    <th className="flex flex-row p-2 cursor-pointer border border-slate-300 hover:text-slate-600">
    Admin
    <BsArrowUp className="mt-1 text-white hover:text-slate-600"/>
    </th>
    <th className="flex flex-row p-2 cursor-pointer border border-slate-300 hover:text-slate-600">
    Teacher
    <BsArrowUp className="mt-1 text-white hover:text-slate-600"/>
    </th>
                
    <td className="flex flex-row p-2 cursor-pointer border border-slate-300 hover:text-slate-600">
        Student 
        <BsArrowUp className="mt-1 text-white hover:text-slate-600"/>
        </td>
</tr>
</thead>
</table>
          

           </div>  
        </div>
       </div>
       </div>

  </div>
  <div className="w-1/6">
    <div className="fixed w-36 h-1/2 border border-solid border-b-8 ">
<h3 className="p-3 hover:bg-slate-50 text-xs text-slate-600" >Contents :</h3>
<div class="w-30 h-1 bg-slate-300"></div>
<h3 className="p-2 hover:bg-slate-50 text-xs text-slate-600" id="signup">Sign Up</h3>
<h3 className="p-2 hover:bg-slate-50 text-xs text-slate-600">Edit Profile</h3>
<h3 className="p-2 hover:bg-slate-50 text-xs text-slate-600">My Page</h3>
<h3 className="p-2 hover:bg-slate-50 text-xs text-slate-600">Procedure</h3>
<h3 className="p-2 hover:bg-slate-50 text-xs text-slate-600">Add User</h3>
<h3 className="p-2 hover:bg-slate-50 text-xs text-slate-600">Support</h3>
<h3 className="p-2 hover:bg-slate-50 text-xs text-slate-600">Setting</h3>
<h3 className="p-2 hover:bg-slate-50 text-xs text-slate-600">Logout</h3>
    </div>
  </div>
</div>
</div>
        </div>
    );
}


