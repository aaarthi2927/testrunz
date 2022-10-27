import React, { useState } from "react";
import { datauser } from "./Manageuser";
import { UserData } from "./UserData";


export function UserDatalist() {
    const [data, setData] = useState(datauser);
    return (
        <div>
            {data.map((d1, index) => (
                <UserData key={d1.index}
                    name={d1.name}
                    email={d1.email} role={d1.role} university={d1.university}
                    institutename={d1.institutename}
                    department={d1.department} year={d1.year} state={d1.state}
                    semester={d1.semester} country={d1.country} />
            ))}
        </div>
    );
}
