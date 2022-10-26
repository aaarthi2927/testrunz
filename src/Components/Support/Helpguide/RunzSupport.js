import React from "react";
import figs_5 from "../../../images/figs_5.png";
import figs_6 from "../../../images/figs_6.png";

export function RunzSupport({ name }) {
  const Runzdata1 = [
    { runzitem: 'Users can search experiments with respect to their Id/Procedure name/Lab name/Description/Assigned by/time using the search input tag.' },
  ];
  const Runzdata2 = [
    { runzitem: 'Click the *+*option in the top right corner of the runz table, which opens the Add Runz modal.' },
    { runzitem: 'Enter the Experiment description and select the Lab type, Procedure name also in the given options.' },
    { runzitem: 'Click the save button to create a runz.' }
  ];
  return (
    <div>
      <div className="grow h-14">
        <h2 className="text-lg font-bold text-gray-900">{name}</h2>
      </div>
      <div>
        <ol className="-mt-5">
          {Runzdata1.map(r1 => {
            return (
              <div>
                <li className="p-2
      list-decimal text-xs text-gray-400 ">{r1.runzitem}</li>
              </div>
            );
          })}
        </ol>
        <div className="m-20">
          <img src={figs_5} />
        </div>
        <ol className="mt-5">
          {Runzdata2.map(r2 => {
            return (
              <div>
                <li className="p-2
      list-decimal text-xs text-gray-400 ">{r2.runzitem}</li>
              </div>
            );
          })}
        </ol>
        <div className="m-20">
          <img src={figs_6} />
        </div>
      </div>

    </div>
  );
}
