import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import Apples from '../../assets/A.jpeg';
import tamato from '../../assets/Tamato.jpeg';
import onions from '../../assets/o.jpg';
import carrot from '../../assets/carrot.jpg';
import garlic from '../../assets/garlic.jpg';
import grapes from '../../assets/grapes.jpg';
import readgrapes from '../../assets/redgrapes.jpg';
import potato from '../../assets/potato.jpg';
import lettuce from '../../assets/lettuce.jpg';
import cucumber from '../../assets/Cucumber.jpeg';
import Ladies_finger from '../../assets/Ladies_finger.jpeg'
import broccoli from '../../assets/broccoli.jpeg'

const FilterSidebar = () => {
  return (
    <aside className="w-1/4 p-4">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <div>
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" />
          Fresh Fruits
        </label>
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" />
          Grocery Items
        </label>
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" />
          Organic Foods
        </label>
      </div>
      <button className="mt-8 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
           <Link to='/About'>Apply Now</Link>
          </button>
      {/* <h3>Rs.</h3> */}
      {/* <input type="range" min="0" max="100" className="w-full "/> */}
    </aside>
  );
};

// const ProductCard = ({ name, price, image }) => {
//   const navigate = useNavigate();

  const ProductCard = ({ name, price, image, id }) => {
    const navigate = useNavigate();
  
    const handleBuyNow = () => {
      navigate(`/product/${id}`, { state: { product: { name, price, image, id } } });
    };
  
    return (
      <div className="max-w-xs rounded overflow-hidden shadow-lg m-2 transform transition duration-500 hover:scale-105" onClick={handleBuyNow}>
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="px-6 py-4">
          <p className="font-bold text-xl mb-2">{name}</p>
          <p className="text-gray-700">Rs.{price}</p>
        </div>
        <div className="px-6 py-4 flex justify-between items-center">
          <button className="text-white bg-green-500 p-2 rounded-full">
            <FaShoppingCart />
          </button>
          <button className="text-red-500 p-2 rounded-full">
            <FaHeart />
          </button>
        </div>
      </div>
    );
  };

// export default ProductCard;

// const ProductGrid = () => {
  const ProductGrid = () => {
    const products = [
      { id: 1, name: 'Apples', price: 50, image: Apples },
      { id: 2, name: 'Carrot', price: 50, image: carrot },
      { id: 3, name: 'Garlic', price: 20, image: garlic },
      { id: 4, name: 'Grapes', price: 100, image: grapes },
      { id: 5, name: 'Lettuce', price: 30, image: lettuce },
      { id: 6, name: 'Onions', price: 20, image: onions },
      { id: 7, name: 'Potatoes', price: 30, image: potato },
      { id: 8, name: 'Tamato', price: 50, image: tamato },
      { id: 9, name: 'Red Grapes', price: 70, image: readgrapes },
      { id: 10, name: 'Broccoli', price: 100, image: broccoli },
      { id: 11, name: 'Cucumber', price: 50, image: cucumber },
      { id: 12, name: 'Ladies finger', price: 60, image: Ladies_finger },
    ];
  
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    const currentProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  
    return (
      <div>
        <div className="flex flex-wrap -mx-2">
          {currentProducts.map((product) => (
            <div key={product.id} className="w-1/3 px-2">
              <ProductCard name={product.name} price={product.price} image={product.image} id={product.id} />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {[...Array(Math.ceil(products.length / itemsPerPage)).keys()].map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page + 1)}
              className={`px-2 py-1 mx-1 rounded ${currentPage === page + 1 ? 'hover:bg-green-400 bg-gray-200' : 'hover:bg-green-400 bg-gray-200'}`}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
const Shop = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex">
      <FilterSidebar />
      <ProductGrid />
    </div>
  );
};

export default Shop;
