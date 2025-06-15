import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import {Home} from "./components/Home";
import { AdminLogin } from "./components/AdminLogin";
import { UserDashboard } from "./components/UserDashboard";
import { AdminDashboard } from "./components/AdminDashboard";
import Services from "./components/Services";
import BookAppointment from "./components/BookAppointment";
import Appointments from "./components/Appointments";
import ApprovedAppointments from "./components/ApprovedAppointments";
import { Notification } from "./components/Notification";
import Footer from "./components/Footer";

function App() {  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/adminLogin" element={<AdminLogin/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/userDashboard" element={<UserDashboard/>}/>
          <Route path="/adminDashboard" element={<AdminDashboard/>}/>
          <Route path="/booking" element={<BookAppointment/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/appointments" element={<Appointments/>}/>
          <Route path="/scheduledAppointments" element={<ApprovedAppointments/>}/>
          <Route path="/notifications" element={<Notification/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
