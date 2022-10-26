import React from "react";
import { FeedBackForm } from "./FeedBackForm";
import Support from "../Support";

export function FeedBack() {
    return (
        <div>
        <Support/>
        <div>
        <div className="m-14 ml-18 rounded-md bg-gray-100 shadow-gray-200 w-3/4 h-9/12 ">
         <FeedBackForm/>
            </div>
        </div>
        </div>
    );
}

