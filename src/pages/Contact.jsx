import React from "react";

export default function Contact() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-gray-700 mt-4">
            We would love to hear from you. Reach out to us for any queries or
            assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-6">
              Feel free to contact us via phone, email, or visit our office
              during working hours.
            </p>
            <ul className="text-gray-700">
              <li className="mb-4">
                <span className="font-bold">Address:</span> 1234 Example Street,
                City, Country
              </li>
              <li className="mb-4">
                <span className="font-bold">Phone:</span> +1 234 567 890
              </li>
              <li className="mb-4">
                <span className="font-bold">Email:</span> contact@example.com
              </li>
              <li>
                <span className="font-bold">Working Hours:</span> Mon - Fri, 9
                AM - 6 PM
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
            <form action="#" method="POST">
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  rows="4"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-6">
            Our Location
          </h3>
          <div className="w-full h-96 rounded-lg shadow-md overflow-hidden">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d144.95373631531646!3d-37.816279742018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727f7dd3c3ab40!2sExample%20Place!5e0!3m2!1sen!2sus!4v1631086356554!5m2!1sen!2sus"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
