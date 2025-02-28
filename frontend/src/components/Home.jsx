import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

function Home() {
  return (
    <div>
      <nav className="navbar" style={{marginBottom:"10px"}}>
        <div className="logo">
          <h2>My Notebook</h2>
        </div>
        <div className="nav-links">
          <Link to="/login" className="nav-button">Sign In</Link>
          <Link to="/signup" className="nav-button register-btn">Register</Link>
        </div>
      </nav>

      <div className="hero">
        <h1>Seamless Team Collaboration on Documents</h1>
        <p>Work together, edit in real-time, and manage your documents efficiently.</p>
        <Link to="/signup" className="cta-button">Get Started for Free</Link>
      </div>
      <div className="features">
        <div className="feature-box">
          <h3>Real-Time Collaboration</h3>
          <p>Edit documents simultaneously with your team and see changes instantly.</p>
        </div>
        <div className="feature-box">
          <h3>Version Control</h3>
          <p>Track document revisions, restore previous versions, and never lose your work.</p>
        </div>
        <div className="feature-box">
          <h3>Secure Cloud Storage</h3>
          <p>Your documents are stored safely and can be accessed from anywhere.</p>
        </div>
        <div className="feature-box">
          <h3>Easy Sharing</h3>
          <p>Share documents with teammates and set permissions for view or edit access.</p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 DocuCollab. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
