// import React from 'react';
// import Bgk from '../../assets/Bgk.jpeg';
import Argonomy from '../../assets/Argonomy.jpeg';
import Bring from '../../assets/bring.jpeg';
import Future from '../../assets/future.jpeg';
// import Bgk from '../../assets/Bgk.jpeg';

// BlogPost Component
const BlogPost = ({ title, date, author, comments, excerpt, imageUrl }) => (
  <div className="mb-8">
    <img src={imageUrl} alt={title} className="w-full h-96 object-cover mb-4 rounded-lg" />
    <div className="flex justify-between items-center mb-2">
      <span className="text-green-700 bg-green-100 py-1 px-2 rounded">{date}</span>
      <span className="text-gray-600">{author}</span>
      <span className="text-gray-600">{comments} Comments</span>
    </div>
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="text-gray-700">{excerpt}</p>
    <a href="#" className="text-green-600 mt-2 inline-block">Read More</a>
  </div>
);

// Sidebar Component
const Sidebar = () => (
  <aside className="w-full lg:w-1/3 bg-white p-8 rounded-lg">
    <div className="mb-8  ">
      <input
        type="text"
        placeholder="Search here..."
        className="w-full p-2 border rounded-md"
      />
    </div>
    <div className="mb-8 w-full lg:w-4/4 bg-neutral-200 p-8 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Latest Posts</h3>
      <ul>
        <li className="mb-4 bg-white">
          <a href="#" className="flex">
            <img
              src={Bring}
              alt="Post"
              className="w-16 h-16 object-cover rounded mr-4"
            />
            <div>
              <h4 className="text-md font-semibold">Bringing Food Production Back To Cities</h4>
              <span className="text-gray-600 text-sm">by Kevin Martin</span>
            </div>
          </a>
        </li>
        {/* Add more latest posts here */}
        <li className="mb-4 bg-white">
          <a href="#" className="flex">
            <img
              src={Future}
              alt="Post"
              className="w-16 h-16 object-cover rounded mr-4"
            />
            <div>
              <h4 className="text-md font-semibold">Bringing Food Production Back To Cities</h4>
              <span className="text-gray-600 text-sm">by Kevin Martin</span>
            </div>
          </a>
        </li>
        <li className="mb-4 bg-white">
          <a href="#" className="flex">
            <img
              src={Argonomy}
              alt="Post"
              className="w-16 h-16 object-cover rounded mr-4"
            />
            <div>
              <h4 className="text-md font-semibold">Bringing Food Production Back To Cities</h4>
              <span className="text-gray-600 text-sm">by Kevin Martin</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div className="mb-8 w-full lg:w-4/4 bg-neutral-200 p-8 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Categories</h3>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-700">Agriculture</a></li>
        <li><a href="#" className="text-gray-700">Farm</a></li>
        <li><a href="#" className="text-gray-700">Farming</a></li>
        <li><a href="#" className="text-gray-700">Fresh Vegetables</a></li>
        <li><a href="#" className="text-gray-700">Harvest</a></li>
        {/* Add more categories here */}
      </ul>
    </div>
    <div className="mb-8 w-full lg:w-4/4 bg-neutral-200 p-8 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Tags</h3>
      <div className="flex flex-wrap">
        <span className="bg-white text-gray-700 py-1 px-2 rounded mr-2 mb-2">Agriculture</span><span className="bg-white text-gray-700 py-1 px-2 rounded mr-2 mb-2">Farming</span>
        <span className="bg-white text-gray-700 py-1 px-2 rounded mr-2 mb-2">Fresh Vegetables</span>
        <span className="bg-white text-gray-700 py-1 px-2 rounded mr-2 mb-2">Harvest</span><span className="bg-white text-gray-700 py-1 px-2 rounded mr-2 mb-2">Organic</span>
        {/* Add more tags here */}
      </div>
    </div>
  </aside>
);

// Blog Component
const Blog = () => (
  <section className="bg-cover bg-center py-8" >
    <div className="container mx-auto flex flex-col lg:flex-row">
      <div className="w-full lg:w-2/3 pr-0 lg:pr-8">
        <BlogPost
          title="Bringing Food Production Back To Cities"
          date="05 July 2022"
          author="Kevin Martin"
          comments="1"
          excerpt="Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum."
          imageUrl={Bring}
        />
        <BlogPost
          title="The Future of Farming, Smart Irrigation Solutions"
          date="05 July 2022"
          author="Kevin Martin"
          comments="0"
          excerpt="Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum."
          imageUrl={Future}
        />
        <BlogPost
          title="Agronomy and relation to Other Sciences"
          date="05 July 2022"
          author="Kevin Martin"
          comments="0"
          excerpt="Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum."
          imageUrl={Argonomy}
        />
        <div className="flex justify-center mt-8">
          <button className="px-4 py-2 bg-green-500 text-white rounded-md">1</button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md ml-2">2</button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md ml-2">&gt;</button>
        </div>
      </div>
      <Sidebar />
    </div>
  </section>
);

export default Blog;
