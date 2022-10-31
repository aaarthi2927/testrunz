//import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import { Activity } from "./Components/Settings/Activity/Activity";
import { FeedBack } from "./Components/Support/Feedback/FeedBack";
import { HelpGuide } from "./Components/Support/Helpguide/HelpGuide";
import { Manageuser } from "./Components/Settings/Manageuser/Manageuser";
import { UserDatalist } from "./Components/Settings/Manageuser/UserDatalist";
import Settings from "./Components/Settings/Settings";
import Support from "./Components/Support/Support";
import Header from "./Components/Header/Header";
import { SideNavbar } from "./Components/Sidebar/SideNavbar";
import { AddUserlist } from "./Components/Settings/Manageuser/AddUserlist";
import Mypage from "./Components/Mypage/Mypage";
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
<Route path='/SettingsNav/Manageuser/adduser' element={<AddUserlist/>} />
<Route path='/Mypage' element={<Mypage/>} />
  </Routes>  
    </div>
  );
}

export default App;


