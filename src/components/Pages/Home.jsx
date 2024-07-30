import { Link } from 'react-router-dom';
// import bg from '../../assets/bg1.jpg'
import bgv from "../../assets/bgv.mp4"
import Ai_agri from '../../assets/ai_agri.jpeg'
import smt_organic from '../../assets/smt_organic.jpeg'
import reforming from '../../assets/reforming.jpg'
import service_02 from '../../assets/service-02.jpg'
import Arganomy from '../../assets/Arganomy.jpg'
import agri_prd from '../../assets/agri_prd.jpeg'
import Agritech from '../../assets/Agritech.png'
import Fresh from '../../assets/fresh.jpeg'
import Dairy from '../../assets/Dairy.jpeg'
import Thuman from '../../assets/Thuman.jpeg'
import adhitya from '../../assets/adhitya.png'
import Eco from '../../assets/eco.jpeg'
import AboutFramer from '../../assets/AboutFramer.jpg'
import Organic from '../../assets/org.jpeg'
// import Bgk from '../../assets/Bgk.jpeg'
import AgriFarming from '../../assets/agri_Farm.jpeg'
import Easy from '../../assets/easy.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
  return (
    <div  className='bg-white w-full flex flex-col'>

<section className="relative bg-cover bg-center h-[90vh] flex items-center justify-center">
        <video src={bgv} autoPlay loop muted playsInline className='absolute inset-0 w-full h-full object-cover' />
        <div className="relative z-70 flex flex-col items-center text-center text-white px-4">
          <h1 className="text-5xl font-bold text-white hover:opacity-70 transition duration-500">WELCOME TO KISAN SEVAK</h1>
          <p className="mt-4 text-3xl hover:opacity-70 transition duration-500">Agriculture & Eco Farming</p>
          <p className="mt-4 max-w-2xl hover:opacity-70 transition duration-500">
            Farmer is the most healthful, most useful and most noble employment of man
          </p>
          <button className="mt-8 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
            <Link to='/About'>Discover More</Link>
          </button>
        </div>
      </section>

      <section className="py-12 bg-beige">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-green-100 rounded-lg">
              <h2 className="text-xl font-bold">Feature 01</h2>
              <p className="mt-2 text-lg">We are using a new technology</p>
              <img src={Ai_agri} alt="Feature 01" className="mt-4 mx-auto h-48 w-50 rounded transform
              transition duration-500 hover:scale-110" />
            </div>
            <div className="p-6 bg-green-100 rounded-lg">
              <h2 className="text-xl font-bold">Feature 02</h2>
              <p className="mt-2 text-lg">Good in smart organic services</p>
              <img src={smt_organic} alt="Feature 02" className="mt-4 mx-auto h-48 w-50 rounded transform
              transition duration-500 hover:scale-110" />
            </div>
            <div className="p-6 bg-green-100 rounded-lg">
              <h2 className="text-xl font-bold">Feature 03</h2>
              <p className="mt-2 text-lg">Reforming in the systems</p>
              <img src={reforming} alt="Feature 03" className="mt-4 mx-auto h-48 w-50 rounded transform
              transition duration-500 hover:scale-110" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-beige">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative">
              <img
                src={Agritech}
                alt="Agriculture"
                className='transform
              transition duration-500 hover:scale-110'
              />
            </div>
          </div>
          <div  className="lg:w-1/2 lg:pl-12  ">
            <h2 className="text-3xl font-bold text-green-700">Our Introductions</h2>
            <h1 className="text-5xl font-bold mt-4">Agriculture & Organic Product Farm</h1>
            <p className="text-lg text-gray-700 mt-4">Agrios is the largest global organic farm.</p>
            <p className="text-lg text-gray-700 mt-4">
              There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word which don’t look even.
            </p>
            <ul className="mt-4">
              <li className="flex items-center text-gray-700">
                <span className="mr-2">✔</span> Growing fruits vegetables
              </li>
              <li className="flex items-center text-gray-700 mt-2">
                <span className="mr-2">✔</span> Tips for ripening your fruits
              </li>
              <li className="flex items-center text-gray-700 mt-2">
                <span className="mr-2">✔</span> Lorem ipsum is not simply random text
              </li>
              <li className="flex items-center text-gray-700 mt-2">
                <span className="mr-2">✔</span> Making this the first true generator on the internet
              </li>
            </ul>
            <button className="mt-8 px-6 py-3 bg-white text-white rounded-lg hover:bg-green-600">
              Discover More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-beige">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700">Our Services</h2>
          <h1 className="text-5xl font-bold mt-4">What We Offer</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <img src={agri_prd} alt="Agriculture Products" className="h-40 w-full object-cover rounded-t-lg transform
              transition duration-500 hover:scale-110" />
              <h3 className="mt-4 text-xl font-bold">Agriculture Products</h3>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <img src={service_02} alt="Organic Products" className="h-40 w-full object-cover rounded-t-lg transform
              transition duration-500 hover:scale-110" />
              <h3 className="mt-4 text-xl font-bold">Organic Products</h3>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <img src={Fresh} alt="Fresh Vegetables" className="h-40 w-full object-cover rounded-t-lg transform
              transition duration-500 hover:scale-110" />
              <h3 className="mt-4 text-xl font-bold">Fresh Vegetables</h3>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <img src={Dairy} alt="Dairy Products" className="h-40 w-full object-cover rounded-t-lg transform
              transition duration-500 hover:scale-110" />
              <h3 className="mt-4 text-xl font-bold">Dairy Products</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-beige">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700">Recently Completed</h2>
          <h1 className="text-5xl font-bold mt-4">Explore Pojects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <img src={Easy} alt="Agriculture Products" className="h-96 w-full object-cover rounded-t-lg transform
              transition duration-500 hover:scale-110" />
              <h3 className="mt-4 text-xl font-bold">Agriculture Products</h3>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <img src={AgriFarming} alt="Organic Products" className="h-96 w-full object-cover rounded-t-lg transform
              transition duration-500 hover:scale-110" />
              <h3 className="mt-4 text-xl font-bold">Organic Products</h3>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <img src={Eco} alt="Fresh Vegetables" className="h-96 w-full object-cover rounded-t-lg transform
              transition duration-500 hover:scale-110" />
              <h3 className="mt-4 text-xl font-bold">Fresh Vegetables</h3>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <img src={Organic} alt="Dairy Products" className="h-96 w-full object-cover rounded-t-lg  transform
              transition duration-500 hover:scale-110" />
              <h3 className="mt-4 text-xl font-bold">Dairy Products</h3>
            </div>
          </div>
        </div>
      </section>
    <section className="py-16 bg-beige">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What They&apos;re Talking About KISAN SEVAK</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-x-4">
          <div className="relative bg-green-100 p-4 shadow rounded">
            <img
              src={Thuman}
              alt="Organic"
              className="absolute bottom-0 right-11 transform translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white object-cover transition duration-500 hover:scale-110"
            />
            <p>There are many variations of passages of available but the majortity have sufferred alteration in some form by injected humor or random word which don&apos;t look even.</p>
            <p className="font-bold mt-2">Tuman</p>
            <p className='text-yellow-400'>★★★★★ </p>
          </div>
          
          {/* Add more testimonial cards as needed */}
        <div className="flex flex-col md:flex-row justify-center items-center space-x-4">
          <div className="relative bg-green-100 p-4 shadow rounded ">
            <img
              src={adhitya}
              alt="Organic"
              className="absolute bottom-0 right-11 transform translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white object-cover transition duration-500 hover:scale-110"
            />
            <p>There are many variations of passages of available but the majority have suffered alteration in some form by injected humor or random word which dont look even.</p>
            <p className="font-bold mt-2">Adithya.M.Bharade</p>
            <p className='text-yellow-400'>★★★★★</p>
          </div>
          </div>
          {/* Add more testimonial cards as needed */}
          </div>
      </div>
    </section>
    <section className="container mx-auto py-8 bg-beige">
    <div className="flex flex-col md:flex-row items-center md:items-start p-8">
      <div className="md:w-1/2 p-4  bg-beige">
        <img src={AboutFramer} alt="Farmer" className="rounded-lg shadow-md transform transition duration-500 hover:scale-110" />
      </div>
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Kisan Sevak</h2>
        <p className="text-gray-600 mb-6">There are many variations of passages of available but the majority have suffered alteration in some form by injected humor or random word which don’t look even.</p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-green-600">Quality Organic Food</h3>
          <p className="text-gray-600">There are variation You need to be sure there is anything hidden in the middle of text.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-green-600">Professional Farmers</h3>
          <p className="text-gray-600">There are variation You need to be sure there is anything hidden in the middle of text.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-green-600">Quality Products</h3>
          <p className="text-gray-600">There are variation You need to be sure there is anything hidden in the middle of text.</p>
        </div>
        <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">Discover More</button>
      </div>
    </div>
    </section>
    <section className="container mx-auto py-16 bg-beige">
    <h5 className="text-xl font-bold text-center mb-8">From The Blog</h5>
      <h3 className="text-4xl font-bold text-center mb-8">News & Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-green-100 p-4 shadow rounded">
          <img src={Easy} alt="Article 1" className="w-full h-50 object-cover rounded mb-4 transform transition duration-500 hover:scale-105" />
          <div className="flex items-center justify-between mb-2">
            <span className="bg-green-600 text-white px-2 py-1 rounded">05 July 2022</span>
            <div>
              <span className="text-gray-500 mr-2">Kevin Martin</span>
              <span className="text-gray-500">1 Comment</span>
            </div>
          </div>
          <h4 className="font-bold">Bringing Food Production Back To Cities</h4>
        </div>
        <div className="bg-green-100 p-4 shadow rounded">
          <img src={service_02} alt="Article 2" className="w-full h-50 object-cover rounded mb-4 transform transition duration-500 hover:scale-105" />
          <div className="flex items-center justify-between mb-2">
            <span className="bg-green-600 text-white px-2 py-1 rounded">05 July 2022</span>
            <div>
              <span className="text-gray-500 mr-2">Kevin Martin</span>
              <span className="text-gray-500">0 Comments</span>
            </div>
          </div>
          <h4 className="font-bold">The Future of Farming, Smart Irrigation Solutions</h4>
        </div>
        <div className="bg-green-100 p-4 shadow rounded">
          <img src={Arganomy} alt="Article 3" className="w-full h-50 object-cover rounded mb-4 transform transition duration-500 hover:scale-105" />
          <div className="flex items-center justify-between mb-2">
            <span className="bg-green-600 text-white px-2 py-1 rounded">05 July 2022</span>
            <div>
              <span className="text-gray-500 mr-2">Kevin Martin</span>
              <span className="text-gray-500">0 Comments</span>
            </div>
          </div>
          <h4 className="font-bold">Agronomy and relation to Other Sciences</h4>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;
