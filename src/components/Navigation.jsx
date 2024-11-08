import { useState } from "react";
import logo from "../images/logo.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const liStyle = "text-white hover:text-blue-500 transition duration-300";

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <img src={logo} alt="logo" className="h-10 inline-block mr-2" />
        </div>
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
        <ul
          className={`md:flex md:space-x-8 items-center absolute md:relative left-0 right-0 top-16 md:top-auto bg-gray-900 md:bg-transparent p-4 md:p-0 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <a href="/" className={liStyle}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={liStyle}>
              About
            </a>
          </li>
          <li>
            <a href="#services" className={liStyle}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className={liStyle}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
