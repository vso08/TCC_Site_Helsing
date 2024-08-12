import img1 from "../assets/m1.jpeg";
import img2 from "../assets/m2.jpeg";
import "../App.css";
import { React, useRef } from "react";

function Cenario() {
  let ImageContainerRef = useRef(null);

  const images = [img1, img2];

  const prev = () => (ImageContainerRef.current.scrollLeft -= 900);
  const next = () => (ImageContainerRef.current.scrollLeft += 900);

  return (
    <>
      <div className="page-container pt-44 md:pt-40">
        <div className="content">
          <div className="prev" onClick={prev}></div>
          <div className="slide-painel" ref={ImageContainerRef}>
            {images.map((image) => {
              return <img src={image} className="itemCar" key={1} />;
            })}
          </div>
          <div className="next" onClick={next}></div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <div className="lg:grid grid-rows-2 lg:grid-cols-2 gap-10 text-white">
          <div className="cardBoss border flex">
            <div className="BossFoto border w-100 w-1/3 h-full"></div>
            <h2> a 
           </h2>
          </div>
          <div className="cardBoss">
            <h1 className="title text-center">Frankstein</h1>
            <h2>
            Um mundo de mistério e horror, onde sua coragem será testada ao extremo. Enfrente o poderoso Frankenstein e prove que você é o verdadeiro herói neste jogo eletrizante!
            </h2>
          </div >
          <div className="cardBoss">
            <h1>Mundo 3</h1>
            <h2>Em desenvolvimento</h2>
          </div>
          <div className="cardBoss">
            <h1>Mundo 4</h1>
            <h2>Em desenvolvimento</h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cenario;
