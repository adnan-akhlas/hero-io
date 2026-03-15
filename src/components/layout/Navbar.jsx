import { useState } from "react";
import { NavLink, Link } from "react-router";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkStyles = ({ isActive }) =>
    `transition-all duration-200 border-b-2 pb-1 font-medium ${
      isActive
        ? "text-purple-600 border-purple-600"
        : "text-gray-600 border-transparent hover:text-purple-600 hover:border-purple-600"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <img src={logo} />
            </div>
            <span className="text-xl font-bold tracking-tighter text-purple-600">
              HERO.IO
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <NavLink title="Home" to="/" className={linkStyles}>
              Home
            </NavLink>
            <NavLink title="Apps" to="/apps" className={linkStyles}>
              Apps
            </NavLink>
            <NavLink
              title="Installation"
              to="/installation"
              className={linkStyles}
            >
              Installation
            </NavLink>
          </div>

          <div className="hidden md:block">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-md active:scale-95"
            >
              <IconBrandGithubFilled />
              Contribute
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-purple-600 focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pt-2 pb-6 space-y-4 bg-white border-t border-gray-100 shadow-xl">
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-700 hover:text-purple-600 font-medium"
          >
            Home
          </NavLink>
          <NavLink
            to="/apps"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-700 hover:text-purple-600 font-medium"
          >
            Apps
          </NavLink>
          <NavLink
            to="/installation"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-700 hover:text-purple-600 font-medium"
          >
            Installation
          </NavLink>
          <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold">
            Contribute
          </button>
        </div>
      </div>
    </nav>
  );
}
