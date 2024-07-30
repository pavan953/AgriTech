import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import google from '../../assets/search.png';
import mac from '../../assets/mac.png';
import { Link, useNavigate } from 'react-router-dom';
import Notification from './Notification';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setNotification({ message: data.message, type: 'success' });
        localStorage.setItem('token', data.token);
        setTimeout(() => navigate('/home'), 3000); // Delay navigation to show the notification
      } else {
        setNotification({ message: data.message, type: 'error' });
      }
    } catch (error) {
      setNotification({ message: 'An error occurred while logging in. Please try again.', type: 'error' });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex' }}>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px' }}>
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div>
            <h2 style={{ marginTop: '24px', fontSize: '24px', fontWeight: 'bold', color: '#1a202c' }}>Welcome back!</h2>
            <p style={{ marginTop: '8px', fontSize: '14px', color: '#4a5568' }}>
              Enter your credentials to access your account
            </p>
          </div>
          <div style={{ marginTop: '32px' }}>
            <form style={{ marginTop: '24px' }} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" style={{ display: 'block', fontSize: '14px', fontWeight: 'medium', color: '#4a5568' }}>Email address</label>
                <div style={{ marginTop: '8px' }}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    style={{ display: 'block', width: '100%', padding: '8px', border: '1px solid #cbd5e0', borderRadius: '4px', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', fontSize: '14px', color: '#4a5568' }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <label htmlFor="password" style={{ display: 'block', fontSize: '14px', fontWeight: 'medium', color: '#4a5568' }}>Password</label>
                <div style={{ marginTop: '8px' }}>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    style={{ display: 'block', width: '100%', padding: '8px', border: '1px solid #cbd5e0', borderRadius: '4px', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', fontSize: '14px', color: '#4a5568' }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer' }}
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEye/> : <FaEyeSlash />}
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input id="remember_me" name="remember_me" type="checkbox" style={{ height: '16px', width: '16px', color: '#5a67d8', border: '1px solid #cbd5e0', borderRadius: '4px' }} />
                    <label htmlFor="remember_me" style={{ marginLeft: '8px', fontSize: '14px', color: '#4a5568' }}> Remember for 30 days </label>
                  </div>
                  <div style={{ fontSize: '14px' }}>
                    <a href="#" style={{ fontWeight: 'medium', color: '#5a67d8', textDecoration: 'none' }}> Forgot your password? </a>
                  </div>
                </div>
              </div>
              <div>
                <button type="submit" style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '8px 16px', border: 'none', borderRadius: '4px', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', fontSize: '14px', fontWeight: 'medium', color: '#fff', backgroundColor: '#48bb78', cursor: 'pointer', marginTop: '16px' }}>Login</button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button type="button" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px 16px', border: '1px solid #cbd5e0', borderRadius: '4px', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', fontSize: '14px', color: '#4a5568', backgroundColor: '#fff' }}>
                    <img className="w-5 h-5" src={google} alt="Google" />
                    <span style={{ marginLeft: '8px' }}>Sign in with Google</span>
                  </button>
                  <button type="button" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px 16px', border: '1px solid #cbd5e0', borderRadius: '4px', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', fontSize: '14px', color: '#4a5568', backgroundColor: '#fff' }}>
                    <img className="w-5 h-5" src={mac} alt="Apple" />
                    <span style={{ marginLeft: '8px' }}>Sign in with Apple</span>
                  </button>
                </div>
              </div>
            </form>
            <p style={{ marginTop: '24px', textAlign: 'center', fontSize: '14px', color: '#4a5568' }}>
              Don't have an account? <Link to="/signup" style={{ fontWeight: 'medium', color: '#5a67d8', textDecoration: 'none' }}>Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
