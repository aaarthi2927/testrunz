import React from "react";
import Support from "../Support";
import { HelpGuideSidebar } from "./HelpGuideSidebar";
import { LogoutSupport } from "./LogoutSupport";
import { SettingSupport } from "./SettingSupport";
import { SSupport } from "./SSupport";
import { AdduserSupport } from "./AdduserSupport";
import { ProcedureSupport } from "./ProcedureSupport";
import { RunzSupport } from "./RunzSupport";
import { MypageSupport } from "./MypageSupport";
import { ProfileSupport } from "./ProfileSupport";
import { SignupSupport } from "./SignupSupport";
import { Welcome } from "./Welcome";
import { PageAccess } from "./PageAccess";
export function HelpGuide(){
  return(
    <div>
      <Support/>
  <div className="m-14  bg-gray-100 w-11/12 h-full rounded-md">
  <div className="flex ">
  <div className="w-5/6 border border-solid h-full">
  <section className="h-5/6" >
    <Welcome/>
       <PageAccess/>
    </section>
    <section className="m-4 h-5/6 p-4"  id="SignupSupport" >
    <SignupSupport name="Sign Up" />
    </section>
    <section className="m-4 h-5/6 p-4" id="EditProfileSupport">
    <ProfileSupport name="Profile"/>
    </section>
    <section className="m-4 h-5/6 p-4" id="MyPageSupport">
    <MypageSupport name="My page"/>
    </section>
    <section className="m-4 h-5/6 p-4" id="RunzSupport">
    <RunzSupport name="Runz"/>
    </section>
    <section className="m-4 h-5/6 p-4" id="ProcedureSupport">
    <ProcedureSupport name="Procedure"/>
    </section>
    <section className="m-4 h-5/6 p-4" id="AdduserSupport">
    <AdduserSupport name="Add User"/>
    </section>
    <section className="m-4 h-5/6 p-4" id="SSupport">
    <SSupport name="Support"/>
    </section>
    <section className="m-4 h-5/6 p-4" id="SettingSupport">
    <SettingSupport name="Setting"/>
    </section>
    <section className="m-4 h-5/6 p-4" id="LogoutSupport">
    <LogoutSupport name="Logout"/>
    </section>
    </div>
 <div className="w-1/6">
    <div className="fixed w-36 h-1/2 border border-solid border-b-8 m-5 ">
      <HelpGuideSidebar/>
     
    </div>
      </div>
          </div>
          </div>
    </div>
  );
}


