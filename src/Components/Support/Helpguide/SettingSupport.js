import React from "react";
import figa_8 from "../../../images/figa_8.png";
export function SettingSupport({ name }) {
  const supportdata = [
    { supportitem: 'Click the settings option' },
    { supportitem: 'In the Manage user section, Admin can able to view/edit/update the list of student/teacher roles /country/ year/semester/access lab sections.' },
    { supportitem: 'Enter the search option in the top right corner, now you can search any one of these: Name/Email/Role/Id/Country/Institute name' },
    { supportitem: 'Now choose the specific user column to be changed and make changes if any changes occur on that account you can able to update and can able to add access lab to that account.' },
    { supportitem: 'Super Admin can edit on Role, country, year, state, semester, and list of labs available for admin' },
  ];
  const supportdata1 = [
    { supportitem: 'Admin can only edit on Role, country, year, state, semester, and list of labs available for teacher' },
    { supportitem: 'Teacher can only edit on Role, country, year, state, semester, and list of labs available for student' },
  ];
  return (
    <div>
      <div className="grow h-14">
        <h2 className="text-lg font-bold text-gray-900">{name}</h2>
        <p className="text-xs text-rose-500 font-bold">*Student has no access to this page*</p>
      </div>
      <ol className="-mt-3">
        {supportdata.map(s1 => {
          return (
            <div>
              <li className="p-2
      list-decimal text-xs text-gray-400 ">{s1.supportitem}</li>
            </div>
          );
        })}
      </ol>
      <ol className="m-0.5">
        {supportdata1.map(s1 => {
          return (
            <div>
              <li className="
       text-xs text-gray-400 p-1">{s1.supportitem}</li>
            </div>
          );
        })}
      </ol>
      <div className="m-20">
        <img src={figa_8} />
      </div>
    </div>
  );
}
