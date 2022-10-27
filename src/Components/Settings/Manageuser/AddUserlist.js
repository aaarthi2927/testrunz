export function AddUserlist() {
  const Labdata=['BEEE','Computer_Programing','Physics','Chemistry','Workshop']
  return (
    <div>
      <div className="grow mt-5 p-5 border border-solid rounded-lg m-10  w-3/5 h-auto">
        <div>
          <h2 className=" text-base font-semibold text-black">Add User</h2>
          <h2 className="p-1 text-sm 
           text-pink-600 float-right -mt-5  hover:bg-pink-100 hover:shadow-lg hover:shadow-pink-100 hover:rounded">Cancel</h2>
        </div>
        <form>
          <div className="mt-3 flex flex-col gap-1">
           <label className="text-sm  text-gray-500">
            Name:
            <input type="text" name="name"  className="h-8 m-2 
          bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
hover:border-black" required/>
          </label>
          <label className="text-sm text-gray-500">
            Email:
            <input type="text" name="email"   className="h-8 m-2 
          bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
hover:border-black required"/>
          </label>
          <label className="text-sm  text-gray-500">
            University:
            <input type="text" name="University" value="Anna University"  className="h-8 m-2  p-2 text-gray-400
          bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
"  disabled />
          </label>
          <label className="text-sm text-gray-500">
            Institute:
            <input type="text" name="Institute" value="Mailam" className="h-8 m-2 p-2 text-gray-400
          bg-white border border-slate-300 rounded-md text-sm shadow-sm 
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 " disabled/>
          </label>
         
          <label className="text-sm  text-gray-500">
            Department:
            <input type="text" name="Department"  value="Mechanical_Engineering"className="h-8 m-2 p-2 text-gray-400
          bg-white border border-slate-300 rounded-md text-sm shadow-sm 
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
" disabled/>
          </label>
          <label className="text-sm  text-gray-500">
            Role:
       <select  className="h-8 m-2 
          bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
hover:border-black required">
  <option value="student" >student</option>
  <option value="teacher">teacher</option>
</select>
          </label>
          <lable className="text-sm text-gray-500"> Lab:
            <select  className="h-8 m-2 
          bg-white border border-slate-300 rounded-md ttext-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
hover:border-black required">
               {Labdata.map(lb => <option key={lb}>{lb}</option>)}
      </select>
      </lable>
                    <button className="text-sm p-1 w-24  m-4 border border-amber-400 bg-amber-400 rounded text-black  hover:shadow-lg shadow-gray-400">
            Create User
          </button>   </div>
                  </form>
         
     
      </div>
  </div>

  );
}
