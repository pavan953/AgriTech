import agri_prd from '../../assets/agri_prd.jpeg'
import orn_prd from '../../assets/service-02.jpg'
import Fresh from '../../assets/fresh.jpeg'
import Dairy from '../../assets/Dairy.jpeg'
import Bgk from '../../assets/Bgk.jpeg'


const Services = () => {
  return (
    <section className="py-16 bg-white" style={{ backgroundImage: `url(${Bgk})` }}>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700">Our Services</h2>
          <h1 className="text-5xl font-bold mt-4">What We Offer</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <img src={agri_prd} alt="Agriculture Products" className="h-40 w-full object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-bold">Agriculture Products</h3>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <img src={orn_prd} alt="Organic Products" className="h-40 w-full object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-bold">Organic Products</h3>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <img src={Fresh} alt="Fresh Vegetables" className="h-40 w-full object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-bold">Fresh Vegetables</h3>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <img src={Dairy} alt="Dairy Products" className="h-40 w-full object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-bold">Dairy Products</h3>
            </div>
          </div>
        </div>
        <div>
      <div className="flex flex-wrap justify-center p-8">
        <div className="w-1/3 p-4">
          <img src={agri_prd} alt="Quality Standards" className="rounded-lg shadow-lg w-full h-auto" />
          <h3 className="text-center text-lg font-bold mt-2">Quality Standards</h3>
        </div>
        <div className="w-1/3 p-4">
          <img src={orn_prd} alt="Organic Farming" className="rounded-lg shadow-lg w-full h-auto" />
          <h3 className="text-center text-lg font-bold mt-2">Organic Farming</h3>
        </div>
        <div className="w-1/3 p-4">
          <img src={Dairy} alt="Agriculture Products" className="rounded-lg shadow-lg w-full h-auto" />
          <h3 className="text-center text-lg font-bold mt-2">Agriculture Products</h3>
        </div>
      </div>
          </div>
      </section>
      
  );
};

export default Services;

