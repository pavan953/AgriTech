// import google from '../../assets/search.png'
// import mac from '../../assets/mac.png'
// // import LandingPage1 from '../../assets/landingpage.mp4'
// import bac from '../../assets/logbac.jpeg'
// import { Link } from 'react-router-dom';
// // import Layout from '../Layout/Layout.jsx';
// // import layout from '../Layout/Layout';
// export default function LoginPage() {
//     return (
        
//       <div className="min-h-screen flex">
//         <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
//           <div className="mx-auto w-full max-w-sm lg:w-96">
//             <div>
//               <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Welcome back!</h2>
//               <p className="mt-2 text-sm text-gray-600">
//                 Enter your credentials to access your account
//               </p>
//             </div>
//             <div className="mt-8">
//               <div className="mt-6">
//                 <form className="space-y-6">
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
//                     <div className="mt-1">
//                       <input id="email" name="email" type="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//                     </div>
//                   </div>
//                   <div>
//                     <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//                     <div className="mt-1">
//                       <input id="password" name="password" type="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center">
//                         <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
//                         <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900"> Remember for 30 days </label>
//                       </div>
//                       <div className="text-sm">
//                         <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <Link to={"/home"} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</Link>
//                   </div>
//                   <div className="flex items-center justify-center">
//                     <div className="flex space-x-2">
//                       <button type="button" className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
//                         <img className="w-5 h-5" src={google} alt="Google" />
//                         <span className="ml-2">Sign in with Google</span>
//                       </button>
//                       <button type="button" className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
//                         <img className="w-5 h-5" src={mac} alt="Apple" />
//                         <span className="ml-2">Sign in with Apple</span>
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//                 <p className="mt-6 text-center text-sm text-gray-600">
//                   Dont have an account? <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">Sign Up</a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="hidden lg:block relative w-0 flex-1">
//           <img className="absolute inset-0 h-full w-full object-cover" src={bac} alt="Background" />
//         </div>
//       </div>
//     //   </div>
//     )
//   }
// import  { useState } from 'react';
// import google from '../../assets/search.png';
// import mac from '../../assets/mac.png';
// // import bac from '../../assets/logbac.jpeg';
// import { Link, useNavigate } from 'react-router-dom';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert(data.message);
//         localStorage.setItem('token', data.token);
//         navigate('/home');
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       alert('An error occurred while logging in. Please try again.');
//     }
//   };

//   return (
//     <div style={{ minHeight: '100vh', display: 'flex' }}>
//       <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px' }}>
//         <div style={{ maxWidth: '400px', margin: '0 auto' }}>
//           <div>
//             <h2 style={{ marginTop: '24px', fontSize: '24px', fontWeight: 'bold', color: '#1a202c' }}>Welcome back!</h2>
//             <p style={{ marginTop: '8px', fontSize: '14px', color: '#4a5568' }}>
//               Enter your credentials to access your account
//             </p>
//           </div>
//           <div style={{ marginTop: '32px' }}>
//             <form style={{ marginTop: '24px' }} onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="email" style={{ display: 'block', fontSize: '14px', fontWeight: 'medium', color: '#4a5568' }}>Email address</label>
//                 <div style={{ marginTop: '8px' }}>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     style={{ display: 'block', width: '100%', padding: '8px', border: '1px solid #cbd5e0', borderRadius: '4px', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', fontSize: '14px', color: '#4a5568' }}
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="password" style={{ display: 'block', fontSize: '14px', fontWeight: 'medium', color: '#4a5568' }}>Password</label>
//                 <div style={{ marginTop: '8px' }}>
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     required
//                     style={{ display: 'block', width: '100%', padding: '8px', border: '1px solid #cbd5e0', borderRadius: '4px', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', fontSize: '14px', color: '#4a5568' }}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
//                   <div style={{ display: 'flex', alignItems: 'center' }}>
//                     <input id="remember_me" name="remember_me" type="checkbox" style={{ height: '16px', width: '16px', color: '#5a67d8', border: '1px solid #cbd5e0', borderRadius: '4px' }} />
//                     <label htmlFor="remember_me" style={{ marginLeft: '8px', fontSize: '14px', color: '#4a5568' }}> Remember for 30 days </label>
//                   </div>
//                   <div style={{ fontSize: '14px' }}>
//                     <a href="#" style={{ fontWeight: 'medium', color: '#5a67d8', textDecoration: 'none' }}> Forgot your password? </a>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <button type="submit" style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '8px 16px', border: 'none', borderRadius: '4px', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', fontSize: '14px', fontWeight: 'medium', color: '#fff', backgroundColor: '#48bb78', cursor: 'pointer', marginTop: '16px' }}>Login</button>
//               </div>
//               <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
//                 <div style={{ display: 'flex', gap: '8px' }}>
//                   <button type="button" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px 16px', border: '1px solid #cbd5e0', borderRadius: '4px', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', fontSize: '14px', color: '#4a5568', backgroundColor: '#fff' }}>
//                     <img className="w-5 h-5" src={google} alt="Google" />
//                     <span style={{ marginLeft: '8px' }}>Sign in with Google</span>
//                   </button>
//                   <button type="button" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px 16px', border: '1px solid #cbd5e0', borderRadius: '4px', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', fontSize: '14px', color: '#4a5568', backgroundColor: '#fff' }}>
//                     <img className="w-5 h-5" src={mac} alt="Apple" />
//                     <span style={{ marginLeft: '8px' }}>Sign in with Apple</span>
//                   </button>
//                 </div>
//               </div>
//             </form>
//             <p style={{ marginTop: '24px', textAlign: 'center', fontSize: '14px', color: '#4a5568' }}>
//               Don't have an account? <Link to="/signup" style={{ fontWeight: 'medium', color: '#5a67d8', textDecoration: 'none' }}>Sign up</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
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
