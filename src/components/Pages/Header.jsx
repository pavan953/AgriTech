import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo1.png';
import { FaShoppingCart, FaHome, FaInfoCircle, FaServicestack, FaNewspaper, FaStore, FaEnvelopeOpenText, FaMapMarkedAlt, FaUserTie, FaUserCircle, FaShieldAlt, FaChevronDown } from 'react-icons/fa';
import AiAssistanceButton from './Aiassistance';
import { useState, useEffect, useRef } from 'react';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef, profileDropdownRef]);

  return (
    <header className="bg-beige border-b border-gray-300 top-0 sticky z-20">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <NavLink to="/home" className="w-72 font-bold text-green-600">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>
        <div className="hidden md:flex items-center space-x-6">
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
                <li className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center space-x-1 hover:text-green-600"
                  >
                    <FaServicestack className="inline-block mr-1" /> Services <FaChevronDown />
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-300 shadow-lg">
                      <li>
                        <NavLink to="/services" className="block px-4 py-2 hover:bg-green-100" onClick={() => setDropdownOpen(false)}>
                          Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/shop" className="block px-4 py-2 hover:bg-green-100" onClick={() => setDropdownOpen(false)}>
                          <FaStore className="inline-block mr-1" /> Shop
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/seller" className="block px-4 py-2 hover:bg-green-100" onClick={() => setDropdownOpen(false)}>
                          <FaUserTie className="inline-block mr-1" /> Seller
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="https://cropinsurance.streamlit.app/" className="block px-4 py-2 hover:bg-green-100" onClick={() => setDropdownOpen(false)}>
                          <FaShieldAlt className="inline-block mr-1" /> Insurance
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <NavLink to="/news" className={({ isActive }) => (isActive ? "font-bold text-green-600" : "hover:text-green-600")}>
                    <FaNewspaper className="inline-block mr-1" /> News
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
                <AiAssistanceButton />
                <button className="relative hover:text-green-600">
                  <FaShoppingCart />
                  <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
                </button>
              </div>
            </div>
          </nav>
          <div className="relative" ref={profileDropdownRef}>
            <button onClick={() => setProfileDropdownOpen(!profileDropdownOpen)} className="hover:text-green-600">
              <FaUserCircle className="inline-block mr-1 text-4xl" />
            </button>
            {profileDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white rounded border-gray-300 shadow-lg">
                <li>
                  <NavLink to="/profile" className="block px-4 py-2 hover:bg-green-100" onClick={() => setProfileDropdownOpen(false)}>
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/settings" className="block px-4 py-2 hover:bg-green-100" onClick={() => setProfileDropdownOpen(false)}>
                    Settings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="block px-4 py-2 hover:bg-green-100" onClick={() => setProfileDropdownOpen(false)}>
                    Logout
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
