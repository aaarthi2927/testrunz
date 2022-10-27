import React,{useState}from "react";
import Settings from "../Settings";
import {useNavigate} from 'react-router-dom';
import { MdOutlineNavigateNext,MdSkipPrevious} from 'react-icons/md';
import { BiSkipNext} from 'react-icons/bi';
import {GrFormPrevious} from 'react-icons/gr';
import {RiEdit2Fill} from 'react-icons/ri';
export const datauser=[{name:"xxx",email:"xxx@gmail.com",role:"student",university:"Anna University",
institutename:"Mailam",department:"BEEE",year:"2",state:"tamilnadu",semester:"3",
country:"India",
},

]
export function Manageuser() {
        return (
        <div>
            <Settings/>
            <div>
                <Manageuserdata/>
            </div>
                    </div>
    );
}

export function Manageuserdata() {
  
    const Navigate=useNavigate();
    const user=()=>{
        Navigate("/SettingsNav/Manageuser/:id");
    }
    return (
    <div className="m-5 p-5">
       <div className="text-sm shadow-lg shadow-gray-400 w-full h-full">
            <h3 className="p-5 text-base font-semibold text-black"> List Of User</h3>
                  </div>
                  <div className="bg-gray-100">
     <p className="p-5 text-xs font-thin"> Drag headers here to group by</p>
                                  </div>
 <table className="w-full h-full text-sm font-medium text-gray-900 text-center border border-solid border-current border-collapse ">
    <tr className="border border-x-2 border-solid border-current  " >
     <td className="">Id </td>
     <td className="border border-solid border-current">Name </td>
     <td className="border border-solid border-current">Email </td>
     <td className="border border-solid border-current">Role </td>
     <td className="border border-solid border-current">Country </td>
     <td className="border border-solid border-current">Institute Name</td>
         </tr> 
         
    {
datauser.map(d1=>{
    return(
       <tr className="border border-x-2 border-solid border-current"  onClick={user} >
             <td className="border border-solid border-current">{d1.id}</td>
             <td className="border border-solid border-current">{d1.name}</td>
             <td className="border border-solid border-current">{d1.email}</td>
             <td className="border border-solid border-current">{d1.role}</td>
             <td className="border border-solid border-current">{d1.country}</td>
             <td className="border border-solid border-current">{d1.institutename}</td>
     </tr>
    )
})
    }
      

                       </table>
                     
      <div className="bg-gray-100 w-full h-full  border border-solid border-current flex flex-row justify-end gap-10">
    <div className="p-3 text-xs font-thin float-right "> 
    <MdSkipPrevious className="ml-1"/>
              <div className="float-right flex flex-row gap-10 -mt-5 p-2">
<MdSkipPrevious/>
    <GrFormPrevious/>
        <MdOutlineNavigateNext/>
        <BiSkipNext/>
     </div>
     </div>
                                  </div>

                </div>
);
}

export function UserDatalist(){
    const [data,setData]=useState(datauser)
    return(
        <div>
{
data.map((d1,index)=>(
    <UserData key={d1.index}
    name={d1.name}
    email={d1.email} role={d1.role} university={d1.university}
    institutename={d1.institutename} 
    department={d1.department} year={d1.year} state={d1.state}
     semester={d1.semester}country={d1.country}
    />
))
}
        </div>
    )
}

export function UserData({name,email,role,university,
    institutename,department,year,state,semester,
country}){
    return(
        <div className="m-15 p-10">
     
          <table className="w-full h-full m-5 text-sm  text-gray-400  table-fixed border border-collapse border-solid border-current ">
          <h1 >Manage User</h1>
            <tr>
                <td><h5>Name</h5></td>
                <td><h5>{name}</h5></td>
                <td> <button disabled><RiEdit2Fill/></button></td>
            </tr>
            <tr>
                <td><h5>Email</h5></td>
                <td><h5>{email}</h5></td>
                <td> <button><RiEdit2Fill/></button></td>
            </tr>
  <tr>
                <td><h5>Role</h5></td>
                <td><h5>{role}</h5></td>
                <td> <button><RiEdit2Fill/></button></td>
            </tr>
            
            <tr>
                <td><h5>Institute Name</h5></td>
                <td><h5>{institutename}</h5></td>
                <td> <button><RiEdit2Fill/></button></td>
            </tr>
            
            <tr>
                <td><h5>Department</h5></td>
                <td><h5>{department}</h5></td>
                <td> <button><RiEdit2Fill/></button></td>
            </tr>
            
            <tr>
                <td><h5>Year</h5></td>
                <td><h5>{year}</h5></td>
                <td> <button><RiEdit2Fill/></button></td>
            </tr>
            
            <tr>
                <td><h5>State</h5></td>
                <td><h5>{state}</h5></td>
                <td> <button><RiEdit2Fill/></button></td>
            </tr>
            
            <tr>
                <td><h5>Semester</h5></td>
                <td><h5>{semester}</h5></td>
                <td> <button><RiEdit2Fill/></button></td>
            </tr>
            
            <tr>
                <td><h5>Country</h5></td>
                <td><h5>{country}</h5></td>
                <td> <button className=""><RiEdit2Fill/></button></td>
            </tr>
                      </table>
     
        </div>
    )
}