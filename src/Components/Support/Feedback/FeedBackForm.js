import React from "react";


export function FeedBackForm() {
    return (
        <div className="m-5 flex flex-col gap-5">
            <div>
                <p><span className="text-sm font-medium text-black">Feedback</span> <span className="text-xs text-gray-500"> "Help us to improve"</span>  </p>
            </div>
            <div>
                <lable className="text-xs text-gray-500">Category</lable>
                <br />
                <div className="text-xs m-2">
                    <input type="radio" id="bug" value="Bug" />
                    <lable for="bug" className="text-xs p-2 ">Bug</lable>
                    <input type="radio" id="features" value="features" />
                    <lable for="Features" className="text-xs p-2 ">Features</lable>
                    <input type="radio" id="other" value="other" />
                    <lable for="Other" className="text-xs p-2 ">Other</lable>
                </div>
            </div>
            <div>
                <textarea className="border border-solid border-current" id="feedback" name="feedback" rows="4" cols="50" placeholder="Enter Your Feedback....">

                </textarea>
            </div>
            <div className="flex flex-col flex-nowrap  ">
                <button className=" m-2 bg-amber-400 text-black  text-xs p-2 w-20 font-normal  rounded-md hover:shadow-lg shadow-gray-400">
                    UPLOAD
                </button>
                <button className=" m-2 bg-amber-400 text-black  text-xs font-normal p-2 w-20 rounded-md hover:shadow-lg shadow-gray-400">
                    SUBMIT
                </button>
            </div>

        </div>
    );
}

