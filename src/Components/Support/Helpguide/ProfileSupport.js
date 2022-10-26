import React from "react";
import figs_2 from "../../../images/figs_2.png";
export function ProfileSupport({ name }) {
  const profiledata = [
    { profileitem: 'A list of experiments will be shown' },
    { profileitem: 'Users can search experiments with respect to their Id/Procedure name/Lab name/Status/Submitted by/Submitted time using the search input tag.' },
    { profileitem: 'On clicking the experiment, the user can see the content and values in the tabular column , which the sender fills.' }
  ];
  return (
    <div>
      <div className="grow h-14">
        <h2 className="text-lg font-bold text-gray-900">{name}</h2>
      </div>
      <ol className="-mt-5">
        {profiledata.map(p1 => {
          return (
            <div>
              <li className="p-2
      list-decimal text-xs text-gray-400 ">{p1.profileitem}</li>
            </div>
          );
        })}
      </ol>
      <div className="m-20">
        <img src={figs_2} />
      </div>
    </div>

  );
}
