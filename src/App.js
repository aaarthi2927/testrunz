//import Header from "./Components/Header";
import { MdFeedback } from "react-icons/md";

import { Route, Routes } from "react-router-dom";
import { Activity } from "./Components/Activity";
import { FeedBack } from "./Components/FeedBack";
import { HelpGuide } from "./Components/HelpGuide";
import { Manageuser } from "./Components/Manageuser";
import Settings from "./Components/Settings";
import Support from "./Components/Support";
//import { SideNavbar } from "./Components/SideNavbar";
function App() {
  return (
    <div className="App">
       <Routes>
    <Route path='/SettingsNav' element={<Settings/>} />
    <Route path='/SettingsNav/Manageuser' element={<Manageuser/>} />
    <Route path='/SettingsNav/Activity' element={<Activity/>} />
    <Route path='/SupportNav' element={<Support/>} />
    <Route path='/SupportNav/Feedback' element={<FeedBack/>} />
    <Route path='/SupportNav/Helpguide' element={<HelpGuide/>} />
        </Routes>

    </div>
  );
}

export default App;

