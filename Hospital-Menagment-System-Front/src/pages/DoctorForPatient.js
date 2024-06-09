import React from 'react';
import DoctorForPatinents from '../components/Doctor/DoctorForPatinents';

const DoctorPage = () => {
 // const navigate = useNavigate();



  return (
    <div>
      <h1>Doctor Management</h1>
        {/* <button onClick={handleAddDoctorClick}>Add Doctor</button> */}
      <DoctorForPatinents />
    </div>
  );
};

export default DoctorPage;
