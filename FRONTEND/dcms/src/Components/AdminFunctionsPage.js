import React from 'react';
import { Link } from 'react-router-dom';

import './Styles/AdminFunctions.css';
const AdminFunctionsPage = () => {



  const handleLogout = () => {
    // Perform any logout actions if needed
    // For now, simply redirect to the homepage
    window.location.href = '/';
  };

  return (
    <div className="admin-page">
      <h1>Admin Functions</h1>
      <div className="link-container">
        <Link to="/members" className="link">
          Members
        </Link>
        <Link to="/instructors" className="link">
          Instructors
        </Link>
        <Link to="/users" className="link">
          Users
        </Link>
        <Link to="/mtype" className="link">
          Membership Types
        </Link>
        <Link to="/" className="logout-button" onClick={handleLogout}>
        Logout
      </Link>
      </div>
    </div>
  );
};

export default AdminFunctionsPage;
