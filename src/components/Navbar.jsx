import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-[#4CAF50] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/src/assets/images/logofall.JPJ"
                alt="Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Liens desktop */}
          <div className="hidden md:flex items-center ml-10 space-x-8 justify-center ">
            <Link
              to="/services"
              className="text-white text-2xl font-medium  hover:text-yellow-200 transition-all duration-300 relative group"
            >
              Services
              <span className="block h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>

            <Link
              to="/contact"
              className="text-white font-medium text-2xl hover:text-yellow-200 transition-all duration-300 relative group"
            >
              Contact
              <span className="block h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </div>

          {/* Liens de droite (auth) */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-white font-medium text-sm hover:text-yellow-200 transition duration-300"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="bg-white text-[#4CAF50] hover:bg-yellow-300 font-semibold text-sm py-1.5 px-4 rounded transition duration-300"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-white text-[#4CAF50] hover:bg-yellow-300 font-semibold text-sm py-1.5 px-4 rounded transition duration-300"
              >
                Connexion
              </Link>
            )}
          </div>

          {/* Icône menu mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-300 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl">
          <div className="px-4 py-4 space-y-2">
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="block text-gray-800 font-medium hover:bg-gray-100 px-4 py-2 rounded transition duration-300"
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-gray-800 font-medium hover:bg-gray-100 px-4 py-2 rounded transition duration-300"
            >
              Contact
            </Link>
            <Link
              to="/devis"
              onClick={() => setIsOpen(false)}
              className="block bg-yellow-300 hover:bg-yellow-400 text-center text-[#4CAF50] font-bold px-4 py-2 rounded transition duration-300"
            >
              Demander un devis
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-800 font-medium hover:bg-gray-100 px-4 py-2 rounded transition duration-300"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left text-red-500 hover:bg-red-100 px-4 py-2 rounded transition duration-300"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block text-gray-800 font-medium hover:bg-gray-100 px-4 py-2 rounded transition duration-300"
              >
                Connexion
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
