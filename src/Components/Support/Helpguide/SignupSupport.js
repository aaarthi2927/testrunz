import React from "react";
import signupimg from "../../../images/figs_1.png";

export function SignupSupport({ name }) {
  const dataList = [
    { listitem: 'Users can sign up for the system as follows' },
    { listitem: 'Go to the testRunz website:http://testrunz.com/#/' },
    { listitem: 'Enter the user name, email address, and password to signup.' }
  ];
  return (
    <div>
      <div className="grow h-14">
        <h2 className="text-lg font-bold text-gray-900">{name}</h2>
      </div>
      <ol className="-mt-5">
        {dataList.map(li1 => {
          return (
            <div>
              <li className="p-2
      list-decimal text-xs text-gray-400 ">{li1.listitem}</li>
            </div>
          );
        })}
      </ol>
      <div className="m-20">
        <img src={signupimg} />
      </div>
    </div>
  );
}
