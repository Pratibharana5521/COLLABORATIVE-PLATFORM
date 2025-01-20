import React, { useState } from 'react';
import './forum.css';
import { useDarkMode } from '../context/DarkModeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Forum() {
  const { darkMode } = useDarkMode();
  const [threads, setThreads] = useState([
    { id: 1, title: "Tech Innovations in 2025", author: "John", replies: 15, lastActive: "2 hours ago"},
    { id: 2, title: "Best Practices in UI/UX Design", author: "Jane", replies: 10, lastActive: "5 hours ago"},
    { id: 3, title: "How to Build a Remote Team", author: "Mike", replies: 7, lastActive: "1 day ago"},
    { id: 4, title: "Exploring the Future of AI", author: "Alice", replies: 3, lastActive: "3 days ago"},
    { id: 5, title: "Collaboration Tools Comparison", author: "Bob", replies: 12, lastActive: "1 week ago"},
  ]);

  return (
    <div className={`forum ${darkMode ? 'dark' : ''}`}>
      <Navbar />
      <h1>Forum Overview</h1>
      <div className="thread-list">
        {threads.map((thread) => (
          <div key={thread.id} className="thread-item">
            <div className="thread-content">
              <div className="thread-details">
                <h3>{thread.title}</h3>
                <p>
                  <strong>Author:</strong> {thread.author} | <strong>Replies:</strong> {thread.replies} | <strong>Last Active:</strong> {thread.lastActive}
                </p>
                <button className="view-button">View Thread</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Forum;
