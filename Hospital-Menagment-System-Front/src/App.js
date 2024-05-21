import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PatientPage from './pages/PatientPage';
import EditPatient from './components/Patient/EditPatient';
import EditDoctor from './components/Doctor/EditDoctor';

import AddPatientPage from './pages/AddPatientPage';
import DoctorPage from './pages/DoctorPage';
import AddDoctorPage from './pages/AddDoctorPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/edit-patient/:id" element={<EditPatient />} />
        <Route path="/add-patient" element={<AddPatientPage />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/edit-doctor/:id" element={<EditDoctor />} />
        <Route path="/add-doctor" element={<AddDoctorPage />} />

      </Routes>
    </Router>
  );
};

export default App;
