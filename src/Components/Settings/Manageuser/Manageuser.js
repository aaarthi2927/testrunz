import React from "react";
import Settings from "../Settings";
import { Manageuserdata } from "./Manageuserdata";
export const datauser=[{id:'633570f7c160723ffc195e9e',name:"xxx",email:"xxx@gmail.com",role:"student",university:"Anna University",
institutename:"Mailam",department:"BEEE",year:"2",state:"tamilnadu",semester:"3",
country:"India",
}
]
export function Manageuser() {
        return (
        <div>
            <Settings/>
            <div>
                <Manageuserdata/>
            </div>
                    </div>
    );
}

            

