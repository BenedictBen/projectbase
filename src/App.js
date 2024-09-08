import * as React from 'react'
import DashboardContent from './components/DashboardContent';
import DashboardDetail from './components/DashboardDetail';
import NavbarDashBoard from './components/NavbarDashBoard';
import Login from "./pages/Login"
import Register from './pages/Regsiter';
import ResetPassword from "./pages/ResetPassword";
import { Routes, Route} from "react-router-dom";
import Dashboard from './pages/Dashboard';


function App() {
  return (
    // <div className="App">
    //  {/* <Login/> */}
    //  {/* <ResetPassword/> */}
    //  {/* <Register/>  */}
    //  <NavbarDashBoard/>
    //  <DashboardContent/>
    //  {/* <DashboardDetail/> */}
    // </div>
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/resetpassword" element={<ResetPassword/>}/>
      </Routes>
    </div>
  );
}

export default App;
