import { useState } from "react";
import HelsingLogo from "../assets/logo.png";
import Hamburger from "../assets/menu.svg";
import "../App.css";

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const BackgroundColor = {
    background: "rgba(17, 17, 17, 1)",
  };

  return (
    <header>
      <nav
        className="border-black flex fixed w-screen justify-between mt-0 p-1 lg:p-0 z-20"
        style={BackgroundColor}
      >
        <div className="Logo ps-10 md:ps-40">
          <img src={HelsingLogo} className="h-12" alt="React Logo" />
        </div>
        <div className="w-full justify-between hidden lg:block pe-20 lg:pe-40 ">
          <ul className="list-none p-3 gap-10 xl:gap-20 visible flex flex-row w-full justify-end text-white text-sm xl:text-xl lg:text-lg">
            <li>
              <a href="" className="Item p-3">
                Conteúdos
              </a>
            </li>
            <li>
              <a href="" className="Item p-3">Sobre Nós</a>
            </li>
            <li>
              <button className="border px-10 rounded-xl text-white bg-gradient-to-r from-yellow-300 to-red-600 outline outline-black outline-1 border-black">
                Download
              </button>
            </li>
          </ul>
        </div>
        <div className="">
          <span>
            <button onClick={toggleVisibility}>
              <img
                className="menu visible lg:hidden p-3 me-10 md:me-40"
                src={Hamburger}
              ></img>
            </button>
          </span>
        </div>
      </nav>
      <div
        className={`responsive pt-16 text-white tex-center justify-center flex bg-zinc-900 fixed w-screen ${
          isVisible ? "" : "hidden"
        }`}
      >
        <ul className="text-xl w-screen justify-center text-center py-3">
          <li className="p-2 ">
            <a className="Item">Conteúdos</a>
          </li>
          <li className="p-2 ">
            <a className="Item">Sobre Nós</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
