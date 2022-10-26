import React from "react";
import figs_7 from '../../../images/figs_7.png';
import editpro from '../../../images/editpro.png';
export function ProcedureSupport({ name }) {
  const proceduredata = [
    { procedureitem: 'Teacher and Student: The procedure page displays the list of experiments that can be accessed by the User.' },
    { procedureitem: 'Super Admin, Admin: The procedure page displays the list of experiments that can be accessed by the user, Super admin has access to each procedure where they can edit the existing procedure or they can create a new procedure.' },
  ];
  return (
    <div>
      <div className="grow h-14">
        <h2 className="text-lg font-bold text-gray-900">{name}</h2>
        <p className="text-xs text-rose-500 font-bold">*Only Super Admin/Admin has access to create and edit procedure*</p>
      </div>
      <div>
        <ol className="mt-1">
          {proceduredata.map(r2 => {
            return (
              <div>
                <li className="p-2
      list-decimal text-xs text-gray-400 ">{r2.procedureitem}</li>
              </div>
            );
          })}
        </ol>
        <div className="m-20">
          <img src={figs_7} />
        </div>
        <div className="m-20">
          <img src={editpro} />
        </div>
      </div>

    </div>
  );
}
