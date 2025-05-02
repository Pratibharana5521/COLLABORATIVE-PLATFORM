import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Navlogin from '../components/Navlogin';
import Footer from '../components/Footer';
import './MyPosts.css'

export default function MyPosts() {
  // const { user } = useContext(AuthContext); // assuming you created one
  // console.log(user._id); // user ID
  // const id = localStorage.getItem(id) ;// 🔹 gets the post ID from URL
  const [posts, setPosts] = useState(null);
  const id = localStorage.getItem('id'); // assuming user ID is stored here
  console.log(id+"mypost")


  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:5050/myPosts/${id}`);
        setPosts(res.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchPost();
  }, []);
  console.log(posts)

  if (!posts) return (
    <div>
      {localStorage.getItem('token') ? <Navlogin /> : <Navbar />}
      <h1 class="sh1">No Post Available</h1>
    </div>
  )
  return (
    <div className='post-details-page'>
      <div className='forum-page'>

        {localStorage.getItem('token') ? <Navlogin /> : <Navbar />}
        <div >
          {posts.map((post) => (
            <div className="post-wrapper">
              <div className="post-details-container">
                <h2 className="post-title">{post.title}</h2>

                {post.imageUrl && post.imageUrl.endsWith(".pdf") ? (
                  <iframe
                    src={post.imageUrl}
                    className="post-image"
                    title="PDF Preview"
                  ></iframe>
                ) : (
                  <img src={post.imageUrl} alt="Uploaded" className="image" />
                )}

                <div className="post-meta">
                  <p className="post-author"><strong>Author:</strong> {post.author}</p>
                  <p className="post-content"><strong>Content:</strong> {post.content}</p>
                </div>

                <div className="post-footer">
                  <button className="discussion-btn">💬 Give thoughts</button>
                  <div className="timestamp">
                    <p>{new Date(post.createdAt).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>


          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
