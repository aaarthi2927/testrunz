import { MypageNav } from "../Components/Sidebar/MypageNav";
import { RunsNav} from "../Components/Sidebar/RunsNav";
import { ProcedureNav} from "../Components/Sidebar/ProcedureNav";
import { SettingsNav} from "../Components/Sidebar/SettingsNav";
import { SupportNav} from "../Components/Sidebar/SupportNav";
import { ProfileNav} from "../Components/Sidebar/ProfileNav";
import {Link, Route, Routes} from "react-router-dom";
import Settings from "./Settings";
import { Manageuser } from "./Manageuser";
import { Activity } from "./Activity";
export function SideNavbar() {
  return (
        <div className="p-6 z-20 fixed w-50 max-w-md flex top-10  flex-col gap-x-4">    
    <div className="flex flex-col my-4 border-b border-gray-100 pb-4">
    <Link to="/MypageNav">
    <MypageNav name="My page"/>
    </Link>
    <Link to="/RunsNav">
    <RunsNav name="Runs"/>
    </Link>
    <Link to="/ProcedureNav">
    <ProcedureNav name="Procedure"/>
    </Link></div>
   <div className="flex flex-col my-4 border-b border-gray-100 pb-4">
    <Link to="/SettingsNav">
    <SettingsNav name="Settings"/>
    </Link>
    <Link to="/SupportNav">
    <SupportNav name="Support"/>
    </Link>
    <Link to="/ProfileNav">
    <ProfileNav name="Profile"/>
    </Link>
    </div>
    <div>
    <Routes>
    <Route path='/SettingsNav' element={<Settings/>} />
    <Route path='/SettingsNav/Manageuser' element={<Manageuser/>} />
    <Route path='/SettingsNav/Activity' element={<Activity/>} />

        </Routes>
        
    </div>
    
          </div>
         
  );
}
