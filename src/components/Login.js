import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css'; // Import CSS file for specific component styles

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/notes');
    } catch (error) {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error">{error}</p>}
      <p className="auth-link">Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
};

export default Login;