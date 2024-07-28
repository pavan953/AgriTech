import { useLocation, useParams } from 'react-router-dom';

const ProductPage = () => {
  const { productId } = useParams();
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded"
        />
        <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
        <p className="text-gray-700">Rs.{product.price}</p>
        <p className="text-gray-500 mt-2">{product.description}</p>
        
        <div className="mt-4 flex items-center space-x-2">
          <button className="bg-green-500 text-white px-4 py-2 rounded">Add to cart</button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded">Add to wishlist</button>
        </div>
        
        <div className="mt-4">
          <p className="text-gray-700">Description</p>
          <p className="text-gray-500 mt-2">{product.description}</p>
        </div>
        
        <div className="mt-4">
          <h3 className="text-xl font-bold">1 review for {product.name}</h3>
          <div className="mt-2 p-4 bg-gray-100 rounded">
            <p className="font-bold">Kevin Martin</p>
            <p className="text-gray-500">July 10, 2022</p>
            <p className="text-gray-700 mt-2">It has survived not only...</p>
          </div>
        </div>
        
        <div className="mt-4">
          <h3 className="text-xl font-bold">Add a review</h3>
          <form className="mt-2 space-y-2">
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your review"
            />
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Email Address"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
