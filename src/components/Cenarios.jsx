import img1 from "../assets/m1.jpeg";
import img2 from "../assets/m2.jpeg";
import "../App.css";
import Lobis from "../assets/Lobi.png";
import { React, useEffect, useRef } from "react";

function Cenario() {
  let ImageContainerRef = useRef(null);

  const images = [img1, img2];

  useEffect(() => {
    const IntervalId = setInterval(() => {
      if (ImageContainerRef.current) {
        ImageContainerRef.current.scrollLeft += 900;
      }
    }, 5000);
    return () => clearInterval(IntervalId);
  });
  const prev = () => (ImageContainerRef.current.scrollLeft -= 900);
  const next = () => (ImageContainerRef.current.scrollLeft += 900);

  return (
    <>
      <div className="page-container mt-44 md:mt-40 ">
        <div className="content flex">
          <div className="prev w-20" onClick={prev}></div>
          <div className="slide-painel" ref={ImageContainerRef}>
            {images.map((image) => {
              return <img src={image} className="itemCar" key={1} />;
            })}
          </div>
          <div className="next w-20" onClick={next}></div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <div className="lg:grid grid-rows-2 lg:grid-cols-2 gap-0 text-white">
          <div className="cardBoss flex md:bg-gradient-to-r from-zinc-900 to-transparent bg-gradient-to-b p-5">
            <div className="BossFoto  w-100 md:w-1/3 md:h-full w-full h-1/3 flex justify-center">
              <img
                src={Lobis}
                className="border-4 outline-red-900 outline outline-2 rounded-full p-2"
              ></img>
            </div>
            <div className="w-full">
              <h1 className="font-mono text-center text-lg bg-zinc-800 rounded-sm">
                Lobisomen
              </h1>
              <h2 className="font-mono p-2 ">
                O temido mito do fólclore americano agora se apresenta o
                desafiando para um duelo em seu temido mundo.{" "}
              </h2>
            </div>
          </div>
          <div className="cardBoss flex md:bg-gradient-to-l from-zinc-900 to-transparent bg-gradient-to-b p-5">
            <div className="w-full">
              <h1 className="font-mono text-center text-lg bg-zinc-800 rounded-sm">
                Lobisomen
              </h1>
              <h2 className="font-mono p-2 ">
                O temido mito do fólclore americano agora se apresenta o
                desafiando para um duelo em seu temido mundo.{" "}
              </h2>
            </div>
            <div className="BossFoto  w-100 md:w-1/3 md:h-full w-full h-1/3 flex justify-center">
              <img
                src={Lobis}
                className="border-4 outline-red-900 outline outline-2 rounded-full p-2"
              ></img>
            </div>
          </div>
          <div className="cardBoss flex md:bg-gradient-to-r from-zinc-900 to-transparent bg-gradient-to-b p-5">
            <div className="BossFoto  w-100 md:w-1/3 md:h-full w-full h-1/3 flex justify-center">
              <img
                src={Lobis}
                className="border-4 outline-red-900 outline outline-2 rounded-full p-2"
              ></img>
            </div>
            <div className="w-full">
              <h1 className="font-mono text-center text-lg bg-zinc-800 rounded-sm">
                Lobisomen
              </h1>
              <h2 className="font-mono p-2 ">
                O temido mito do fólclore americano agora se apresenta o
                desafiando para um duelo em seu temido mundo.{" "}
              </h2>
            </div>
          </div>
          <div className="cardBoss flex md:bg-gradient-to-l from-zinc-900 to-transparent bg-gradient-to-b p-5">
            <div className="w-full">
              <h1 className="font-mono text-center text-lg bg-zinc-800 rounded-sm">
                Lobisomen
              </h1>
              <h2 className="font-mono p-2 ">
                O temido mito do fólclore americano agora se apresenta o
                desafiando para um duelo em seu temido mundo.{" "}
              </h2>
            </div>
            <div className="BossFoto  w-100 md:w-1/3 md:h-full w-full h-1/3 flex justify-center">
              <img
                src={Lobis}
                className="border-4 outline-red-900 outline outline-2 rounded-full p-2"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cenario;
