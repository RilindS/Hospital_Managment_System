// RegisterPage.jsx
import React, { useState } from 'react';
import AuthService from '../services/AuthService';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    AuthService.register(email, password, role).then(
      () => {
        window.location.href = '/login';
      },
      error => {
        console.log(error);
      }
    );
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Patient">Patient</option>
            <option value="Doctor">Doctor</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
