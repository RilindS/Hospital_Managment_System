import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PatientPage from './pages/PatientPage';
import EditPatient from './components/Patient/EditPatient';
import AddPatientPage from './pages/AddPatientPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/edit-patient/:id" element={<EditPatient />} />
        <Route path="/add-patient" element={<AddPatientPage />} />

      </Routes>
    </Router>
  );
};

export default App;
