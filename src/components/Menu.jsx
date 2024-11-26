import HelsingLogo from "../assets/logo.png";
import "../App.css";
import Lobo from "../assets/Lobi.png";
import Vamp from "../assets/vamp.png";
import Frank from "../assets/Frank.png";
import Dragao from "../assets/dragao.png";
import React from "react";
import FileSaver from "file-saver";

function Menu() {
  // Ajuste para usar o caminho direto do arquivo na pasta public
  const handleDownload = () => {
    const fileUrl = '/Helsing.rar'; // Caminho relativo ao arquivo na pasta public
    FileSaver.saveAs(fileUrl, 'Helsing.rar');
  };

  return (
    <main className="bg-opacity-45 bg-black" id="menu">
      <div className="container mx-auto px-5 py-40">
        <div className="grid lg:grid-cols-2">
          <div className="menuBanner grid grid-rows-2">
            <div className="text-white">
              <h1 className="RTDyans font-thin text-4xl md:text-5xl text-center py-20 md:p-20 bg-black bg-opacity-75">
                Se desafie contra inimigos poderosos e cenários deslumbrantes
              </h1>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 place-items-center gap-2 pb-10">
              <div className="imgMenu divLobo flex">
                <img
                  src={Lobo}
                  className="Lobo p-5 bg-black bg-opacity-65"
                  alt="Lobo"
                />
              </div>
              <div className="imgMenu divVamp flex">
                <img
                  src={Vamp}
                  className="Vamp scale-110 bg-black bg-opacity-65 p-5"
                  alt="Vampiro"
                />
              </div>
              <div className="imgMenu divFrank flex">
                <img
                  src={Frank}
                  className="Frank bg-black bg-opacity-65 w-full scale-100"
                  alt="Frankenstein"
                />
              </div>
              <div className="imgMenu divDragao flex">
                <img
                  src={Dragao}
                  className="Dragao bg-black bg-opacity-65 scale-90 p-3"
                  alt="Dragão"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center text-center items-center bg-black bg-opacity-80">
            <div className="Download py-20">
              <img src={HelsingLogo} className="h-28 md:h-36 pb-9" alt="Logo do Helsing" />
              <button
                onClick={handleDownload}
                className="btnDownload px-10 md:px-16 py-3 text-lg text-white rounded-sm"
              >
                <h1>Baixe Já!</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Menu;
