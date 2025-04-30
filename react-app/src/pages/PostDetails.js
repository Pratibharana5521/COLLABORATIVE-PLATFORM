import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Navlogin from '../components/Navlogin';
import Footer from '../components/Footer';
import './postdetails.css'

export default function PostDetails() {
  const { id } = useParams(); // 🔹 gets the post ID from URL
  const [posts, setPosts] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:5050/api/posts`);
        const query = localStorage.getItem('searchQuery') || "";
        setSearchQuery(query);
        setPosts(res.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchPost();
  }, []);
  console.log(searchQuery)
  if (!posts) return (
    <div>
      {localStorage.getItem('token') ? <Navlogin /> : <Navbar />}
      <h1 class="sh1">No Post Available</h1>
    </div>
  )
  const filteredPosts = posts.filter((post) => {
    const lowerQuery = searchQuery.toLowerCase();
    console.log(lowerQuery);
    return (
      
      post.title.toLowerCase().includes(lowerQuery) ||
      post.content.toLowerCase().includes(lowerQuery) ||
      post.author.toLowerCase().includes(lowerQuery)
    );
  });
  return (
    <div className='post-details-page'>
      <div className='forum-page'>

        {localStorage.getItem('token') ? <Navlogin /> : <Navbar />}
        <div >
          
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div className="post-wrapper" key={post._id}>
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
                    {/* <button className="discussion-btn">💬 Give thoughts</button> */}
                    <div className="timestamp">
                      <p>{new Date(post.createdAt).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p style={{ padding: "2rem", fontStyle: "italic" }}>No posts matched your search.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
