import { IconBrandGithub, IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyles = ({ isActive }) =>
    `transition-all duration-200 border-b-2 pb-1 font-medium ${
      isActive
        ? "text-purple-600 border-purple-600"
        : "text-gray-600 border-transparent hover:text-purple-600 hover:border-purple-600"
    }`;

  return (
    <nav className="sticky top-0 left-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <img src={logo} />
          </div>
          <span className="text-xl font-bold tracking-tighter text-purple-600">
            HERO.IO
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/" className={linkStyles}>
            Home
          </NavLink>
          <NavLink to="/apps" className={linkStyles}>
            Apps
          </NavLink>
          <NavLink to="/installation" className={linkStyles}>
            Installation
          </NavLink>
        </div>

        <button>
          <a
            href={"https://github.com/adnan-akhlas"}
            target="_blank"
            className="hidden md:flex gap-2 px-10 py-2.5 bg-linear-to-r from-[#7c3aed] to-[#a855f7] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-purple-200 active:scale-95 transition-all duration-200 items-center justify-center min-w-45"
          >
            <IconBrandGithub size={20} />
            Contribute
          </a>
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600"
        >
          {isOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-6 flex flex-col gap-6 shadow-xl">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="text-lg">
            Home
          </NavLink>
          <NavLink
            to="/apps"
            onClick={() => setIsOpen(false)}
            className="text-lg"
          >
            Apps
          </NavLink>
          <NavLink
            to="/installation"
            onClick={() => setIsOpen(false)}
            className="text-lg"
          >
            Installation
          </NavLink>
          <button className="bg-purple-600 text-white w-full py-3 rounded-lg font-bold flex justify-center gap-2">
            <IconBrandGithub size={20} /> Contribute
          </button>
        </div>
      )}
    </nav>
  );
}
