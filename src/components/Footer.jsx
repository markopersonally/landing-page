export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-blue-500 transition duration-300"
              >
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-blue-500 transition duration-300"
              >
                Careers
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-blue-500 transition duration-300"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-blue-500 transition duration-300"
              >
                Help Center
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-blue-500 transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-blue-500 transition duration-300"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul>
            <li className="mb-2">1234 Example Street, City, Country</li>
            <li className="mb-2">Phone: +1 234 567 890</li>
            <li>Email: contact@example.com</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
