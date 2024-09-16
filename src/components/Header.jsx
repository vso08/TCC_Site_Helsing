import { useState } from "react";
import HelsingLogo from "../assets/logo.png";
import Hamburger from "../assets/menu.svg";
import "../App.css";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header>
      <nav className="bg-gradient-to-b from-black from-10% to-transparent to-80% flex fixed w-screen justify-between mt-0 p-1 lg:p-0 z-20">
        <div className="Logo ps-10 md:ps-40">
          <img src={HelsingLogo} className="h-12" alt="React Logo" />
        </div>
        <div className="w-full justify-between hidden lg:block pe-20 lg:pe-40">
          <ul className="list-none p-3 gap-10 xl:gap-20 visible flex flex-row w-full justify-end text-white text-sm xl:text-xl lg:text-lg">
            <li className="relative">
              <a
                href="#"
                className="Item p-3 RTDyans"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown();
                }}
              >
                Conteúdos
              </a>
              {dropdownVisible && (
                <ul className="absolute bg-zinc-900 text-white text-sm rounded-lg mt-1 p-2 w-48">
                  <li>
                    <a href="/Cenarios.jsx" className="block px-4 py-2 hover:bg-gray-700">
                      Cenários
                    </a>
                  </li>
                  <li>
                    <a href="/Bosses.jsx" className="block px-4 py-2 hover:bg-gray-700">
                      Chefões
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                      Download
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" className="Item p-3 RTDyans">
                Sobre Nós
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <span>
            <button onClick={toggleVisibility}>
              <img
                className="menu visible lg:hidden p-3 me-10 md:me-40"
                src={Hamburger}
              />
            </button>
          </span>
        </div>
      </nav>
      <div
        className={`responsive pt-16 text-white text-center justify-center flex bg-zinc-900 fixed w-screen z-10 ${
          isVisible ? "" : "hidden"
        }`}
      >
        <ul className="text-xl w-screen justify-center text-center py-3">
          <li className="relative">
              <ul className="absolute bg-zinc-900 text-white text-sm rounded-lg mt-1 p-2 w-full">
                <li>
                  <a href="./Cenarios.jsx " className="RTDyans block px-4 py-2 hover:bg-gray-700 text-xl">
                    Cenários
                  </a>
                </li>
                <li>
                  <a href="/Bosses.jsx" className="RTDyans block px-4 py-2 hover:bg-gray-700">
                    Chefões
                  </a>
                </li>
                <li>
                  <a href="#" className="RTDyans block px-4 py-2 hover:bg-gray-700">
                    Download
                  </a>
                </li>
              </ul>
          </li>
          <li className="p-2">
            <a className="RTDyans Item">Sobre Nós</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
