import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // Import Firebase Auth module
import 'firebase/compat/firestore'; // Import Firebase Firestore module
import './App.css'; 
// Import components
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import Notes from './components/Notes';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCkR1BxcQ1HAxo1ekIZiFSRLamUNxSXlQ",
  authDomain: "notes-storing.firebaseapp.com",
  projectId: "notes-storing",
  storageBucket: "notes-storing.appspot.com",
  messagingSenderId: "760908073308",
  appId: "1:760908073308:web:5086571192644347409999",
  measurementId: "G-C88KWQGYCC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;