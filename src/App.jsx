
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./components/Pages/Home.jsx";
import About from './components/Pages/about.jsx';
import Services from "./components/Pages/services.jsx";
import Shop from './components/Pages/Shop.jsx';
import Contact from './components/Pages/Contact.jsx';
import MapComponent from './components/Pages/Maps.jsx';
import Blog from './components/Pages/News.jsx';
import Seller from './components/Pages/Seller.jsx';
import Login from './components/Pages/LoginPage.jsx';
import Register from './components/Pages/SignupPage.jsx';
import LandingPage from "./components/Pages/LandingPage.jsx";
// import PrivateRoute from './components/PrivateRoute';
import SignUp from "./components/Pages/SignupPage.jsx";
import Enable2FA from './components/Pages/Enable2FA';
import Verify2FA from './components/Pages/Verify2FA';
// import Profile from './components/Pages/Profile.jsx';
// import './components/Pages/i18n.jsx';
import './App.css';
 

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/" element={<Layout />}>
        <Route  path='/Home' element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        {/* <Route path="projects" element={<Projects />} /> */}
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="maps" element={<MapComponent />} />
        <Route path="news" element={<Blog />} />
        <Route path="seller" element={<Seller />} />
        <Route path='/sign-up' element={<SignUp />} />
        {/* <Route element={<PrivateRoute />}> */}
        <Route path="/enable-2fa" element={<Enable2FA />} />
        <Route path="/verify-2fa" element={<Verify2FA />} />
          {/* <Route path='/profile' element={<Profile />} /> */}
        </Route>
        {/* <Route path="insurance" element={<Insurance />} /> */}
        {/* <Route path="ChatBot" element={<ChatBot/>}/> */}
      {/* </Route> */}
    </Routes>
  );
};

export default AppRoutes;
