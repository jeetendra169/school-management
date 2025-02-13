import React from "react";

const ContactUs = () => {
  return (
    <div id="contact" className=" text-gray-800 min-h-screen flex items-center justify-center p-2 md:p-8">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          <span className="text-red-400">Reach Out</span> To Us Anytime, We’re
          Here For You
        </h1>
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          <div className="bg-blue-100 p-8 rounded-lg shadow-lg w-full lg:w-2/3 mb-8 lg:mb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                className="p-4 rounded-lg border border-gray-300"
                placeholder="Full name"
                type="text"
              />
              <input
                className="p-4 rounded-lg border border-gray-300"
                placeholder="Email address"
                type="email"
              />
              <input
                className="p-4 rounded-lg border border-gray-300"
                placeholder="Phone number"
                type="text"
              />
              <input
                className="p-4 rounded-lg border border-gray-300"
                placeholder="Subject"
                type="text"
              />
            </div>
            <textarea
              className="p-4 rounded-lg border border-gray-300 w-full h-32 mb-4"
              placeholder="Message"
            ></textarea>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
              Submit
            </button>
          </div>
          <div className="lg:ml-8 text-center">
            <img
              src="https://storage.googleapis.com/a1aa/image/TjX7qtN1RalU5lYyORzQubyEpjk5QLN5JW7wqAFSdlU.jpg"
              alt="Customer service representative wearing a headset and smiling"
              className="rounded-lg shadow-lg mb-4"
              width="300"
              height="300"
            />
            <p className="text-gray-700 mb-2">Follow us on social media</p>
            <div className="flex space-x-4 text-blue-150 justify-center">
              <a className="text-2xl" href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a className="text-2xl" href="#">
                <i className="fab fa-youtube"></i>
              </a>
              <a className="text-2xl" href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-2xl" href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="flex items-center justify-center p-4 border rounded-lg">
            <i className="fas fa-envelope text-blue-500 text-2xl mr-4"></i>
            <span>hello@example.com</span>
          </div>
          <div className="flex items-center justify-center p-4 border rounded-lg">
            <i className="fas fa-phone text-blue-500 text-2xl mr-4"></i>
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center justify-center p-4 border rounded-lg">
            <i className="fas fa-map-marker-alt text-blue-500 text-2xl mr-4"></i>
            <span>Chicago HQ Estica Cop. Macomb, MI 48042</span>
          </div>
        </div>

       
  

        {/* Google Map Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Location
          </h2>
          <iframe
            title="Google Map"
            className="w-full h-80 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d85376.03158225813!2d77.41105882517928!3d23.263333565454342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1739477799907!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
