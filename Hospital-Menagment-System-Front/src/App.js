import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import AdminPage from './pages/AdminPage';
import DoctorPage from './pages/DoctorPage';
import LoginPage from './pages/LoginPage';
import PatientPage from './pages/PatientPage';
import ProfileAdmin from './pages/ProfileAdmin';
import RegisterPage from './pages/RegisterPage';
import SettingsAdmin from './pages/SettingsAdmin';

import 'bootstrap/dist/css/bootstrap.min.css';


import ProfileDoctor from './pages/ProfileDoctor';
import SettingDoctor from './pages/SettingDoctor';

import ProfilePatient from './pages/ProfilePatient';
import SetingsPatient from './pages/SetingsPatient';

import VacationListByDoctorName from './pages/VacationListByDoctorName';


import DoctorForPatient from './pages/DoctorForPatient';
import PatinetForDoctor from './pages/PatientForDoctor';


import CityFilter from './Filter/CityFilter';
import NameFilter from './Filter/NameFilter';
import RoomFilter from './Filter/RoomFilter';



import AppointmentsByDate from './Filter/AppointmentsByDate';
import AddDoctorDetails from './pages/AddDoctorDetails';
import AddInventoryPage from './pages/AddInventoryPage';

import AddInventoryPageA from './pages/AddInventoryPageA';
import DashboardPage from './pages/DashboardPage';
import DoctorAppointments from './pages/DoctorAppointments';
import PatientMyAppoitments from './pages/PatientMyAppoitments';







import AdminAppointments from './components/AdminAppointments';
import EditDepartment from './components/Department/EditDepartment';
import EditDoctor from './components/Doctor/EditDoctor';
import EditNurse from './components/Nurse/EditNurse';

import AddVacation2 from './components/Vacation/AddVacation2';



import EditInventory from './components/Inventory/EditInventory';

import AddPatient from './components/Patient/AddPatient';
import EditPatient from './components/Patient/EditPatient';
import EditRoom from './components/Room/EditRoom';
import AdminSidebar from './components/sidebar/AdminSidebar';
import DoctorSidebar from './components/sidebar/DoctorSidebar';
import PatientSidebar from './components/sidebar/PatientSidebar';
import AddAppointment from './pages/AddAppointment';
import AddCityPage from './pages/AddCityPage';
import AddDepartmentPage from './pages/AddDepartmentPage';
import AddDoctorPage from './pages/AddDoctorPage';
import AddNursePage from './pages/AddNursePage';
import InventoryPageA from './pages/InventoryPageA';


import AddPatientPage from './pages/AddPatientPage';
import AddRoomPage from './pages/AddRoomPage';
import CityPage from './pages/CityPage';

import DepartmentPage from './pages/DepartmentPage';
import DoctorHomePage from './pages/DoctorHomePage';

import AddFeedBack from './components/FeedBack/AddFeedBack';
import AddFeedBackA from './components/FeedBack/AddFeedBackA';

import EditFeedBack from './components/FeedBack/EditFeedBack';
import AddVacation from './components/Vacation/AddVacation';
import EditVacation from './components/Vacation/EditVacation';
import FeedBackPage from './pages/FeedBackPage';
import NursePage from './pages/NursePage';
import PatientHomePage from './pages/PatientHomePage';
import RoomPage from './pages/RoomPage';
import VacationPage from './pages/VacationPage';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
        <Route path="/" element={<LoginPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<LoginPage />} />
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/admin/*" element={<PrivateRoute roles={['Admin']} component={AdminLayout} />} />
          <Route path="/doctor/*" element={<PrivateRoute roles={['Doctor']} component={DoctorLayout} />} />
          <Route path="/patient/*" element={<PrivateRoute roles={['Patient']} component={PatientLayout} />} />
          {/* <Route path="/add-patient" element={<AddPatient />} /> */}
          {/* <Route path="/add-doctor" element={<AddDoctorDetails />} />   */}
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

        <Route path="/inventory" element={<InventoryPageA />} />
        <Route path="/inventory/add" element={<AddInventoryPageA />} />
        <Route path="/inventory/edit/:id" element={<EditInventory />} />

        
        <Route path="/vacation" element={<VacationPage />} />

        <Route path="/vacation/add" element={<AddVacation />} />
        <Route path="/vacation/edit/:id" element={<EditVacation />} />

        <Route path="/feedback" element={<FeedBackPage />} />

<Route path="/feedback/add" element={<AddFeedBackA />} />
<Route path="/feedback/edit/:id" element={<EditFeedBack />} />



        <Route path="/room" element={<RoomPage />} />
        <Route path="/room/add" element={<AddRoomPage />} />
        <Route path="/room/edit/:id" element={<EditRoom />} />
        <Route path="/appointments" element={<AdminAppointments />} />
        <Route path="/city/add" element={<AddCityPage />} />
        <Route path="/city" element={<CityPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/add-patient" element={<AddPatient />} />
        <Route path="/profile" element={<ProfileAdmin />} />
        <Route path="/Settings" element={<SettingsAdmin />} />
        <Route path="/appointmentsByDate" element={<AppointmentsByDate />} />
        <Route path="/city-filter" element={<CityFilter />} />
        <Route path="/name-filter" element={<NameFilter />} />
        <Route path="/room-filter" element={<RoomFilter />} />
        <Route path="/add-doctor" element={<AddDoctorDetails />} /> 
        <Route path="/add-patient" element={<AddPatient />} />

        <Route path="/DashboardPage" element={<DashboardPage />} />

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
        <Route path="/patient/edit/:id" element={<EditPatient />} />
        <Route path="/profile" element={<ProfileDoctor />} />
        <Route path="/Settings" element={<SettingDoctor />} />  
        <Route path="/patient" element={<PatinetForDoctor />} />
        <Route path="/city-filter" element={<CityFilter />} />
        <Route path="/appointmentsByDate" element={<AppointmentsByDate />} />
        <Route path="/appointments" element={<DoctorAppointments />} />

        <Route path="/inventory" element={<AddInventoryPage />} />
        <Route path="/vacation" element={<AddVacation2 />} />

        <Route path="/vacationList" element={<VacationListByDoctorName />} />



       

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

        <Route path="/profile" element={<ProfilePatient />} />
          <Route path="/Settings" element={<SetingsPatient />} />
        <Route path="/doctor" element={<DoctorForPatient />} />

        <Route path="/medical-history" element={<PatientMyAppoitments />} />
        <Route path="/feedback" element={<AddFeedBack />} />


      </Routes>
    </div>
  </div>
);

export default App;
