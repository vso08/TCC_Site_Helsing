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
                    <a
                      href="#cenarios" // Use an anchor link
                      className="block px-4 py-2 hover:bg-gray-700"
                      onClick={() => setDropdownVisible(false)}
                    >
                      Cenários
                    </a>
                  </li>
                  <li>
                    <a
                      href="#bosses" // Use an anchor link
                      className="block px-4 py-2 hover:bg-gray-700"
                      onClick={() => setDropdownVisible(false)}
                    >
                      Chefões
                    </a>
                  </li>
                  <li>
                    <a
                      href="#menu" // Add this if needed
                      className="block px-4 py-2 hover:bg-gray-700"
                      onClick={() => setDropdownVisible(false)}
                    >
                      Download
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#sobre" className="Item p-3 RTDyans">
                Sobre
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span>
            <button onClick={toggleVisibility}>
              <img
                className="menu visible lg:hidden p-3 me-10 md:me-40"
                src={Hamburger}
                alt="Menu"
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
        <ul className="text-xl w-screen justify-center text-center RTDyans">
          <li className="p-2">
            <a href="#cenarios" onClick={() => setIsVisible(false)}>Cenários</a>
          </li>
          <li className="p-2">
            <a href="#bosses" onClick={() => setIsVisible(false)}>Chefões</a>
          </li>
          <li className="p-2">
            <a href="#download" onClick={() => setIsVisible(false)}>Download</a>
          </li>
          <li className="p-2">
            <a href="#sobre" onClick={() => setIsVisible(false)}>Sobre</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
