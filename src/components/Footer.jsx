import React from "react";
import { NavLink } from "react-router";
import imgLogo from "../assets/logo.png";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-400">
      <div className="px-4 pt-16 mx-auto max-w-7xl md:px-8">
        <div className="grid gap-10 mb-8 lg:grid-cols-6">
          {/* Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-4 md:grid-cols-4">
            {/* Column */}
            <div>
              <p className="font-semibold text-gray-200">Category</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <NavLink to="/" className="hover:text-white">
                    News
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="hover:text-white">
                    World
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="hover:text-white">
                    Games
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="hover:text-white">
                    References
                  </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-200">Apps</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <NavLink to="/" className="hover:text-white">
                    Web
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="hover:text-white">
                    eCommerce
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="hover:text-white">
                    Business
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="hover:text-white">
                    Portfolio
                  </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-200">Resources</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <NavLink to="/" className="hover:text-white">
                    Media
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="hover:text-white">
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="hover:text-white">
                    Education
                  </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-200">Company</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <NavLink to="/" className="hover:text-white">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="hover:text-white">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="hover:text-white">
                    Privacy
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Subscribe */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={imgLogo} className="h-8" />
              <span className="text-white font-bold">HERO.IO</span>
            </div>

            <p className="text-sm mb-4">
              Subscribe to get updates about new apps and features.
            </p>

            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 pb-10 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} HERO.IO. All rights reserved.
          </p>

          <div className="flex gap-4 mt-4 sm:mt-0">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition text-lg"
            >
              <FaTwitter />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition text-lg"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition text-lg"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
