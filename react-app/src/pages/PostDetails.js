import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './postdetails.css'

export default function PostDetails() {
    const { id } = useParams(); // 🔹 gets the post ID from URL
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await axios.get(`http://localhost:5050/api/posts/${id}`);
                setPost(res.data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        fetchPost();
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div className='post-details-page'>
            <div className="post-details">
                <Navbar />
                <div className="post-details-container" style={{ padding: "2rem" }}>
                    <h2>{post.title}</h2>
                    <p><strong>Author:</strong> {post.author}</p>
                    <p><strong>Content:</strong>{post.content}</p>

                    {post.imageUrl && post.imageUrl.endsWith(".pdf") ? (
                        <iframe src={post.imageUrl} width="100%" height="400px" title="PDF Preview"></iframe>
                    ) : (
                        <img src={post.imageUrl} alt="Uploaded" />
                    )}
                    <p className="post-date">
                        {new Date(post.createdAt).toLocaleString()}
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
