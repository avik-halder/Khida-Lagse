import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { FaCircleUser } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import './Navbar.css';

const Navbar = ({setIsAuthenticated }) => {
  const navigate = useNavigate();
  const location = useLocation(); 

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <div className='navbar'>
      <div className='logo-container'>
        <img className='logo' src={assets.logo} alt="Logo" />
        <span className='admin-panel-text'>Admin Panel</span>
      </div>
      <div className="button">
        {location.pathname !== '/' && (
          <>
            <Link to='/profile'>
              <FaCircleUser />
            </Link>
            <IoLogOut 
              style={{ marginLeft: "20px", cursor: 'pointer' }} 
              onClick={handleLogout} 
              title="Logout"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;