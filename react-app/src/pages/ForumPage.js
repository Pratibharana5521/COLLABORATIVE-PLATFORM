import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar"
import Navlogin from "../components/Navlogin"
import Footer from "../components/Footer"
import './forumpage.css';
import { Link } from 'react-router-dom';

export default function ForumPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5050/api/posts');
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='forum-page'>
        <div className='forum'>
          {localStorage.getItem('token') ? <Navlogin /> : <Navbar />}
          <div className="forum-container">
            <h2 className='forum-title'>Forum Overview</h2>
            <div className="forum-posts">
              {posts.map((post, index) => (

                <Link to={`/post/${post._id}`} className="post-link" key={index}>
                  <div className="post-card">
                    <h3>{post.title}</h3>
                    <p><strong>Author:</strong> {post.author}</p>
                    <p><strong>Content:</strong> {post.content}</p>
                    {post.imageUrl && <img src={post.imageUrl} alt="post" className="post-image" />}
                  </div>
                </Link>


              ))}
            </div>
          </div>
          </div>
      <Footer />
    </div>
  );
}
