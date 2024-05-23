/*import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
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
import { AuthProvider, useAuth } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function PrivateRoute({ element: Element, ...rest }) {
  const { auth } = useAuth();
  return (
    <Route
      {...rest}
      element={auth ? <Element /> : <Navigate to="/login" />}
    />
  );
}

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<PrivateRoute element={AdminPage} />} />
          <Route path="/user" element={<PrivateRoute element={UserPage} />} />
          <Route path="/" element={<Sidebar />}>
            <Route index element={<HomePage />} />
            <Route path="patient" element={<PatientPage />} />
            <Route path="edit-patient/:id" element={<EditPatient />} />
            <Route path="add-patient" element={<AddPatientPage />} />
            <Route path="doctor" element={<DoctorPage />} />
            <Route path="edit-doctor/:id" element={<EditDoctor />} />
            <Route path="add-doctor" element={<AddDoctorPage />} />
            <Route path="department" element={<DepartmentPage />} />
            <Route path="edit-department/:id" element={<EditDepartment />} />
            <Route path="add-department" element={<AddDepartmentPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
*/

// App.jsx
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
        </Routes>
      </Sidebar>
    </Router>
  );
};

export default App;
