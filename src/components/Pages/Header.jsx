
// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo1.png';
import { FaTwitter, FaFacebookF, FaPinterestP, FaShoppingCart, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHome, FaInfoCircle, FaServicestack, FaNewspaper, FaStore, FaEnvelopeOpenText, FaMapMarkedAlt, FaUserTie, FaUserCircle } from 'react-icons/fa';

function Header() { 
  return (
    <header className="bg-gray-100 border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <NavLink to="/" className="w-36 font-bold text-green-600 ">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>
        <div className="flex gap-7 items-center space-x-4">
          <a href="#" className="text-black hover:text-blue-800 transform
              transition duration-500 hover:scale-150"><FaTwitter /></a>
          <a href="#" className="text-black hover:text-blue-400 transform
              transition duration-500 hover:scale-150"><FaFacebookF /></a>
          <a href="#" className="text-black hover:text-red-600 transform
              transition duration-500 hover:scale-150"><FaPinterestP /></a>
          <a href="#" className="text-black hover:text-rose-500 transform
              transition duration-500 hover:scale-150"><FaInstagram /></a>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2 ">
            <FaPhoneAlt className="text-green-600 transform
              transition duration-500 hover:scale-150" />
            <span><strong>+91 123456789</strong></span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-green-600 transform
              transition duration-500 hover:scale-150" />
            <span><strong>AlTitans@gmail.com</strong></span>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-green-600 transform
              transition duration-500 hover:scale-150" />
            <span><strong>BITM Ballari, Karnataka</strong></span>
          </div>
        </div>
      </div>
      <nav className="bg-gray-50">
        <div className="container mx-auto flex justify-between items-center py-2">
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/Home" className={({ isActive }) => (isActive ? "font-bold text-green-600" : "hover:text-green-600")}>
                <FaHome className="inline-block mr-1" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "font-bold text-green-600" : "hover:text-green-600")}>
                <FaInfoCircle className="inline-block mr-1" /> About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => (isActive ? "font-bold text-green-600" : "hover:text-green-600")}>
                <FaServicestack className="inline-block mr-1" /> Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/news" className={({ isActive }) => (isActive ? "font-bold text-green-600" : "hover:text-green-600")}>
                <FaNewspaper className="inline-block mr-1" /> News
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" className={({ isActive }) => (isActive ? "font-bold text-green-600" : "hover:text-green-600")}>
                <FaStore className="inline-block mr-1" /> Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/seller" className={({ isActive }) => (isActive ? "font-bold text-green-600" : "hover:text-green-600")}>
                <FaUserTie className="inline-block mr-1" /> Seller
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "font-bold text-green-600" : "hover:text-green-600")}>
                <FaEnvelopeOpenText className="inline-block mr-1" /> Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/maps" className={({ isActive }) => (isActive ? "font-bold text-green-600" : "hover:text-green-600")}>
                <FaMapMarkedAlt className="inline-block mr-1 " /> Maps
              </NavLink>
            </li>
            
          </ul>
          <div className="flex items-center space-x-4">
          <button className="hover:text-green-600">
                  <FaUserCircle className="inline-block mr-1" /> Profile
                </button>
            {/* <button className="hover:text-green-600"><FaSearch /></button> */}
            <button className="relative hover:text-green-600">
              <FaShoppingCart />
              <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
