import React from "react";
import figs_9 from "../../../images/figs_9.png";

export function SSupport({ name }) {
  const supportdata = [
    { supportitem: 'User can give their feedback here.' },
    { supportitem: 'User can list the bugs or features or even in their comments in the input tag and specify the feedback category.' },
    { supportitem: 'User also can upload the image more specifically.' },
  ];
  return (
    <div>
      <div className="grow h-14">
        <h2 className="text-lg font-bold text-gray-900">{name}</h2>
      </div>
      <ol className="-mt-5">
        {supportdata.map(s1 => {
          return (
            <div>
              <li className="p-2
      list-decimal text-xs text-gray-400 ">{s1.supportitem}</li>
            </div>
          );
        })}
      </ol>
      <div className="m-20">
        <img src={figs_9} />
      </div>
    </div>
  );
}
