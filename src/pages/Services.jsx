export default function Services() {
  const divServices =
    "bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300";
  const titleServices = "text-2xl font-semibold mb-4 text-violet-700";
  const listServices = "list-disc list-inside text-left text-zinc-700 mb-4";
  const btnServices =
    "inline-block px-6 py-2 bg-violet-500 text-white font-semibold rounded hover:bg-violet-800 transition duration-300";

  return (
    <section className="py-12 mx-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-violet-700">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={divServices}>
            <h3 className={titleServices}>Web Development</h3>
            <ul className={listServices}>
              <li>Custom website design</li>
              <li>Responsive layouts</li>
              <li>Performance optimization</li>
              <li>Cross-browser compatibility</li>
              <li>Maintenance & support</li>
            </ul>
            <button className={btnServices}>Learn More</button>
          </div>
          <div className={divServices}>
            <h3 className={titleServices}>E-commerce Solutions</h3>
            <ul className={listServices}>
              <li>Online store setup</li>
              <li>Payment gateway integration</li>
              <li>Inventory management</li>
              <li>Custom shopping cart</li>
              <li>Order tracking & analytics</li>
            </ul>
            <button className={btnServices}>Learn More</button>
          </div>
          <div className={divServices}>
            <h3 className={titleServices}>SEO & Marketing</h3>
            <ul className={listServices}>
              <li>Keyword research & strategy</li>
              <li>On-page & off-page SEO</li>
              <li>Content marketing</li>
              <li>Social media management</li>
              <li>Pay-per-click advertising (PPC)</li>
            </ul>
            <button className={btnServices}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
