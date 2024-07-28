import Bgk from '../../assets/Bgk.jpeg'
const Contact = () => (
    <section  className="relative bg-cover bg-center h-50"  style={{ backgroundImage: `url(${Bgk})` }}>
  <div className="flex flex-col lg:flex-row">
    <div className="w-full lg:w-1/2 h-96 bg-gray-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.618507990238!2d76.91563901526676!3d15.140159090137013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc8b4c7fcbff349%3A0x7482f6d3c6e6d0e7!2sBallari%20Institute%20of%20Technology%20and%20Management!5e0!3m2!1sen!2sin!4v1614977923349!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
      ></iframe>
    </div>
    <div className="w-full lg:w-1/2 bg-gray-100 p-8 rounded-md">
      <h2 className="text-2xl font-bold text-yellow-600">Contact us</h2>
      <h3 className="text-3xl font-bold">Write a Message</h3>
      <form className="mt-4 space-y-4">
        <div>
          <input type="text" placeholder="Name" className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <input type="email" placeholder="Email Address" className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <textarea placeholder="Write a Message" className="w-full p-2 border rounded-md" rows="4"></textarea>
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md">Send a Message</button>
      </form>
    </div>
  </div>
  </section>
);

export default Contact;
