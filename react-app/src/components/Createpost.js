import React from 'react'
import Navbar from './Navbar'
import { useState } from "react";
import './createpost.css';
import Footer from './Footer';
import axios from "axios";
import { useDarkMode } from '../context/DarkModeContext';
import Login from '../pages/Login';
import Navlogin from './Navlogin';
import NavC from './NavC';

export default function Createpost() {
    const { darkMode } = useDarkMode();
    const ide = localStorage.getItem('id') ;
    const loadfile = (event) => {
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src)
        }
    }
    const [postData, setPostData] = useState({
        id:ide,
        title: "",
        author: "",
        content: "",
        imageUrl: "",
        imageFile: null
      });
    
      const handleChange = (e) => {
        setPostData({ ...postData, [e.target.name]: e.target.value });
      };
    
      const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setPostData({ ...postData, imageUrl });
        }
      };
    
      const handleSubmit = async () => {
        console.log("Sending Data:", postData); 
    
        if (!postData.title || !postData.author || !postData.content) {
            alert("Please fill all required fields!");
            return;
        }
    
        try {
            const response = await axios.post("http://localhost:5050/api/posts", postData, {
                headers: { "Content-Type": "application/json" },
            });
    
            console.log("Response:", response.data);
            alert("Post Created Successfully!");
    
            setPostData({ title: "", author: "", content: "", imageUrl: "" }); 
        } catch (error) {
            console.error("Error creating post:", error.response?.data || error);
        }
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPostData((prev) => ({ ...prev, imageUrl }));
        }
    };
    
    return (
        <div className={`createpost ${darkMode ? 'dark' : ''}`}>
            {localStorage.getItem('token') ? <NavC /> : <Login />}
            <div className='createpost1'>
                <div className='post-header'>
                    <h2>Create New Post</h2>
                </div>
                <div className='main-div'>
                    <input type="text" id="postTitle" name="title" placeholder="Enter your post title" value={postData.title} onChange={handleChange} required />
                    <input type="text" name="author" placeholder="Author" value={postData.author} onChange={handleChange} required />
                    <input type="text" name="content" value={postData.content} onChange={handleChange} placeholder="Enter your Content" />
                    <img id='output' src={postData.imageUrl}/>
                    <input type="file" accept="image/*,application/pdf" onChange={handleFileChange} />
                    <button id='post-btn' onClick={handleSubmit}>Share</button>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}
