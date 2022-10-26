//import Header from "./Components/Header";
import { MdFeedback } from "react-icons/md";

import { Route, Routes } from "react-router-dom";
import { Activity } from "./Components/Settings/Activity/Activity";
import { FeedBack } from "./Components/Support/Feedback/FeedBack";
import { HelpGuide } from "./Components/Support/Helpguide/HelpGuide";
import { Manageuser, UserData, UserDatalist } from "./Components/Settings/Manageuser/Manageuser";
import Settings from "./Components/Settings/Settings";
import Support from "./Components/Support/Support";
import Header from "./Components/Header/Header";
import { SideNavbar } from "./Components/Sidebar/SideNavbar";
//import { SideNavbar } from "./Components/Sidebar/SideNavbar";
function App() {
  return (
    <div className="App">
        <Routes>
        <Route path='/Header' element={<Header/>} />
        <Route path='/SideNavbar' element={<SideNavbar/>} />    
    <Route path='/SettingsNav' element={<Settings/>} />
    <Route path='/SettingsNav/Manageuser' element={<Manageuser/>} />
    <Route path='/SettingsNav/Activity' element={<Activity/>} />
    <Route path='/SupportNav' element={<Support/>} />
    <Route path='/SupportNav/Feedback' element={<FeedBack/>} />
    <Route path='/SupportNav/Helpguide' element={<HelpGuide/>} />
<Route path='/SettingsNav/Manageuser/:id' element={<UserDatalist/>} />
                  </Routes>  
    </div>
  );
}

export default App;

