import React from "react";
import FileSaver from "file-saver";
import manualPdf from "../assets/Manual.pdf";

function Manual() {
  const handleDownload = () => {
    FileSaver.saveAs(manualPdf, "Manual.pdf");
  };

  return (
    <div className="Manual bg-black pt-5">
      <p className=" text-white text-center RTDyans text-3xl">
        Dificuldades? <br></br> Consulte o nosso manual que contém dicas
        valiosas!
      </p>
      <div className="MainTxt flex justify-center p-10 bg-black">
        <div className="cont grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl md:ps-20">
          <h1 className="RTDyans text-white text-5xl md:text-6xl md:border-e flex justify-center">
            <span className="C text-7xl">M</span>anual
          </h1>
          <div className="bttn flex justify-center items-center md:pe-20">
            <button
              onClick={handleDownload}
              className="btnDownload text-white p-4 px-8 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out"
              aria-label="Baixar o manual"
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manual;
