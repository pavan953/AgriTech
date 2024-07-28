import bg2 from '../../assets/bg2.jpg'
import Bgk from '../../assets/Bgk.jpeg'
// import React from 'react';
import { Link } from 'react-router-dom'; 
function About() {
  return (
    <section  className="relative bg-cover bg-center h-50"  style={{ backgroundImage: `url(${Bgk})` }}>
    <div className="flex flex-col md:flex-row items-center p-8">
      <div className="relative w-full md:w-1/2 p-4">
        <img src={bg2} alt="Tractor" className="rounded-lg shadow-lg w-full h-auto" />
        {/* <img src={AboutFramer} alt="Farmer" className="absolute left-4 bottom-4 rounded-lg shadow-lg w-1/2 h-48" /> */}
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-4xl font-bold mb-4 text-yellow-600">Get to Know Us</h2>
        <h1 className="text-5xl font-bold mb-4">The Best Agriculture Market</h1>
        <p className="text-green-500 text-lg mb-4">There are many variations of passa of lorem available, but the majority have suffered alteration.</p>
        <p className="text-gray-700 mb-4">There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word which don't look even.</p>
        <ul className="list-inside list-disc mb-4">
          <li>Suspe ndsise suscipit sagittis leo</li>
          <li>Entum estibulum dignissim posuere</li>
          <li>Lorem Ipsum on the tend to repeat</li>
        </ul>
        <Link to="/about" className="bg-green-500 text-white px-4 py-2 rounded-lg">Discover More</Link>
      </div>
    </div>
     </section>
  );
}

export default About;
