import React from "react";
import { Link } from "react-scroll";

export function HelpGuideSidebar() {
  return (
    <div>
      <h3 className="p-3 hover:bg-slate-50 text-xs text-slate-600">Contents :</h3>
      <nav class="w-30 h-1 bg-slate-300 flex flex-col">
        <Link to='SignupSupport' className="p-2 hover:bg-slate-50 text-xs text-slate-600 focus:">Sign Up</Link>
        <Link to='EditProfileSupport' className="p-2 hover:bg-slate-50 text-xs text-slate-600">Edit Profile</Link>
        <Link to='MyPageSupport' className="p-2 hover:bg-slate-50 text-xs text-slate-600">My Page</Link>
        <Link to='RunzSupport' className="p-2 hover:bg-slate-50 text-xs text-slate-600">Runz</Link>
        <Link to='ProcedureSupport' className="p-2 hover:bg-slate-50 text-xs text-slate-600">Procedure</Link>
        <Link to='AdduserSupport' className="p-2 hover:bg-slate-50 text-xs text-slate-600">Add User</Link>
        <Link to='SSupport' className="p-2 hover:bg-slate-50 text-xs text-slate-600">Support</Link>
        <Link to='SettingSupport' className="p-2 hover:bg-slate-50 text-xs text-slate-600">Setting</Link>
        <Link to='LogoutSupport' className="p-2 hover:bg-slate-50 text-xs text-slate-600">Logout</Link>
      </nav>
    </div>
  );
}
