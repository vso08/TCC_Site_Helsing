import HelsingLogo from "../assets/logo.png";
import "../App.css";
import Lobo from "../assets/Lobi.png";

function Menu() {
  return (
    <main className="bg-opacity-45 bg-black">
      <div className="container mx-auto px-5 md:px-0 py-40 ">
        <div className="grid lg:grid-cols-2">
          <div className="menuBanner grid grid-rows-2">
            <div className="text-white">
              <h1 className="RTDyans font-thin text-4xl md:text-5xl  text-center py-20 md:p-20 bg-black bg-opacity-75">
                Se desafie contra inimigos poderosos e cenários deslumbrantes
              </h1>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 place-items-center">
              <div className="imgMenu Lobo flex">
                <img src={Lobo} className="bg-black bg-opacity-35"></img>
              </div>
              <div className="imgMenu Frank flex">
                <img src={Lobo} className="bg-black bg-opacity-35"></img>
              </div>
              <div className="imgMenu Vamp flex">
                <img src={Lobo} className="bg-black bg-opacity-35"></img>
              </div>
              <div className="imgMenu Ult flex">
                <img src={Lobo} className="bg-black bg-opacity-35"></img>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-center items-center bg-black bg-opacity-80">
            <div className="Download py-20">
              <img src={HelsingLogo} className="h-28 md:h-36 pb-9"></img>
              <button className=" btnDownload px-10 md:px-16 py-3 text-lg text-white">
                <h1 className="">Baixe Já!</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Menu;
