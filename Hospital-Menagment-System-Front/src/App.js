import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';
import DoctorPage from './pages/DoctorPage';
import PatientPage from './pages/PatientPage';
import PatientHomePage from './pages/PatientHomePage';
import DoctorHomePage from './pages/DoctorHomePage';
import AddAppointment from './components/AddAppointment';
import HomePage from './pages/HomePage';
import AdminSidebar from './components/sidebar/AdminSidebar';
import DoctorSidebar from './components/sidebar/DoctorSidebar';
import PatientSidebar from './components/sidebar/PatientSidebar';
import DepartmentPage from './pages/DepartmentPage';
import NursePage from './pages/NursePage';
import RoomPage from './pages/RoomPage';
import AddPatientPage from './pages/AddPatientPage';
import EditPatient from './components/Patient/EditPatient';
import AddDoctorPage from './pages/AddDoctorPage';
import EditDoctor from './components/Doctor/EditDoctor';
import AddDepartmentPage from './pages/AddDepartmentPage';
import EditDepartment from './components/Department/EditDepartment';
import AddNursePage from './pages/AddNursePage';
import EditNurse from './components/Nurse/EditNurse';
import AddRoomPage from './pages/AddRoomPage';
import EditRoom from './components/Room/EditRoom';
import AddCityPage from './pages/AddCityPage';
import AddPatient from './components/Patient/AddPatient';
import AddDoctor from './components/Doctor/AddDoctor';
import AdminAppointments from './components/AdminAppointments';
import CityPage from './pages/CityPage';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/*" element={<PrivateRoute roles={['Admin']} component={AdminLayout} />} />
          <Route path="/doctor/*" element={<PrivateRoute roles={['Doctor']} component={DoctorLayout} />} />
          <Route path="/patient/*" element={<PrivateRoute roles={['Patient']} component={PatientLayout} />} />
          <Route path="/add-patient" element={<AddPatient />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

const AdminLayout = () => (
  <div className="sidebar-container">
    <AdminSidebar />
    <div className="content">
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/patient/add" element={<AddPatientPage />} />
        <Route path="/patient/edit/:id" element={<EditPatient />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/doctor/add" element={<AddDoctorPage />} />
        <Route path="/doctor/edit/:id" element={<EditDoctor />} />
        <Route path="/department" element={<DepartmentPage />} />
        <Route path="/department/add" element={<AddDepartmentPage />} />
        <Route path="/department/edit/:id" element={<EditDepartment />} />
        <Route path="/nurse" element={<NursePage />} />
        <Route path="/nurse/add" element={<AddNursePage />} />
        <Route path="/nurse/edit/:id" element={<EditNurse />} />
        <Route path="/room" element={<RoomPage />} />
        <Route path="/room/add" element={<AddRoomPage />} />
        <Route path="/room/edit/:id" element={<EditRoom />} />
        <Route path="/appointments" element={<AdminAppointments />} />
        <Route path="/city/add" element={<AddCityPage />} />
        <Route path="/city" element={<CityPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/add-patient" element={<AddPatient />} />
      </Routes>
    </div>
  </div>
);

const DoctorLayout = () => (
  <div className="sidebar-container">
    <DoctorSidebar />
    <div className="content">
      <Routes>
        <Route path="/" element={<DoctorHomePage />} />
        <Route path="/patient" element={<PatientPage />} />
      </Routes>
    </div>
  </div>
);

const PatientLayout = () => (
  <div className="sidebar-container">
    <PatientSidebar />
    <div className="content">
      <Routes>
        <Route path="/" element={<PatientHomePage />} />
        <Route path="/appointments" element={<AddAppointment />} />
      </Routes>
    </div>
  </div>
);

export default App;
