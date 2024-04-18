// components/Notes.js
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import './Notes.css'; // Import CSS file for specific component styles

const Notes = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchNotes = async () => {
    try {
      const user = getAuth().currentUser;
      if (!user) {
        navigate('/login');
        return;
      }
      const userId = user.uid;
      const db = getFirestore();
      const q = query(collection(db, 'notes'), where('userId', '==', userId));
      const snapshot = await getDocs(q);
      const notesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setNotes(notesData);
    } catch (error) {
      setError('Error fetching notes. Please try again.');
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSaveNote = async () => {
    try {
      const user = getAuth().currentUser;
      if (!user) {
        navigate('/login');
        return;
      }
      const userId = user.uid;
      const db = getFirestore();
      await addDoc(collection(db, 'notes'), { content: note, userId });
      setNote('');
      fetchNotes();
    } catch (error) {
      setError('Error saving note. Please try again.');
    }
  };

  return (
    <div className="notes-container">
      <h2>My Notes</h2>
      {error && <p className="error">{error}</p>}
      <div className="input-section">
        <input type="text" placeholder="Write a note..." value={note} onChange={(e) => setNote(e.target.value)} />
        <button onClick={handleSaveNote}>Save</button>
      </div>
      <ul className="notes-list">
        {notes.map((note) => (
          <li key={note.id} className="note-item">{note.content}</li>
        ))}
      </ul>
      <Link to="/login" className="logout-link">Logout</Link>
    </div>
  );
};

export default Notes;
