import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#001c2e] text-white py-12 px-6 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <img src={logo} />
            </div>
            <span className="text-xl font-bold tracking-tighter text-purple-600">
              HERO.IO
            </span>
          </Link>

          <div className="flex flex-col items-center md:items-end gap-3">
            <h3 className="text-lg font-medium">Social Links</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <IconBrandX size={24} stroke={1.5} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <IconBrandLinkedin size={24} stroke={1.5} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <IconBrandFacebook size={24} stroke={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 w-full mb-8"></div>

        <p className="text-center text-gray-400 text-sm">
          Copyright © 2025 - All right reserved
        </p>
      </div>
    </footer>
  );
}
