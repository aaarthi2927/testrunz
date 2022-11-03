import {useNavigate, useParams} from 'react-router-dom';
import { useState} from 'react';
import { useDispatch } from 'react-redux';
import * as userActions from '../../store/action/user';
export function AddUserlist() {
  const Navigate = useNavigate();
  const dispatch=useDispatch(); 
const [user,setUser]=useState({
  id:"",
  name:"",email:"",university:"Anna University",department:"Mechanical_Engineering",institute:"Mailam",
  role:"",lab:""

})
const inputHandler=(event)=>{
const {name,value}=event.target;
console.log(name,value)
setUser((previtem)=>{
  return{
    ...previtem,
    [name]:value,
 }
})
}

const addUser=()=>{
dispatch(userActions.addUser(user))
setUser({
  id:"",
  name:"",email:"",university:"",department:"",institute:"",
  role:"",lab:"",

})
Navigate("/SettingsNav/Manageuser");

}

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
hover:border-black"  onChange={inputHandler} value={user.name} required/>
          </label>
          <label className="text-xs text-slate-700">
            Email:
            <input type="text" name="email"   className="h-8 m-2 
          bg-white border border-slate-300 rounded-md text-sx shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
hover:border-black" onChange={inputHandler} value={user.email} required/>
          </label>
          <label className="text-xs text-slate-700">
            University:
            <input type="text" name="University" className="h-8 m-2  p-2 text-gray-400
          bg-white border border-slate-300 rounded-md text-sx shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
"onChange={inputHandler} value={user.university}/>
          </label>
          <label className="text-xs text-slate-700">
            Institute:
            <input type="text" name="Institute"  className="h-8 m-2 p-2 text-gray-400
          bg-white border border-slate-300 rounded-md text-sx shadow-sm 
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 " onChange={inputHandler} value={user.institute} disabled/>
          </label>
           <label className="text-xs text-slate-700">
            Department:
            <input type="text" name="Department" className="h-8 m-2 p-2 text-gray-400
          bg-white border border-slate-300 rounded-md text-sx shadow-sm 
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
" onChange={inputHandler} value={user.department} disabled />
          </label>
          <label className="text-xs text-slate-700">
            Role:
       <select  className="h-8 m-2 
          text-black bg-gray-100 border border-slate-300 rounded-md text-sx placeholder-slate-400
            focus:outline-none 
  hover:bg-gray-100 hover:shadow-lg hover:shadow-white focus:border-sky-500 "  required >
  <option selected  hidden></option>
<option >Teacher</option>
<option >Student</option>
</select>
          </label>
          <lable className="text-xs text-slate-700"> Lab:
            <select className="h-8 m-2 
          text-black bg-gray-100 border border-slate-300 rounded-md text-sx placeholder-slate-400
            focus:outline-none 
  hover:shadow-lg hover:shadow-white focus:border-sky-500 ">
  
               {Labdata.map(lb => <option key={lb}>{lb}</option>)}
      </select>
      </lable>
      <button type="button" className="text-sm p-1 w-24  m-4 border border-amber-400 bg-amber-400 rounded text-black  hover:shadow-lg shadow-gray-400"
             onClick={addUser}>
            Create User
          </button>   </div>
                  </form>
               </div>
  </div>

  );
}
