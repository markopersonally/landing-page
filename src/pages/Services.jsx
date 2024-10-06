export default function Services() {
  return (
    <section className="py-12 mx-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-700 mb-4">
              We create modern, responsive websites that provide an optimal user
              experience on any device.
            </p>
            <ul className="list-disc list-inside text-left text-gray-700 mb-4">
              <li>Custom website design</li>
              <li>Responsive layouts</li>
              <li>Performance optimization</li>
              <li>Cross-browser compatibility</li>
              <li>Maintenance & support</li>
            </ul>
            <a
              href="/web-development"
              className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
            >
              Learn More
            </a>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              E-commerce Solutions
            </h3>
            <p className="text-gray-700 mb-4">
              Our e-commerce solutions help you sell products online easily and
              efficiently.
            </p>
            <ul className="list-disc list-inside text-left text-gray-700 mb-4">
              <li>Online store setup</li>
              <li>Payment gateway integration</li>
              <li>Inventory management</li>
              <li>Custom shopping cart</li>
              <li>Order tracking & analytics</li>
            </ul>
            <a
              href="/ecommerce-solutions"
              className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
            >
              Learn More
            </a>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">SEO & Marketing</h3>
            <p className="text-gray-700 mb-4">
              We boost your online presence through advanced SEO strategies and
              marketing campaigns.
            </p>
            <ul className="list-disc list-inside text-left text-gray-700 mb-4">
              <li>Keyword research & strategy</li>
              <li>On-page & off-page SEO</li>
              <li>Content marketing</li>
              <li>Social media management</li>
              <li>Pay-per-click advertising (PPC)</li>
            </ul>
            <a
              href="/seo-marketing"
              className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
