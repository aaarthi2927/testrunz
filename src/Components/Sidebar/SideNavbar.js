import { MypageNav } from "./Sidebar/MypageNav";
import { RunsNav} from "./Sidebar/RunsNav";
import { ProcedureNav} from "./Sidebar/ProcedureNav";
import { SettingsNav} from "./Sidebar/SettingsNav";
import { SupportNav} from "./Sidebar/SupportNav";
import { ProfileNav} from "./Sidebar/ProfileNav";
import {Link} from "react-router-dom";
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
        
          </div>
         
  );
}
