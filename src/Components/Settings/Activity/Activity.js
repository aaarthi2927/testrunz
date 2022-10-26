import React from "react";
import Settings from "../Settings";

export function Activity() {
      return (
        <div>
            <Settings/>
            <div className="flex flex-col m-10 p-10 gap-10 ">
             <div ><ActivityCard />
             <ActivityCard/>
             <ActivityCard />
                       </div>
           </div>
        </div>
    );
}

export function ActivityCard() {
    return (
        <div className="m-5 p-6 pt-2 rounded-md bg-stone-200 h-15 " > Lab:Thermal_Engineering 
        
        </div>
        
    );

}