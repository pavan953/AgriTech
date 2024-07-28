import { Link } from 'react-router-dom'
import LandingPage1 from '../../assets/landingpage.mp4'
export default function LandingPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={LandingPage1}
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-white text-center"> "Farmers are the lifeblood of our land, cultivating the seeds of hope and nurturing the roots of prosperity. Their hands weave the fabric of our sustenance, and their dedication feeds the world."</h1>
        <h4 className="text-1xl p-16 font-bold text-white text-center">Wellcome To Kisan Sevak </h4>
        <div className="absolute bottom-10 right-10 space-x-4">
          <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-md">Log In</Link>
          <Link to="/signup" className="px-4 py-2 bg-green-500 text-white rounded-md">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}
