// import React from 'react'
import Apples from '../../assets/A.jpeg';
// import tamato from '../../assets/Tamato.jpeg';
import onions from '../../assets/o.jpg';
import carrot from '../../assets/carrot.jpg';
import garlic from '../../assets/garlic.jpg';
import grapes from '../../assets/grapes.jpg';
// import readgrapes from '../../assets/redgrapes.jpg';
// import potato from '../../assets/potato.jpg';
import lettuce from '../../assets/lettuce.jpg';
import Thuman from '../../assets/Thuman.jpeg'
// import cucumber from '../../assets/Cucumber.jpeg';
// import Ladies_finger from '../../assets/Ladies_finger.jpeg'
// import broccoli from '../../assets/broccoli.jpeg'

const App = () => {
  return (
    <div className="flex flex-col md:flex-row items-start p-8 bg-white">
      {/* Profile Section */}
      <div className="md:w-1/3 p-4 border-r border-gray-300">
        <div className="flex flex-col items-center">
          <img
            src={Thuman}
            alt="Profile"
            className="rounded-full w-24 h-24 mb-4"
          />
          <div className="w-full">
            <div className="mb-2">
              <label className="block text-gray-600">Name</label>
              <div className="border-b border-gray-300">Tuman</div>
            </div>
            <div className="mb-2">
              <label className="block text-gray-600">Email</label>
              <div className="border-b border-gray-300">Tuman@gmail.com</div>
            </div>
            <div className="mb-2">
              <label className="block text-gray-600">Phone number</label>
              <div className="border-b border-gray-300">123-456-7890</div>
            </div>
            <div className="mb-2">
              <label className="block text-gray-600">Shop Name</label>
              <div className="border-b border-gray-300">Tuman Farm</div>
            </div>
          </div>
          <div className="mt-8 w-full h-48 border border-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Chart Box</span>
          </div>
        </div>
      </div>
      {/* Products Section */}
      <div className="md:w-2/3 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { name: 'Apples', price: 50, img: Apples },
          { name: 'Carrot', price: 50, img: carrot },
          { name: 'Garlic', price: 20, img: garlic },
          { name: 'Grapes', price: 100, img: grapes },
          { name: 'Lettuce', price: 30, img: lettuce },
          { name: 'Onions', price: 20, img: onions },
        ].map((product, index) => (
          <div key={index} className="border rounded-lg p-4 flex flex-col items-center">
            <img src={product.img} alt={product.name} className="w-24 h-24 mb-2" />
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600">Rs.{product.price}</p>
            <div className="flex mt-2">
              <button className="mr-2 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
              <button className="text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
