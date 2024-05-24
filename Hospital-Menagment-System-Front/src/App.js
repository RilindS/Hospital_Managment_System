
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';

import PatientPage from './pages/PatientPage';
import EditPatient from './components/Patient/EditPatient';
import EditDoctor from './components/Doctor/EditDoctor';

import AddPatientPage from './pages/AddPatientPage';
import DoctorPage from './pages/DoctorPage';
import AddDoctorPage from './pages/AddDoctorPage';

import EditDepartment from './components/Department/EditDepartment';
import AddDepartmentPage from './pages/AddDepartmentPage';
import DepartmentPage from './pages/DepartmentPage';

import EditNurse from './components/Nurse/EditNurse';
import AddNursePage from './pages/AddNursePage';
import NursePage from './pages/NursePage';



import RoomPage from './pages/RoomPage';

import EditRoom from './components/Room/EditRoom';
import AddRoomPage from './pages/AddRoomPage';

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



const App = () => {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/patient" element={<PatientPage />} />
          <Route path="/edit-patient/:id" element={<EditPatient />} />
          <Route path="/add-patient" element={<AddPatientPage />} />
          <Route path="/doctor" element={<DoctorPage />} />
          <Route path="/edit-doctor/:id" element={<EditDoctor />} />
          <Route path="/add-doctor" element={<AddDoctorPage />} />
          <Route path="/department" element={<DepartmentPage />} />
          <Route path="/edit-department/:id" element={<EditDepartment />} />
          <Route path="/add-department" element={<AddDepartmentPage />} />

          <Route path="/nurse" element={<NursePage />} />
          <Route path="/edit-nurse/:id" element={<EditNurse />} />
          <Route path="/add-nurse" element={<AddNursePage />} />

          <Route path="/room" element={<RoomPage />} />
          <Route path="/edit-room/:id" element={<EditRoom />} />
          <Route path="/add-room" element={<AddRoomPage />} />

          <Route  path="/login" element={<LoginPage/>} />
          <Route  path="/register" element={<RegisterPage/>} />
        </Routes>
      </Sidebar>
    </Router>
  );
};

export default App;
