import { useState } from "react";
import { Link } from "react-router-dom";
import { darkMod } from "../../../interface/darkMod";
import { transitionDarkModeCss } from "../../../util/transitionDarkModCss";

export function Navbar({ darkMod }: darkMod) {
  const [isOpen, setIsOpen] = useState(false);

  const linkNavBarResponsive = `${
    darkMod ? "text-gray-300" : "text-black"
  } hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-semibold`;
  const linkNavBar = `${
    darkMod ? "text-gray-300" : "text-black"
  } hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-semibold ${transitionDarkModeCss}`;

  return (
    <nav
      className={`${
        darkMod ? "bg-neutral-800" : "bg-white"
      } shadow-lg fixed w-full z-10 ${transitionDarkModeCss}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <span
                className={`${
                  darkMod ? "text-white" : "text-black"
                } text-lg font-bold ${transitionDarkModeCss}`}
              >
                Rafael Masselli
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="#" className={linkNavBar}>
                  Inicio
                </Link>
                <Link to="#" className={linkNavBar}>
                  Contato
                </Link>
                <Link to="#" className={linkNavBar}>
                  GBA
                </Link>
                <Link to="#" className={linkNavBar}>
                  Projetos
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className={linkNavBarResponsive}>
              Inicio
            </a>
            <a href="#" className={linkNavBarResponsive}>
              Contato
            </a>
            <a href="#" className={linkNavBarResponsive}>
              GBA
            </a>
            <a href="#" className={linkNavBarResponsive}>
              Projetos
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
