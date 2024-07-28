import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
// import { Outlet, Link, NavLink } from 'react-router-dom';
// import Header from '../Pages/H';
// // import logo from '../../assets/logo1.png';
// // import { FaTwitter, FaFacebookF, FaPinterestP, FaShoppingCart, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHome, FaInfoCircle, FaServicestack, FaProjectDiagram, FaNewspaper, FaStore, FaEnvelopeOpenText, FaMapMarkedAlt, FaUserTie } from 'react-icons/fa';

// const Layout = () => {
//   return (
//     <>
//       <Header />
//       <div className="container mx-auto">
//         <Outlet />
//       </div>
//     </>
//   );
// };

// export default Layout;
