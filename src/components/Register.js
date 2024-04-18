// components/Register.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './Register.css'; // Import CSS file for specific component styles

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login');
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      {error && <p className="error">{error}</p>}
      <p className="auth-link">Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Register;
