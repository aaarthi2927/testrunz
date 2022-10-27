import { RiEdit2Fill } from 'react-icons/ri';


export function UserData({ name, email, role, university, institutename, department, year, state, semester, country }) {
    return (
        <div className="m-15 p-10">
            <table className="grow  p-10 border border-slate-900   border-solid  rounded-lg m-10  w-3/5 h-auto shadow-lg shadow-slate-800">
                     <div className='p-5'>
          <h2 className="text-lg font-bold text-gray-900">Manage User</h2>
          <div className='float-right -mt-7 -mr-60 p-1 '> 
 <h2 className="text-xs text-pink-600  bg-white rounded hover:bg-pink-100 shadow-lg shadow-pink-100" >
 Close
            </h2>
            </div>
        </div>
                <tr >
                    <td><h5 className="p-2 text-xs text-stone-500">Name</h5></td>
                    <td><h5 className="text-xs text-stone-500">{name}</h5></td>
                    <td> <button disabled className="text-xs text-gray-400"><RiEdit2Fill /></button></td>
                </tr>
                <tr>
                    <td><h5 className="p-2 text-xs text-stone-500">Email</h5></td>
                    <td><h5 className="text-xs text-stone-500">{email}</h5></td>
                    <td><button disabled className="text-xs text-gray-400"><RiEdit2Fill /></button></td>
                </tr>
                <tr>
                    <td><h5 className="p-2 text-xs text-stone-500">Role</h5></td>
                    <td><h5 className="text-xs text-stone-500">{role}</h5></td>
                    <td> <button className="text-xs"><RiEdit2Fill /></button></td>
                </tr>

                <tr>
                    <td><h5 className="p-2 text-xs text-stone-500">University</h5></td>
                    <td><h5 className="text-xs text-stone-500">{university}</h5></td>
                    <td> <button disabled className="text-xs text-gray-400"><RiEdit2Fill /></button></td>
                </tr>
                <tr>
                    <td><h5 className="p-2 text-xs text-stone-500">Institute Name</h5></td>
                    <td><h5 className="text-xs text-stone-500">{institutename}</h5></td>
                    <td> <button disabled className="text-xs text-gray-400"><RiEdit2Fill /></button></td>
                </tr>

                <tr>
                    <td><h5 className="p-2 text-xs text-stone-500">Department</h5></td>
                    <td><h5 className="text-xs text-stone-500">{department}</h5></td>
                    <td> <button disabled className="text-xs text-gray-400"><RiEdit2Fill /></button></td>
                </tr>
                <tr>
                    <td><h5 className="p-2 text-xs text-stone-500">Country</h5></td>
                    <td><h5 className="text-xs text-stone-500">{country}</h5></td>
                    <td> <button className="text-xs"><RiEdit2Fill /></button></td>
                </tr>
                <tr>
                    <td><h5 className="p-2 text-xs text-stone-500">Year</h5></td>
                    <td><h5 className="text-xs text-stone-500">{year}</h5></td>
                    <td> <button className="text-xs"><RiEdit2Fill /></button></td>
                </tr>

                <tr>
                    <td><h5 className="p-2 text-xs text-stone-500">State</h5></td>
                    <td><h5 className="text-xs text-stone-500">{state}</h5></td>
                    <td> <button className="text-xs"><RiEdit2Fill /></button></td>
                </tr>

                <tr>
                    <td><h5 className="p-2 text-xs text-stone-500">Semester</h5></td>
                    <td><h5 className="text-xs text-stone-500">{semester}</h5></td>
                    <td> <button className="text-xs"><RiEdit2Fill /></button></td>
                </tr>
            </table>

        </div>
    );
}

