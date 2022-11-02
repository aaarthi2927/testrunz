import React, { useContext, useState } from "react";
import { AppContext } from "../../../App";
import { datauser } from "./datauser";
import { UserData } from "./UserData";
export function UserDatalist() {
    const {data}=useContext(AppContext);
    return (
        <div>
            {data.map((d1, index) => (
                <UserData key={d1.index}
                    name={d1.name}
                    email={d1.email} role={d1.role} university={d1.university}
                    institutename={d1.institutename}
                    department={d1.department} year={d1.year} state={d1.state}
                    semester={d1.semester} country={d1.country} id={index}/>
            ))}
        </div>
    );
}
