export default function Navigation() {
  const liStyle = "text-white hover:text-blue-500 transition duration-300";

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <img src="" alt="logo" className="h-10 inline-block mr-2" />
          Logo
        </div>
        <ul className="flex space-x-8">
          <li>
            <a href="#" className={liStyle}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={liStyle}>
              About
            </a>
          </li>
          <li>
            <a href="#" className={liStyle}>
              Services
            </a>
          </li>
          <li>
            <a href="#" className={liStyle}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
