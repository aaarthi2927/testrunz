import {useNavigate, useParams} from 'react-router-dom';
import {useContext, useState} from 'react';
import { AppContext } from '../../../App';
export function AddUserlist() {
  const {data,setData}=useContext(AppContext);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [university,setUniversity]=useState("");
  const [institute,setInstitute]=useState("");
  const [department,setDepartment]=useState("");
  const [role,setRole]=useState("");
  const [lab,setLab]=useState("");
  const Labdata=['','BEEE','Computer_Programing','Physics','Chemistry','Workshop']
  const navigate=useNavigate();
     return (
    <div>
      <div className="grow mt-3 p-5 border border-solid rounded-lg m-10  w-2/4 h-auto">
        <div>
          <h2 className=" text-sm font-medium text-gray-900 italic">Add User</h2>
          <h2 className="p-1 text-sm 
           text-pink-600 float-right -mt-5 
            hover:bg-pink-100 hover:shadow-lg
             hover:shadow-pink-100 hover:rounded" 
             onClick={() => navigate(-1)}>Cancel</h2>
        </div>
        <form>
          <div className="mt-3 flex flex-col gap-0.5">
           <label className="text-xs  text-slate-700">
            Name:
<input type="text" name="name"  className="h-8 m-2 
          bg-white border border-slate-300 rounded-md text-sx shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
hover:border-black" onChange={(event)=>setName(event.target.value)} required/>
          </label>
          <label className="text-xs text-slate-700">
            Email:
            <input type="text" name="email"   className="h-8 m-2 
          bg-white border border-slate-300 rounded-md text-sx shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
hover:border-black" onChange={(event)=>setEmail(event.target.value)} required/>
          </label>
          <label className="text-xs text-slate-700">
            University:
            <input type="text" name="University" value="Anna University"  className="h-8 m-2  p-2 text-gray-400
          bg-white border border-slate-300 rounded-md text-sx shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
" disabled onChange={(event)=>setUniversity(event.target.value)} />
          </label>
          <label className="text-xs text-slate-700">
            Institute:
            <input type="text" name="Institute" value="Mailam" className="h-8 m-2 p-2 text-gray-400
          bg-white border border-slate-300 rounded-md text-sx shadow-sm 
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 " onChange={(event)=>setInstitute(event.target.value)} disabled/>
          </label>
         
          <label className="text-xs text-slate-700">
            Department:
            <input type="text" name="Department"  value="Mechanical_Engineering"className="h-8 m-2 p-2 text-gray-400
          bg-white border border-slate-300 rounded-md text-sx shadow-sm 
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
" disabled onChange={(event)=>setDepartment(event.target.value)}/>
          </label>
          <label className="text-xs text-slate-700">
            Role:
       <select  className="h-8 m-2 
          text-black bg-gray-100 border border-slate-300 rounded-md text-sx placeholder-slate-400
            focus:outline-none 
  hover:bg-gray-100 hover:shadow-lg hover:shadow-white focus:border-sky-500 "  required onChange={(event)=>setRole(event.target.value)}>
  <option value="" selected disabled hidden></option>
<option >Teacher</option>
<option >Student</option>
</select>
          </label>
          <lable className="text-xs text-slate-700"> Lab:
            <select className="h-8 m-2 
          text-black bg-gray-100 border border-slate-300 rounded-md text-sx placeholder-slate-400
            focus:outline-none 
  hover:shadow-lg hover:shadow-white focus:border-sky-500 " required onChange={(event)=>setLab(event.target.value)}>
  
               {Labdata.map(lb => <option key={lb}>{lb}</option>)}
      </select>
      </lable>
      <button className="text-sm p-1 w-24  m-4 border border-amber-400 bg-amber-400 rounded text-black  hover:shadow-lg shadow-gray-400"
             onClick={
()=>{
    const newdata={
             name:name,
        email:email,
        university:university,
institute:institute,
department:department,
lab:lab,
role:role,
 };
 setData([...data,newdata]);
 navigate("/SettingsNav/Manageuser");
}
          }>
            Create User
          </button>   </div>
                  </form>
               </div>
  </div>

  );
}
