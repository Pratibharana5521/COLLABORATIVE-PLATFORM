import React from "react"
import "./home.css"
import { useDarkMode } from "../context/DarkModeContext"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom"; 


function Home() {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login"); 
  };

  return (
    <div className={`home ${darkMode ? 'dark' : ''}`}>
      <Navbar/>
      <div className="main-content">
        <h1>Welcome to your collaborative hub!</h1>
        <p>Collaboration that Inspires Change for Innovation and Growth</p>
        <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
      </div>

      <section className="features-section">
        <h2>Why Choose Our Discussion Forum?</h2>
        <div className="features">
          <div className="feature">
            <h3>Interactive Discussions</h3>
            <p>Engage in real-time discussions and share insights with like-minded individuals.</p>
          </div>
          <div className="feature">
            <h3>Expert Moderation</h3>
            <p>Our expert moderators ensure productive and respectful conversations.</p>
          </div>
          <div className="feature">
            <h3>Personalized Feed</h3>
            <p>Get a tailored experience with a personalized feed based on your interests.</p>
          </div>
          <div className="feature">
            <h3>Multi-Topic Threads</h3>
            <p>Explore discussions across various topics, from technology to lifestyle, all in one place.</p>
          </div>
        </div>
      </section>

      <section className="community-section">
        <h2>Join Our Community</h2>
        <p>Be a part of a growing network of innovators, thinkers, and change-makers.</p>
        <ul className="community-benefits">
          <li>Participate in topic-specific channels.</li>
          <li>Earn badges and recognition for contributions.</li>
          <li>Stay updated with the latest industry trends.</li>
        </ul>
        <button className="join-button">Join Now</button>
      </section>

      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials">
          <blockquote>
            "This platform has revolutionized how I collaborate and share ideas. A must-try!"
            <span>- User A</span>
          </blockquote>
          <blockquote>
            "An amazing space to connect with peers and discuss innovative solutions."
            <span>- User B</span>
          </blockquote>
          <blockquote>
            "A seamless experience for engaging in meaningful conversations. Highly recommended!"
            <span>- User C</span>
          </blockquote>
        </div>
      </section>
      <section className="works-section">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Create an Account</h3>
            <p>Sign up to access all features and start participating in discussions.</p>
          </div>
          <div className="step">
            <h3>2. Explore Topics</h3>
            <p>Browse through a wide range of topics and join threads that interest you.</p>
          </div>
          <div className="step">
            <h3>3. Contribute and Connect</h3>
            <p>Share your insights, ask questions, and collaborate with peers.</p>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <h3>Is this platform free to use?</h3>
          <p>Yes, our platform is completely free for all users.</p>
        </div>
        <div className="faq">
          <h3>Can I create private discussion groups?</h3>
          <p>Yes, you can create and manage private groups for focused discussions.</p>
        </div>
        <div className="faq">
          <h3>What topics can I discuss?</h3>
          <p>Our forum covers a wide range of topics, including technology, education,and more.</p>
        </div>
      </section>

      

      <Footer/>
    </div>
  )
}

export default Home