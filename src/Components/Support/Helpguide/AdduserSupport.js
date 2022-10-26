import React from "react";
import figs_8 from '../../../images/figs_8.png';

export function AdduserSupport({ name }) {
  const adduserdata = [
    { adduseritem: 'User can create accounts for other user in Add user tab.' },
    { adduseritem: 'User should Enter the other user name and email address to whom they want to create account and select the role.' },
    { adduseritem: 'Finally, click the create user Button' },
  ];
  return (
    <div>
      <div className="grow h-14">
        <h2 className="text-lg font-bold text-gray-900">{name}</h2>
      </div>
      <ol className="-mt-5">
        {adduserdata.map(a1 => {
          return (
            <div>
              <li className="p-2
      list-decimal text-xs text-gray-400 ">{a1.adduseritem}</li>
            </div>
          );
        })}
      </ol>
      <div className="m-20">
        <img src={figs_8} />
      </div>
    </div>
  );
}
