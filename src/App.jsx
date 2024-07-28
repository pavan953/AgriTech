// import { Route, Routes } from "react-router-dom"
// import Layout from "./components/Layout/Layout.jsx"
// import Home from "./components/Pages/Home.jsx"
// import About from './components/Pages/about.jsx'
// import Services from "./components/Pages/services.jsx"
// import Projects from "./components/Pages/projects.jsx"
// import Shop from './components/Pages/Shop.jsx'
// import Contact from './components/Pages/Contact.jsx'
// import MapComponent from './components/Pages/Maps.jsx'
// import Blog from './components/Pages/News.jsx'
// import Seller from './components/Pages/Seller.jsx';
// import Login from './components/Pages/LoginPage.jsx';
// import Register from './components/Pages/SignupPage.jsx';
// import LandingPage from "./components/Pages/LandingPage.jsx"
// // function App() {

// //   return (
// //     <Routes>
// //       <Route path="/" element={<LandingPage />}/>
// //       <Route path="/login" element={<Login />} />
// //       <Route path="/signup" element={<Register />} />
// //       <Route path="/" element={<Layout />} >
// //         <Route path=" " element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/services" element={<Services />} />
// //         <Route path="/projects" element={<Projects />} />
// //         <Route path="/Shop" element={<Shop/>}/>
// //         <Route path="/Contact" element={<Contact/>} />/
// //         <Route path="/Maps" element={<MapComponent />} />
// //         <Route path="/News" element={<Blog />} />
// //         <Route path="/seller/:productName" component={<Seller/>} />
// //         {/* <Route path="/shop" component={Shop} /> */}
// //       </Route>
// //     </Routes>
// //   )
// // }

// // export default App
// // import { Routes, Route } from 'react-router-dom';
// // import LandingPage from './components/LandingPage';
// // import Login from './components/Login';
// // import Register from './components/Register';
// // import Layout from './components/Layout';
// // import Home from './components/Home';
// // import About from './components/About';
// // import Services from './components/Services';
// // import Projects from './components/Projects';
// // import Shop from './components/Shop';
// // import Contact from './components/Contact';
// // import MapComponent from './components/MapComponent';
// // import Blog from './components/Blog';
// // import Seller from './components/Seller';

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route index element={<LandingPage />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Register />} />
//       <Route path="" element={<Layout />}>
//         <Route path="/Home" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="services" element={<Services />} />
//         <Route path="projects" element={<Projects />} />
//         <Route path="shop" element={<Shop />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="maps" element={<MapComponent />} />
//         <Route path="news" element={<Blog />} />
//         <Route path="seller/:productName" element={<Seller />} />
//       </Route>
//     </Routes>
//   );
// };

// export default AppRoutes;
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./components/Pages/Home.jsx";
import About from './components/Pages/about.jsx';
import Services from "./components/Pages/services.jsx";
// import Projects from "./components/Pages/projects.jsx";
import Shop from './components/Pages/Shop.jsx';
import Contact from './components/Pages/Contact.jsx';
import MapComponent from './components/Pages/Maps.jsx';
import Blog from './components/Pages/News.jsx';
import Seller from './components/Pages/Seller.jsx';
import Login from './components/Pages/LoginPage.jsx';
import Register from './components/Pages/SignupPage.jsx';
import LandingPage from "./components/Pages/LandingPage.jsx";

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
      </Route>
    </Routes>
  );
};

export default AppRoutes;
