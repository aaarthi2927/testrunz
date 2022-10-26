import React from "react";
import figs_3 from '../../../images/figs_3.png';
import figs_4 from '../../../images/figs_4.png';
export function MypageSupport({ name }) {
  const pagedata = [
    { pageitem: 'A list of experiments will be shown' },
    { pageitem: 'Users can search experiments with respect to their Id/Procedure name/Lab name/Status/Submitted by/Submitted time using the search input tag.' },
    { pageitem: 'On clicking the experiment, the user can see the content and values in the tabular column , which the sender fills.' }
  ];
  return (
    <div>
      <div className="grow h-14">
        <h2 className="text-lg font-bold text-gray-900">{name}</h2>
      </div>
      <ol className="-mt-5">
        {pagedata.map(p1 => {
          return (
            <div>
              <li className="p-2
      list-decimal text-xs text-gray-400 ">{p1.pageitem}</li>
            </div>
          );
        })}
      </ol>
      <div className="m-20">
        <img src={figs_3} />
      </div>
      <div className="m-20">
        <img src={figs_4} />
      </div>
    </div>
  );
}
